<?php
/**
 * Database Connection Class (MySQLi)
 * File: config/Database.php
 * 
 * Features:
 * - Singleton pattern (one connection per page)
 * - Error handling and logging
 * - Prepared statements (SQL injection prevention)
 * - UTF-8 support
 * - Connection retry logic
 * - Works around MySQL plugin issues
 */

class Database {
    private static $instance = null;
    private $connection;
    private $config;
    private $isConnected = false;

    // Private constructor (singleton)
    private function __construct($config = []) {
        $this->config = array_merge([
            'host' => 'localhost',
            'user' => 'root',
            'pass' => '',
            'db' => 'travel_db',
            'port' => 3306,
            'charset' => 'utf8mb4'
        ], $config);

        $this->connect();
    }

    /**
     * Get singleton instance
     */
    public static function getInstance($config = []) {
        if (self::$instance === null) {
            self::$instance = new self($config);
        }
        return self::$instance;
    }

    /**
     * Connect to database with retry logic and plugin workaround
     */
    private function connect() {
        // Attempt 1: Standard connection
        $this->connection = @new mysqli(
            $this->config['host'],
            $this->config['user'],
            $this->config['pass'],
            $this->config['db'],
            $this->config['port']
        );

        // Check connection
        if ($this->connection->connect_error) {
            $errorMsg = $this->connection->connect_error;
            $this->logError('Connection attempt 1 failed: ' . $errorMsg);
            
            // Attempt 2: Retry with default port if custom port fails
            if ($this->config['port'] !== 3306) {
                $this->connection = @new mysqli(
                    $this->config['host'],
                    $this->config['user'],
                    $this->config['pass'],
                    $this->config['db'],
                    3306
                );

                if ($this->connection->connect_error) {
                    $this->logError('Connection attempt 2 failed: ' . $this->connection->connect_error);
                } else {
                    $this->logInfo('Connected with fallback port 3306');
                }
            }

            // Attempt 3: Try with socket if plugin error
            if ($this->connection->connect_error && 
                (stripos($errorMsg, 'plugin') !== false || stripos($errorMsg, 'caching_sha2_password') !== false)) {
                
                $this->connection = @new mysqli(
                    $this->config['host'] . ':' . ini_get('mysqli.default_port'),
                    $this->config['user'],
                    $this->config['pass'],
                    $this->config['db']
                );

                if ($this->connection->connect_error) {
                    $this->logError('Connection attempt 3 (socket) failed: ' . $this->connection->connect_error);
                }
            }

            // If still failed, throw exception
            if ($this->connection->connect_error) {
                $this->logError('All connection attempts failed: ' . $this->connection->connect_error);
                throw new Exception('Database connection failed: ' . $this->connection->connect_error . 
                    ' | Check MySQL is running and credentials in config/connect.php');
            }
        }

        // Set charset
        $this->connection->set_charset($this->config['charset']);
        $this->isConnected = true;
        $this->logInfo('Connected to database: ' . $this->config['db']);
    }

    /**
     * Get raw MySQLi connection
     */
    public function getConnection() {
        return $this->connection;
    }

    /**
     * Check if connected
     */
    public function isConnected() {
        return $this->isConnected && $this->connection && $this->connection->ping();
    }

    /**
     * Execute prepared statement
     * @param string $sql SQL query with ? placeholders
     * @param array $params Parameter values to bind
     * @param string $types Parameter types ('s', 'i', 'd', 'b') or auto-detect
     * @return mysqli_stmt|false
     */
    public function execute($sql, $params = [], $types = '') {
        if (!$this->isConnected()) {
            $this->logError('Not connected when executing: ' . $sql);
            throw new Exception('Database not connected');
        }

        $stmt = $this->connection->prepare($sql);
        if (!$stmt) {
            $this->logError('Prepare failed: ' . $this->connection->error . ' | SQL: ' . $sql);
            throw new Exception('Prepare failed: ' . $this->connection->error);
        }

        // Bind parameters if provided
        if (!empty($params)) {
            // Auto-detect types if not provided
            if (empty($types)) {
                $types = $this->detectTypes($params);
            }

            // Bind parameters (use call_user_func_array for variable number of args)
            $bindParams = array_merge([$types], $params);
            if (!call_user_func_array([$stmt, 'bind_param'], $this->refValues($bindParams))) {
                $this->logError('Bind failed: ' . $stmt->error);
                throw new Exception('Bind failed: ' . $stmt->error);
            }
        }

        // Execute
        if (!$stmt->execute()) {
            $this->logError('Execute failed: ' . $stmt->error . ' | SQL: ' . $sql);
            throw new Exception('Execute failed: ' . $stmt->error);
        }

        return $stmt;
    }

    /**
     * Simple query (no prepared statement - use only with safe/hardcoded queries)
     */
    public function query($sql) {
        if (!$this->isConnected()) {
            throw new Exception('Database not connected');
        }

        $result = $this->connection->query($sql);
        if (!$result && $this->connection->errno !== 0) {
            $this->logError('Query failed: ' . $this->connection->error . ' | SQL: ' . $sql);
            throw new Exception('Query failed: ' . $this->connection->error);
        }

        return $result;
    }

    /**
     * Get single row as associative array
     */
    public function fetchOne($sql, $params = [], $types = '') {
        $stmt = $this->execute($sql, $params, $types);
        if (!$stmt) {
            return null;
        }
        $result = $stmt->get_result();
        if (!$result) {
            $stmt->close();
            return null;
        }
        $row = $result->fetch_assoc();
        $stmt->close();
        return $row;
    }

    /**
     * Get all rows as array of associative arrays
     */
    public function fetchAll($sql, $params = [], $types = '') {
        $stmt = $this->execute($sql, $params, $types);
        if (!$stmt) {
            return [];
        }
        $result = $stmt->get_result();
        if (!$result) {
            $stmt->close();
            return [];
        }
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        $stmt->close();
        return $rows ?: [];
    }

    /**
     * Insert and return last insert ID
     */
    public function insert($sql, $params = [], $types = '') {
        $this->execute($sql, $params, $types);
        return $this->connection->insert_id;
    }

    /**
     * Update and return affected rows
     */
    public function update($sql, $params = [], $types = '') {
        $this->execute($sql, $params, $types);
        return $this->connection->affected_rows;
    }

    /**
     * Delete and return affected rows
     */
    public function delete($sql, $params = [], $types = '') {
        $this->execute($sql, $params, $types);
        return $this->connection->affected_rows;
    }

    /**
     * Start transaction
     */
    public function beginTransaction() {
        $this->connection->begin_transaction();
    }

    /**
     * Commit transaction
     */
    public function commit() {
        $this->connection->commit();
    }

    /**
     * Rollback transaction
     */
    public function rollback() {
        $this->connection->rollback();
    }

    /**
     * Get last error
     */
    public function getError() {
        return $this->connection->error;
    }

    /**
     * Get last errno
     */
    public function getErrorNo() {
        return $this->connection->errno;
    }

    /**
     * Close connection
     */
    public function close() {
        if ($this->connection) {
            $this->connection->close();
            $this->isConnected = false;
        }
    }

    // === PRIVATE HELPER METHODS ===

    /**
     * Auto-detect parameter types
     */
    private function detectTypes($params) {
        $types = '';
        foreach ($params as $param) {
            if (is_int($param)) {
                $types .= 'i';
            } elseif (is_float($param)) {
                $types .= 'd';
            } elseif (is_string($param)) {
                $types .= 's';
            } else {
                $types .= 's'; // default to string
            }
        }
        return $types;
    }

    /**
     * Convert parameters to reference array (required for bind_param)
     */
    private function refValues(&$arr) {
        $refs = [];
        foreach ($arr as $key => $value) {
            $refs[$key] = &$arr[$key];
        }
        return $refs;
    }

    /**
     * Log error to file
     */
    private function logError($message) {
        $this->log('ERROR', $message);
    }

    /**
     * Log info to file
     */
    private function logInfo($message) {
        $this->log('INFO', $message);
    }

    /**
     * Write to log file
     */
    private function log($level, $message) {
        $logDir = __DIR__ . '/../logs';
        if (!is_dir($logDir)) {
            mkdir($logDir, 0755, true);
        }

        $logFile = $logDir . '/database.log';
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[$timestamp] [$level] $message" . PHP_EOL;

        file_put_contents($logFile, $logMessage, FILE_APPEND);
    }

    // Prevent cloning
    private function __clone() {}

    // Prevent unserialization
    public function __wakeup() {}
}

?>
