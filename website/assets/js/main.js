// jquary-3.6.0.min.js
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(j).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Me = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ie = new RegExp(ne.join("|"),"i");
    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"]
      , $e = E.createElement("div").style
      , _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Be.length;
            while (n--)
                if ((e = Be[n] + t)in $e)
                    return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Je(e, t, n) {
        var r = Re(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = We(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            "normal" === i && t in Ge && (i = Ge[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                        return Je(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Ye(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ke.prototype,
    (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = Ke.prototype.init,
    S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval),
        S.fx.tick())
    }
    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ut, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                rt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ut(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        Ze = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        et || (et = !0,
        ot())
    }
    ,
    S.fx.stop = function() {
        et = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = E.createElement("input"),
    nt = E.createElement("select").appendChild(E.createElement("option")),
    tt.type = "checkbox",
    y.checkOn = "" !== tt.value,
    y.optSelected = nt.selected,
    (tt = E.createElement("input")).value = "t",
    tt.type = "radio",
    y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o],
            ft[o] = r,
            r = null != a(e, t, n) ? o : null,
            ft[o] = i),
            r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, gt(this)))
                });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = vt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, xt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, xt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var bt = C.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Ct = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , jt = /#.*$/
      , Dt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Ht = /^\/\//
      , Ot = {}
      , Pt = {}
      , Rt = "*/".concat("*")
      , Mt = E.createElement("a");
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Wt(t, i, o, a) {
        var s = {}
          , u = t === Pt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Mt.href = bt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = qt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Wt(Ot, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Lt.test(v.type),
            f = v.url.replace(jt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Dt, "$1"),
            o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials"in $t,
    y.ajax = $t = !!$t,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                zt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t)
                return t = We(e, n),
                Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery
      , Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt),
        e && C.jQuery === S && (C.jQuery = Vt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});

// modernizr-2.8.3-respond-1.4.2.min.js
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }
    function F(a, b) {
        return typeof a === b
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "),
        I(e, b, c))
    }
    function K() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d]in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", f = a[d]),
                e = k.type !== "text",
                e && (k.value = l,
                k.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k),
                h = b.defaultView,
                e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0,
                g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)),
                t[a[d]] = !!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b) && c(b).matches || !1;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }),
        d
    }, A = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
            d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""),
            f = F(e[d], "function"),
            F(e[d], "undefined") || (e[d] = c),
            e.removeAttribute(d))),
            e = null,
            f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), B = {}.hasOwnProperty, C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    }
    : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = w.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }
    ),
    s.flexbox = function() {
        return J("flexWrap")
    }
    ,
    s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }
    ,
    s.canvastext = function() {
        return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    s.webgl = function() {
        return !!a.WebGLRenderingContext
    }
    ,
    s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ,
    s.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    s.postmessage = function() {
        return !!a.postMessage
    }
    ,
    s.websqldatabase = function() {
        return !!a.openDatabase
    }
    ,
    s.indexedDB = function() {
        return !!J("indexedDB", a)
    }
    ,
    s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }
    ,
    s.history = function() {
        return !!a.history && !!history.pushState
    }
    ,
    s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }
    ,
    s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }
    ,
    s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"),
        G(j.backgroundColor, "rgba")
    }
    ,
    s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    }
    ,
    s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
    }
    ,
    s.backgroundsize = function() {
        return J("backgroundSize")
    }
    ,
    s.borderimage = function() {
        return J("borderImage")
    }
    ,
    s.borderradius = function() {
        return J("borderRadius")
    }
    ,
    s.boxshadow = function() {
        return J("boxShadow")
    }
    ,
    s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }
    ,
    s.opacity = function() {
        return E("opacity:.55"),
        /^0.55$/.test(j.opacity)
    }
    ,
    s.cssanimations = function() {
        return J("animationName")
    }
    ,
    s.csscolumns = function() {
        return J("columnCount")
    }
    ,
    s.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)),
        G(j.backgroundImage, "gradient")
    }
    ,
    s.cssreflections = function() {
        return J("boxReflect")
    }
    ,
    s.csstransforms = function() {
        return !!J("transform")
    }
    ,
    s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    }
    ,
    s.csstransitions = function() {
        return J("transition")
    }
    ,
    s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https:///")}', function(c, d) {
            var e = b.getElementById("smodernizr")
              , f = e.sheet || e.styleSheet
              , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }),
        a
    }
    ,
    s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    }
    ,
    s.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    s.audio = function() {
        var a = b.createElement("audio")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    s.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.webworkers = function() {
        return !!a.Worker
    }
    ,
    s.applicationcache = function() {
        return !!a.applicationCache
    }
    ,
    s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }
    ,
    s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }
    ,
    s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }
    ,
    s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    }
    ;
    for (var L in s)
        C(s, L) && (x = L.toLowerCase(),
        e[x] = s[L](),
        v.push((e[x] ? "" : "no-") + x));
    return e.input || K(),
    e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                C(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    D(""),
    i = k = null,
    function(a, b) {
        function l(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {},
            i++,
            a[h] = i,
            j[i] = b),
            b
        }
        function o(a, c, d) {
            c || (c = b);
            if (k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a),
            g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }
        function p(a, c) {
            a || (a = b);
            if (k)
                return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = m()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            k || q(a, c),
            a
        }
        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                g = "hidden"in a,
                k = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0,
                k = !0
            }
        }
        )();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s,
        r(b)
    }(this, b),
    e._version = d,
    e._prefixes = n,
    e._domPrefixes = q,
    e._cssomPrefixes = p,
    e.mq = z,
    e.hasEvent = A,
    e.testProp = function(a) {
        return H([a])
    }
    ,
    e.testAllProps = J,
    e.testStyles = y,
    e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx")
    }
    ,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("https://html.dynamiclayers.net/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;

/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function(a) {
    "use strict";
    a.matchMedia = a.matchMedia || function(a) {
        var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div");
        return f.id = "mq-test-1",
        f.style.cssText = "position:absolute;top:-100em",
        e.style.background = "none",
        e.appendChild(f),
        function(a) {
            return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>',
            c.insertBefore(e, d),
            b = 42 === f.offsetWidth,
            c.removeChild(e),
            {
                matches: b,
                media: a
            }
        }
    }(a.document)
}(this),
function(a) {
    "use strict";
    function b() {
        v(!0)
    }
    var c = {};
    a.respond = c,
    c.update = function() {}
    ;
    var d = []
      , e = function() {
        var b = !1;
        try {
            b = new a.XMLHttpRequest
        } catch (c) {
            b = new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        return function() {
            return b
        }
    }()
      , f = function(a, b) {
        var c = e();
        c && (c.open("GET.html", a, !0),
        c.onreadystatechange = function() {
            4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText)
        }
        ,
        4 !== c.readyState && c.send(null))
    }
      , g = function(a) {
        return a.replace(c.regex.minmaxwh, "").match(c.regex.other)
    };
    if (c.ajax = f,
    c.queue = d,
    c.unsupportedmq = g,
    c.regex = {
        media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
        keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,
        comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,
        urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
        findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
        only: /(only\s+)?([a-zA-Z]+)\s?/,
        minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,
        minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,
        other: /\([^\)]*\)/g
    },
    c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches,
    !c.mediaQueriesSupported) {
        var h, i, j, k = a.document, l = k.documentElement, m = [], n = [], o = [], p = {}, q = 30, r = k.getElementsByTagName("head")[0] || l, s = k.getElementsByTagName("base")[0], t = r.getElementsByTagName("link"), u = function() {
            var a, b = k.createElement("div"), c = k.body, d = l.style.fontSize, e = c && c.style.fontSize, f = !1;
            return b.style.cssText = "position:absolute;font-size:1em;width:1em",
            c || (c = f = k.createElement("body"),
            c.style.background = "none"),
            l.style.fontSize = "100%",
            c.style.fontSize = "100%",
            c.appendChild(b),
            f && l.insertBefore(c, l.firstChild),
            a = b.offsetWidth,
            f ? l.removeChild(c) : c.removeChild(b),
            l.style.fontSize = d,
            e && (c.style.fontSize = e),
            a = j = parseFloat(a)
        }, v = function(b) {
            var c = "clientWidth"
              , d = l[c]
              , e = "CSS1Compat" === k.compatMode && d || k.body[c] || d
              , f = {}
              , g = t[t.length - 1]
              , p = (new Date).getTime();
            if (b && h && q > p - h)
                return a.clearTimeout(i),
                i = a.setTimeout(v, q),
                void 0;
            h = p;
            for (var s in m)
                if (m.hasOwnProperty(s)) {
                    var w = m[s]
                      , x = w.minw
                      , y = w.maxw
                      , z = null === x
                      , A = null === y
                      , B = "em";
                    x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)),
                    y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)),
                    w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []),
                    f[w.media].push(n[w.rules]))
                }
            for (var C in o)
                o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]);
            o.length = 0;
            for (var D in f)
                if (f.hasOwnProperty(D)) {
                    var E = k.createElement("style")
                      , F = f[D].join("\n");
                    E.type = "text/css",
                    E.media = D,
                    r.insertBefore(E, g.nextSibling),
                    E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)),
                    o.push(E)
                }
        }, w = function(a, b, d) {
            var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media)
              , f = e && e.length || 0;
            b = b.substring(0, b.lastIndexOf("/"));
            var h = function(a) {
                return a.replace(c.regex.urls, "$1" + b + "$2$3")
            }
              , i = !f && d;
            b.length && (b += "/"),
            i && (f = 1);
            for (var j = 0; f > j; j++) {
                var k, l, o, p;
                i ? (k = d,
                n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1,
                n.push(RegExp.$2 && h(RegExp.$2))),
                o = k.split(","),
                p = o.length;
                for (var q = 0; p > q; q++)
                    l = o[q],
                    g(l) || m.push({
                        media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all",
                        rules: n.length - 1,
                        hasquery: l.indexOf("(") > -1,
                        minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                        maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                    })
            }
            v()
        }, x = function() {
            if (d.length) {
                var b = d.shift();
                f(b.href, function(c) {
                    w(c, b.href, b.media),
                    p[b.href] = !0,
                    a.setTimeout(function() {
                        x()
                    }, 0)
                })
            }
        }, y = function() {
            for (var b = 0; b < t.length; b++) {
                var c = t[b]
                  , e = c.href
                  , f = c.media
                  , g = c.rel && "stylesheet" === c.rel.toLowerCase();
                e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f),
                p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e),
                d.push({
                    href: e,
                    media: f
                })))
            }
            x()
        };
        y(),
        c.update = y,
        c.getEmValue = u,
        a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b)
    }
}(this);

// jquery.ajaxchimp.min.js
(function($) {
    "use strict";
    $.ajaxChimp = {
        responses: {
            "We have sent you a confirmation email": 0,
            "Please enter a value": 1,
            "An email address must contain a single @": 2,
            "The domain portion of the email address is invalid (the portion after the @: )": 3,
            "The username portion of the email address is invalid (the portion before the @: )": 4,
            "This email address looks fake or invalid. Please enter a real email address": 5
        },
        translations: {
            en: null
        },
        init: function(selector, options) {
            $(selector).ajaxChimp(options)
        }
    };
    $.fn.ajaxChimp = function(options) {
        $(this).each(function(i, elem) {
            var form = $(elem);
            var email = form.find("input[type=email]");
            var label = form.find("label[for=" + email.attr("id") + "]");
            var settings = $.extend({
                url: form.attr("action"),
                language: "en"
            }, options);
            var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
            form.attr("novalidate", "true");
            email.attr("name", "EMAIL");
            form.submit(function() {
                var msg;
                function successCallback(resp) {
                    if (resp.result === "success") {
                        msg = "We have sent you a confirmation email";
                        label.removeClass("error").addClass("valid");
                        email.removeClass("error").addClass("valid")
                    } else {
                        email.removeClass("valid").addClass("error");
                        label.removeClass("valid").addClass("error");
                        var index = -1;
                        try {
                            var parts = resp.msg.split(" - ", 2);
                            if (parts[1] === undefined) {
                                msg = resp.msg
                            } else {
                                var i = parseInt(parts[0], 10);
                                if (i.toString() === parts[0]) {
                                    index = parts[0];
                                    msg = parts[1]
                                } else {
                                    index = -1;
                                    msg = resp.msg
                                }
                            }
                        } catch (e) {
                            index = -1;
                            msg = resp.msg
                        }
                    }
                    if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
                        msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
                    }
                    label.html(msg);
                    label.show(2e3);
                    if (settings.callback) {
                        settings.callback(resp)
                    }
                }
                var data = {};
                var dataArray = form.serializeArray();
                $.each(dataArray, function(index, item) {
                    data[item.name] = item.value
                });
                $.ajax({
                    url: url,
                    data: data,
                    success: successCallback,
                    dataType: "jsonp",
                    error: function(resp, text) {
                        console.log("mailchimp ajax submit error: " + text)
                    }
                });
                var submitMsg = "Submitting...";
                if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
                    submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
                }
                label.html(submitMsg).show(2e3);
                return false
            })
        });
        return this
    }
}
)(jQuery);

// bootstrap.min.js
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule)
            return t;
        var e = Object.create(null);
        return t && Object.keys(t).forEach((function(s) {
            if ("default" !== s) {
                var i = Object.getOwnPropertyDescriptor(t, s);
                Object.defineProperty(e, s, i.get ? i : {
                    enumerable: !0,
                    get: function() {
                        return t[s]
                    }
                })
            }
        }
        )),
        e.default = t,
        Object.freeze(e)
    }
    var s = e(t);
    const i = {
        find: (t, e=document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e=document.documentElement) => Element.prototype.querySelector.call(e, t),
        children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
        parents(t, e) {
            const s = [];
            let i = t.parentNode;
            for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; )
                i.matches(e) && s.push(i),
                i = i.parentNode;
            return s
        },
        prev(t, e) {
            let s = t.previousElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let s = t.nextElementSibling;
            for (; s; ) {
                if (s.matches(e))
                    return [s];
                s = s.nextElementSibling
            }
            return []
        }
    }
      , n = t => {
        do {
            t += Math.floor(1e6 * Math.random())
        } while (document.getElementById(t));
        return t
    }
      , o = t => {
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let s = t.getAttribute("href");
            if (!s || !s.includes("#") && !s.startsWith("."))
                return null;
            s.includes("#") && !s.startsWith("#") && (s = "#" + s.split("#")[1]),
            e = s && "#" !== s ? s.trim() : null
        }
        return e
    }
      , r = t => {
        const e = o(t);
        return e && document.querySelector(e) ? e : null
    }
      , a = t => {
        const e = o(t);
        return e ? document.querySelector(e) : null
    }
      , l = t => {
        t.dispatchEvent(new Event("transitionend"))
    }
      , c = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , h = t => c(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null
      , d = (t, e, s) => {
        Object.keys(s).forEach(i => {
            const n = s[i]
              , o = e[i]
              , r = o && c(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(n).test(r))
                throw new TypeError(`${t.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)
        }
        )
    }
      , u = t => !(!c(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , g = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , p = t => {
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? p(t.parentNode) : null
    }
      , f = () => {}
      , m = t => t.offsetHeight
      , _ = () => {
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , b = []
      , v = () => "rtl" === document.documentElement.dir
      , y = t => {
        var e;
        e = () => {
            const e = _();
            if (e) {
                const s = t.NAME
                  , i = e.fn[s];
                e.fn[s] = t.jQueryInterface,
                e.fn[s].Constructor = t,
                e.fn[s].noConflict = () => (e.fn[s] = i,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", () => {
            b.forEach(t => t())
        }
        ),
        b.push(e)) : e()
    }
      , w = t => {
        "function" == typeof t && t()
    }
      , E = (t, e, s=!0) => {
        if (!s)
            return void w(t);
        const i = (t => {
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: s} = window.getComputedStyle(t);
            const i = Number.parseFloat(e)
              , n = Number.parseFloat(s);
            return i || n ? (e = e.split(",")[0],
            s = s.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0
        }
        )(e) + 5;
        let n = !1;
        const o = ({target: s}) => {
            s === e && (n = !0,
            e.removeEventListener("transitionend", o),
            w(t))
        }
        ;
        e.addEventListener("transitionend", o),
        setTimeout( () => {
            n || l(e)
        }
        , i)
    }
      , A = (t, e, s, i) => {
        let n = t.indexOf(e);
        if (-1 === n)
            return t[!s && i ? t.length - 1 : 0];
        const o = t.length;
        return n += s ? 1 : -1,
        i && (n = (n + o) % o),
        t[Math.max(0, Math.min(n, o - 1))]
    }
      , T = /[^.]*(?=\..*)\.|.*/
      , C = /\..*/
      , k = /::\d+$/
      , L = {};
    let O = 1;
    const D = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , I = /^(mouseenter|mouseleave)/i
      , N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function S(t, e) {
        return e && `${e}::${O++}` || t.uidEvent || O++
    }
    function x(t) {
        const e = S(t);
        return t.uidEvent = e,
        L[e] = L[e] || {},
        L[e]
    }
    function M(t, e, s=null) {
        const i = Object.keys(t);
        for (let n = 0, o = i.length; n < o; n++) {
            const o = t[i[n]];
            if (o.originalHandler === e && o.delegationSelector === s)
                return o
        }
        return null
    }
    function P(t, e, s) {
        const i = "string" == typeof e
          , n = i ? s : e;
        let o = R(t);
        return N.has(o) || (o = t),
        [i, n, o]
    }
    function j(t, e, s, i, n) {
        if ("string" != typeof e || !t)
            return;
        if (s || (s = i,
        i = null),
        I.test(e)) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            i ? i = t(i) : s = t(s)
        }
        const [o,r,a] = P(e, s, i)
          , l = x(t)
          , c = l[a] || (l[a] = {})
          , h = M(c, r, o ? s : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = S(r, e.replace(T, ""))
          , u = o ? function(t, e, s) {
            return function i(n) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = n; r && r !== this; r = r.parentNode)
                    for (let a = o.length; a--; )
                        if (o[a] === r)
                            return n.delegateTarget = r,
                            i.oneOff && B.off(t, n.type, e, s),
                            s.apply(r, [n]);
                return null
            }
        }(t, s, i) : function(t, e) {
            return function s(i) {
                return i.delegateTarget = t,
                s.oneOff && B.off(t, i.type, e),
                e.apply(t, [i])
            }
        }(t, s);
        u.delegationSelector = o ? s : null,
        u.originalHandler = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function H(t, e, s, i, n) {
        const o = M(e[s], i, n);
        o && (t.removeEventListener(s, o, Boolean(n)),
        delete e[s][o.uidEvent])
    }
    function R(t) {
        return t = t.replace(C, ""),
        D[t] || t
    }
    const B = {
        on(t, e, s, i) {
            j(t, e, s, i, !1)
        },
        one(t, e, s, i) {
            j(t, e, s, i, !0)
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = P(e, s, i)
              , a = r !== e
              , l = x(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void H(t, l, r, o, n ? s : null)
            }
            c && Object.keys(l).forEach(s => {
                !function(t, e, s, i) {
                    const n = e[s] || {};
                    Object.keys(n).forEach(o => {
                        if (o.includes(i)) {
                            const i = n[o];
                            H(t, e, s, i.originalHandler, i.delegationSelector)
                        }
                    }
                    )
                }(t, l, s, e.slice(1))
            }
            );
            const h = l[r] || {};
            Object.keys(h).forEach(s => {
                const i = s.replace(k, "");
                if (!a || e.includes(i)) {
                    const e = h[s];
                    H(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            )
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t)
                return null;
            const i = _()
              , n = R(e)
              , o = e !== n
              , r = N.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && i && (a = i.Event(e, s),
            i(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            h = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(n, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== s && Object.keys(s).forEach(t => {
                Object.defineProperty(d, t, {
                    get: () => s[t]
                })
            }
            ),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    }
      , $ = new Map;
    var W = {
        set(t, e, s) {
            $.has(t) || $.set(t, new Map);
            const i = $.get(t);
            i.has(e) || 0 === i.size ? i.set(e, s) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
        },
        get: (t, e) => $.has(t) && $.get(t).get(e) || null,
        remove(t, e) {
            if (!$.has(t))
                return;
            const s = $.get(t);
            s.delete(e),
            0 === s.size && $.delete(t)
        }
    };
    class q {
        constructor(t) {
            (t = h(t)) && (this._element = t,
            W.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            W.remove(this._element, this.constructor.DATA_KEY),
            B.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach(t => {
                this[t] = null
            }
            )
        }
        _queueCallback(t, e, s=!0) {
            E(t, e, s)
        }
        static getInstance(t) {
            return W.get(t, this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.0.2"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return "bs." + this.NAME
        }
        static get EVENT_KEY() {
            return "." + this.DATA_KEY
        }
    }
    class z extends q {
        static get NAME() {
            return "alert"
        }
        close(t) {
            const e = t ? this._getRootElement(t) : this._element
              , s = this._triggerCloseEvent(e);
            null === s || s.defaultPrevented || this._removeElement(e)
        }
        _getRootElement(t) {
            return a(t) || t.closest(".alert")
        }
        _triggerCloseEvent(t) {
            return B.trigger(t, "close.bs.alert")
        }
        _removeElement(t) {
            t.classList.remove("show");
            const e = t.classList.contains("fade");
            this._queueCallback( () => this._destroyElement(t), t, e)
        }
        _destroyElement(t) {
            t.remove(),
            B.trigger(t, "closed.bs.alert")
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = z.getOrCreateInstance(this);
                "close" === t && e[t](this)
            }
            ))
        }
        static handleDismiss(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
    }
    B.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', z.handleDismiss(new z)),
    y(z);
    class F extends q {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = F.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function K(t) {
        return t.replace(/[A-Z]/g, t => "-" + t.toLowerCase())
    }
    B.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', t => {
        t.preventDefault();
        const e = t.target.closest('[data-bs-toggle="button"]');
        F.getOrCreateInstance(e).toggle()
    }
    ),
    y(F);
    const V = {
        setDataAttribute(t, e, s) {
            t.setAttribute("data-bs-" + K(e), s)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute("data-bs-" + K(e))
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter(t => t.startsWith("bs")).forEach(s => {
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length),
                e[i] = U(t.dataset[s])
            }
            ),
            e
        },
        getDataAttribute: (t, e) => U(t.getAttribute("data-bs-" + K(e))),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + document.body.scrollTop,
                left: e.left + document.body.scrollLeft
            }
        },
        position: t => ({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , Q = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , X = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Y = "next"
      , G = "prev"
      , Z = "left"
      , J = "right"
      , tt = {
        ArrowLeft: J,
        ArrowRight: Z
    };
    class et extends q {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = i.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return Q
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(Y)
        }
        nextWhenVisible() {
            !document.hidden && u(this._element) && this.next()
        }
        prev() {
            this._slide(G)
        }
        pause(t) {
            t || (this._isPaused = !0),
            i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (l(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = i.findOne(".active.carousel-item", this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void B.one(this._element, "slid.bs.carousel", () => this.to(t));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const s = t > e ? Y : G;
            this._slide(s, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...Q,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            d("carousel", t, X),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? J : Z)
        }
        _addEventListeners() {
            this._config.keyboard && B.on(this._element, "keydown.bs.carousel", t => this._keydown(t)),
            "hover" === this._config.pause && (B.on(this._element, "mouseenter.bs.carousel", t => this.pause(t)),
            B.on(this._element, "mouseleave.bs.carousel", t => this.cycle(t))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t => {
                !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType ? this._pointerEvent || (this.touchStartX = t.touches[0].clientX) : this.touchStartX = t.clientX
            }
              , e = t => {
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , s = t => {
                !this._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (this.touchDeltaX = t.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(t => this.cycle(t), 500 + this._config.interval))
            }
            ;
            i.find(".carousel-item img", this._element).forEach(t => {
                B.on(t, "dragstart.bs.carousel", t => t.preventDefault())
            }
            ),
            this._pointerEvent ? (B.on(this._element, "pointerdown.bs.carousel", e => t(e)),
            B.on(this._element, "pointerup.bs.carousel", t => s(t)),
            this._element.classList.add("pointer-event")) : (B.on(this._element, "touchstart.bs.carousel", e => t(e)),
            B.on(this._element, "touchmove.bs.carousel", t => e(t)),
            B.on(this._element, "touchend.bs.carousel", t => s(t)))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = tt[t.key];
            e && (t.preventDefault(),
            this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const s = t === Y;
            return A(this._items, e, s, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const s = this._getItemIndex(t)
              , n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));
            return B.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: s
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = i.findOne(".active", this._indicatorsElement);
                e.classList.remove("active"),
                e.removeAttribute("aria-current");
                const s = i.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < s.length; e++)
                    if (Number.parseInt(s[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        s[e].classList.add("active"),
                        s[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || i.findOne(".active.carousel-item", this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const s = this._directionToOrder(t)
              , n = i.findOne(".active.carousel-item", this._element)
              , o = this._getItemIndex(n)
              , r = e || this._getItemByOrder(s, n)
              , a = this._getItemIndex(r)
              , l = Boolean(this._interval)
              , c = s === Y
              , h = c ? "carousel-item-start" : "carousel-item-end"
              , d = c ? "carousel-item-next" : "carousel-item-prev"
              , u = this._orderToDirection(s);
            if (r && r.classList.contains("active"))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(r, u).defaultPrevented)
                return;
            if (!n || !r)
                return;
            this._isSliding = !0,
            l && this.pause(),
            this._setActiveIndicatorElement(r),
            this._activeElement = r;
            const g = () => {
                B.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: r,
                    direction: u,
                    from: o,
                    to: a
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                r.classList.add(d),
                m(r),
                n.classList.add(h),
                r.classList.add(h);
                const t = () => {
                    r.classList.remove(h, d),
                    r.classList.add("active"),
                    n.classList.remove("active", d, h),
                    this._isSliding = !1,
                    setTimeout(g, 0)
                }
                ;
                this._queueCallback(t, n, !0)
            } else
                n.classList.remove("active"),
                r.classList.add("active"),
                this._isSliding = !1,
                g();
            l && this.cycle()
        }
        _directionToOrder(t) {
            return [J, Z].includes(t) ? v() ? t === Z ? G : Y : t === Z ? Y : G : t
        }
        _orderToDirection(t) {
            return [Y, G].includes(t) ? v() ? t === G ? Z : J : t === G ? J : Z : t
        }
        static carouselInterface(t, e) {
            const s = et.getOrCreateInstance(t, e);
            let {_config: i} = s;
            "object" == typeof e && (i = {
                ...i,
                ...e
            });
            const n = "string" == typeof e ? e : i.slide;
            if ("number" == typeof e)
                s.to(e);
            else if ("string" == typeof n) {
                if (void 0 === s[n])
                    throw new TypeError(`No method named "${n}"`);
                s[n]()
            } else
                i.interval && i.ride && (s.pause(),
                s.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                et.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = a(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const s = {
                ...V.getDataAttributes(e),
                ...V.getDataAttributes(this)
            }
              , i = this.getAttribute("data-bs-slide-to");
            i && (s.interval = !1),
            et.carouselInterface(e, s),
            i && et.getInstance(e).to(i),
            t.preventDefault()
        }
    }
    B.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", et.dataApiClickHandler),
    B.on(window, "load.bs.carousel.data-api", () => {
        const t = i.find('[data-bs-ride="carousel"]');
        for (let e = 0, s = t.length; e < s; e++)
            et.carouselInterface(t[e], et.getInstance(t[e]))
    }
    ),
    y(et);
    const st = {
        toggle: !0,
        parent: ""
    }
      , it = {
        toggle: "boolean",
        parent: "(string|element)"
    };
    class nt extends q {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = i.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);
            const s = i.find('[data-bs-toggle="collapse"]');
            for (let t = 0, e = s.length; t < e; t++) {
                const e = s[t]
                  , n = r(e)
                  , o = i.find(n).filter(t => t === this._element);
                null !== n && o.length && (this._selector = n,
                this._triggerArray.push(e))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return st
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._element.classList.contains("show") ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._element.classList.contains("show"))
                return;
            let t, e;
            this._parent && (t = i.find(".show, .collapsing", this._parent).filter(t => "string" == typeof this._config.parent ? t.getAttribute("data-bs-parent") === this._config.parent : t.classList.contains("collapse")),
            0 === t.length && (t = null));
            const s = i.findOne(this._selector);
            if (t) {
                const i = t.find(t => s !== t);
                if (e = i ? nt.getInstance(i) : null,
                e && e._isTransitioning)
                    return
            }
            if (B.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            t && t.forEach(t => {
                s !== t && nt.collapseInterface(t, "hide"),
                e || W.set(t, "bs.collapse", null)
            }
            );
            const n = this._getDimension();
            this._element.classList.remove("collapse"),
            this._element.classList.add("collapsing"),
            this._element.style[n] = 0,
            this._triggerArray.length && this._triggerArray.forEach(t => {
                t.classList.remove("collapsed"),
                t.setAttribute("aria-expanded", !0)
            }
            ),
            this.setTransitioning(!0);
            const o = "scroll" + (n[0].toUpperCase() + n.slice(1));
            this._queueCallback( () => {
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse", "show"),
                this._element.style[n] = "",
                this.setTransitioning(!1),
                B.trigger(this._element, "shown.bs.collapse")
            }
            , this._element, !0),
            this._element.style[n] = this._element[o] + "px"
        }
        hide() {
            if (this._isTransitioning || !this._element.classList.contains("show"))
                return;
            if (B.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = this._element.getBoundingClientRect()[t] + "px",
            m(this._element),
            this._element.classList.add("collapsing"),
            this._element.classList.remove("collapse", "show");
            const e = this._triggerArray.length;
            if (e > 0)
                for (let t = 0; t < e; t++) {
                    const e = this._triggerArray[t]
                      , s = a(e);
                    s && !s.classList.contains("show") && (e.classList.add("collapsed"),
                    e.setAttribute("aria-expanded", !1))
                }
            this.setTransitioning(!0),
            this._element.style[t] = "",
            this._queueCallback( () => {
                this.setTransitioning(!1),
                this._element.classList.remove("collapsing"),
                this._element.classList.add("collapse"),
                B.trigger(this._element, "hidden.bs.collapse")
            }
            , this._element, !0)
        }
        setTransitioning(t) {
            this._isTransitioning = t
        }
        _getConfig(t) {
            return (t = {
                ...st,
                ...t
            }).toggle = Boolean(t.toggle),
            d("collapse", t, it),
            t
        }
        _getDimension() {
            return this._element.classList.contains("width") ? "width" : "height"
        }
        _getParent() {
            let {parent: t} = this._config;
            t = h(t);
            const e = `[data-bs-toggle="collapse"][data-bs-parent="${t}"]`;
            return i.find(e, t).forEach(t => {
                const e = a(t);
                this._addAriaAndCollapsedClass(e, [t])
            }
            ),
            t
        }
        _addAriaAndCollapsedClass(t, e) {
            if (!t || !e.length)
                return;
            const s = t.classList.contains("show");
            e.forEach(t => {
                s ? t.classList.remove("collapsed") : t.classList.add("collapsed"),
                t.setAttribute("aria-expanded", s)
            }
            )
        }
        static collapseInterface(t, e) {
            let s = nt.getInstance(t);
            const i = {
                ...st,
                ...V.getDataAttributes(t),
                ..."object" == typeof e && e ? e : {}
            };
            if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1),
            s || (s = new nt(t,i)),
            "string" == typeof e) {
                if (void 0 === s[e])
                    throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                nt.collapseInterface(this, t)
            }
            ))
        }
    }
    B.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = V.getDataAttributes(this)
          , s = r(this);
        i.find(s).forEach(t => {
            const s = nt.getInstance(t);
            let i;
            s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent,
            s._parent = s._getParent()),
            i = "toggle") : i = e,
            nt.collapseInterface(t, i)
        }
        )
    }
    )),
    y(nt);
    const ot = new RegExp("ArrowUp|ArrowDown|Escape")
      , rt = v() ? "top-end" : "top-start"
      , at = v() ? "top-start" : "top-end"
      , lt = v() ? "bottom-end" : "bottom-start"
      , ct = v() ? "bottom-start" : "bottom-end"
      , ht = v() ? "left-start" : "right-start"
      , dt = v() ? "right-start" : "left-start"
      , ut = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , gt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class pt extends q {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        static get Default() {
            return ut
        }
        static get DefaultType() {
            return gt
        }
        static get NAME() {
            return "dropdown"
        }
        toggle() {
            g(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show())
        }
        show() {
            if (g(this._element) || this._menu.classList.contains("show"))
                return;
            const t = pt.getParentFromElement(this._element)
              , e = {
                relatedTarget: this._element
            };
            if (!B.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._inNavbar)
                    V.setDataAttribute(this._menu, "popper", "none");
                else {
                    if (void 0 === s)
                        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                    let e = this._element;
                    "parent" === this._config.reference ? e = t : c(this._config.reference) ? e = h(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
                    const i = this._getPopperConfig()
                      , n = i.modifiers.find(t => "applyStyles" === t.name && !1 === t.enabled);
                    this._popper = s.createPopper(e, this._menu, i),
                    n && V.setDataAttribute(this._menu, "popper", "static")
                }
                "ontouchstart"in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t => B.on(t, "mouseover", f)),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                B.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (g(this._element) || !this._menu.classList.contains("show"))
                return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _addEventListeners() {
            B.on(this._element, "click.bs.dropdown", t => {
                t.preventDefault(),
                this.toggle()
            }
            )
        }
        _completeHide(t) {
            B.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove("show"),
            this._element.classList.remove("show"),
            this._element.setAttribute("aria-expanded", "false"),
            V.removeDataAttribute(this._menu, "popper"),
            B.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...V.getDataAttributes(this._element),
                ...t
            },
            d("dropdown", t, this.constructor.DefaultType),
            "object" == typeof t.reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
            return t
        }
        _getMenuElement() {
            return i.next(this._element, ".dropdown-menu")[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return ht;
            if (t.classList.contains("dropstart"))
                return dt;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? at : rt : e ? ct : lt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: e}) {
            const s = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(u);
            s.length && A(s, e, "ArrowDown" === t, !s.includes(e)).focus()
        }
        static dropdownInterface(t, e) {
            const s = pt.getOrCreateInstance(t, e);
            if ("string" == typeof e) {
                if (void 0 === s[e])
                    throw new TypeError(`No method named "${e}"`);
                s[e]()
            }
        }
        static jQueryInterface(t) {
            return this.each((function() {
                pt.dropdownInterface(this, t)
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = i.find('[data-bs-toggle="dropdown"]');
            for (let s = 0, i = e.length; s < i; s++) {
                const i = pt.getInstance(e[s]);
                if (!i || !1 === i._config.autoClose)
                    continue;
                if (!i._element.classList.contains("show"))
                    continue;
                const n = {
                    relatedTarget: i._element
                };
                if (t) {
                    const e = t.composedPath()
                      , s = e.includes(i._menu);
                    if (e.includes(i._element) || "inside" === i._config.autoClose && !s || "outside" === i._config.autoClose && s)
                        continue;
                    if (i._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (n.clickEvent = t)
                }
                i._completeHide(n)
            }
        }
        static getParentFromElement(t) {
            return a(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !ot.test(t.key))
                return;
            const e = this.classList.contains("show");
            if (!e && "Escape" === t.key)
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            g(this))
                return;
            const s = () => this.matches('[data-bs-toggle="dropdown"]') ? this : i.prev(this, '[data-bs-toggle="dropdown"]')[0];
            return "Escape" === t.key ? (s().focus(),
            void pt.clearMenus()) : "ArrowUp" === t.key || "ArrowDown" === t.key ? (e || s().click(),
            void pt.getInstance(s())._selectMenuItem(t)) : void (e && "Space" !== t.key || pt.clearMenus())
        }
    }
    B.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', pt.dataApiKeydownHandler),
    B.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", pt.dataApiKeydownHandler),
    B.on(document, "click.bs.dropdown.data-api", pt.clearMenus),
    B.on(document, "keyup.bs.dropdown.data-api", pt.clearMenus),
    B.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', (function(t) {
        t.preventDefault(),
        pt.dropdownInterface(this)
    }
    )),
    y(pt);
    class ft {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", e => e + t),
            this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", e => e + t),
            this._setElementAttributes(".sticky-top", "marginRight", e => e - t)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + i)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t)[e];
                t.style[e] = s(Number.parseFloat(n)) + "px"
            }
            )
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"),
            this._resetElementAttributes(".sticky-top", "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const s = t.style[e];
            s && V.setDataAttribute(t, e, s)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, t => {
                const s = V.getDataAttribute(t, e);
                void 0 === s ? t.style.removeProperty(e) : (V.removeDataAttribute(t, e),
                t.style[e] = s)
            }
            )
        }
        _applyManipulationCallback(t, e) {
            c(t) ? e(t) : i.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const mt = {
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , _t = {
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    };
    class bt {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && m(this._getElement()),
            this._getElement().classList.add("show"),
            this._emulateAnimation( () => {
                w(t)
            }
            )) : w(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove("show"),
            this._emulateAnimation( () => {
                this.dispose(),
                w(t)
            }
            )) : w(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = "modal-backdrop",
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...mt,
                ..."object" == typeof t ? t : {}
            }).rootElement = h(t.rootElement),
            d("backdrop", t, _t),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.appendChild(this._getElement()),
            B.on(this._getElement(), "mousedown.bs.backdrop", () => {
                w(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (B.off(this._element, "mousedown.bs.backdrop"),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            E(t, this._getElement(), this._config.isAnimated)
        }
    }
    const vt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , yt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    };
    class wt extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = i.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new ft
        }
        static get Default() {
            return vt
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || B.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add("modal-open"),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            B.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', t => this.hide(t)),
            B.on(this._dialog, "mousedown.dismiss.bs.modal", () => {
                B.one(this._element, "mouseup.dismiss.bs.modal", t => {
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                )
            }
            ),
            this._showBackdrop( () => this._showElement(t)))
        }
        hide(t) {
            if (t && ["A", "AREA"].includes(t.target.tagName) && t.preventDefault(),
            !this._isShown || this._isTransitioning)
                return;
            if (B.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            B.off(document, "focusin.bs.modal"),
            this._element.classList.remove("show"),
            B.off(this._element, "click.dismiss.bs.modal"),
            B.off(this._dialog, "mousedown.dismiss.bs.modal"),
            this._queueCallback( () => this._hideModal(), this._element, e)
        }
        dispose() {
            [window, this._dialog].forEach(t => B.off(t, ".bs.modal")),
            this._backdrop.dispose(),
            super.dispose(),
            B.off(document, "focusin.bs.modal")
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new bt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _getConfig(t) {
            return t = {
                ...vt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            d("modal", t, yt),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , s = i.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            s && (s.scrollTop = 0),
            e && m(this._element),
            this._element.classList.add("show"),
            this._config.focus && this._enforceFocus(),
            this._queueCallback( () => {
                this._config.focus && this._element.focus(),
                this._isTransitioning = !1,
                B.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            , this._dialog, e)
        }
        _enforceFocus() {
            B.off(document, "focusin.bs.modal"),
            B.on(document, "focusin.bs.modal", t => {
                document === t.target || this._element === t.target || this._element.contains(t.target) || this._element.focus()
            }
            )
        }
        _setEscapeEvent() {
            this._isShown ? B.on(this._element, "keydown.dismiss.bs.modal", t => {
                this._config.keyboard && "Escape" === t.key ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || "Escape" !== t.key || this._triggerBackdropTransition()
            }
            ) : B.off(this._element, "keydown.dismiss.bs.modal")
        }
        _setResizeEvent() {
            this._isShown ? B.on(window, "resize.bs.modal", () => this._adjustDialog()) : B.off(window, "resize.bs.modal")
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide( () => {
                document.body.classList.remove("modal-open"),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                B.trigger(this._element, "hidden.bs.modal")
            }
            )
        }
        _showBackdrop(t) {
            B.on(this._element, "click.dismiss.bs.modal", t => {
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            ),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (B.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const {classList: t, scrollHeight: e, style: s} = this._element
              , i = e > document.documentElement.clientHeight;
            !i && "hidden" === s.overflowY || t.contains("modal-static") || (i || (s.overflowY = "hidden"),
            t.add("modal-static"),
            this._queueCallback( () => {
                t.remove("modal-static"),
                i || this._queueCallback( () => {
                    s.overflowY = ""
                }
                , this._dialog)
            }
            , this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , s = e > 0;
            (!s && t && !v() || s && !t && v()) && (this._element.style.paddingLeft = e + "px"),
            (s && !t && !v() || !s && t && v()) && (this._element.style.paddingRight = e + "px")
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const s = wt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e)
                }
            }
            ))
        }
    }
    B.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = a(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        B.one(e, "show.bs.modal", t => {
            t.defaultPrevented || B.one(e, "hidden.bs.modal", () => {
                u(this) && this.focus()
            }
            )
        }
        ),
        wt.getOrCreateInstance(e).toggle(this)
    }
    )),
    y(wt);
    const Et = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , At = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class Tt extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._addEventListeners()
        }
        static get NAME() {
            return "offcanvas"
        }
        static get Default() {
            return Et
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || B.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || ((new ft).hide(),
            this._enforceFocusOnElement(this._element)),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add("show"),
            this._queueCallback( () => {
                B.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && (B.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (B.off(document, "focusin.bs.offcanvas"),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove("show"),
            this._backdrop.hide(),
            this._queueCallback( () => {
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new ft).reset(),
                B.trigger(this._element, "hidden.bs.offcanvas")
            }
            , this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            super.dispose(),
            B.off(document, "focusin.bs.offcanvas")
        }
        _getConfig(t) {
            return t = {
                ...Et,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            d("offcanvas", t, At),
            t
        }
        _initializeBackDrop() {
            return new bt({
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide()
            })
        }
        _enforceFocusOnElement(t) {
            B.off(document, "focusin.bs.offcanvas"),
            B.on(document, "focusin.bs.offcanvas", e => {
                document === e.target || t === e.target || t.contains(e.target) || t.focus()
            }
            ),
            t.focus()
        }
        _addEventListeners() {
            B.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', () => this.hide()),
            B.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            )
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Tt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    B.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = a(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        g(this))
            return;
        B.one(e, "hidden.bs.offcanvas", () => {
            u(this) && this.focus()
        }
        );
        const s = i.findOne(".offcanvas.show");
        s && s !== e && Tt.getInstance(s).hide(),
        Tt.getOrCreateInstance(e).toggle(this)
    }
    )),
    B.on(window, "load.bs.offcanvas.data-api", () => i.find(".offcanvas.show").forEach(t => Tt.getOrCreateInstance(t).show())),
    y(Tt);
    const Ct = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , kt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i
      , Lt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Ot = (t, e) => {
        const s = t.nodeName.toLowerCase();
        if (e.includes(s))
            return !Ct.has(s) || Boolean(kt.test(t.nodeValue) || Lt.test(t.nodeValue));
        const i = e.filter(t => t instanceof RegExp);
        for (let t = 0, e = i.length; t < e; t++)
            if (i[t].test(s))
                return !0;
        return !1
    }
    ;
    function Dt(t, e, s) {
        if (!t.length)
            return t;
        if (s && "function" == typeof s)
            return s(t);
        const i = (new window.DOMParser).parseFromString(t, "text/html")
          , n = Object.keys(e)
          , o = [].concat(...i.body.querySelectorAll("*"));
        for (let t = 0, s = o.length; t < s; t++) {
            const s = o[t]
              , i = s.nodeName.toLowerCase();
            if (!n.includes(i)) {
                s.remove();
                continue
            }
            const r = [].concat(...s.attributes)
              , a = [].concat(e["*"] || [], e[i] || []);
            r.forEach(t => {
                Ot(t, a) || s.removeAttribute(t.nodeName)
            }
            )
        }
        return i.body.innerHTML
    }
    const It = new RegExp("(^|\\s)bs-tooltip\\S+","g")
      , Nt = new Set(["sanitize", "allowList", "sanitizeFn"])
      , St = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , xt = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: v() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: v() ? "right" : "left"
    }
      , Mt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , Pt = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    };
    class jt extends q {
        constructor(t, e) {
            if (void 0 === s)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Mt
        }
        static get NAME() {
            return "tooltip"
        }
        static get Event() {
            return Pt
        }
        static get DefaultType() {
            return St
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains("show"))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            B.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = B.trigger(this._element, this.constructor.Event.SHOW)
              , e = p(this._element)
              , i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !i)
                return;
            const o = this.getTipElement()
              , r = n(this.constructor.NAME);
            o.setAttribute("id", r),
            this._element.setAttribute("aria-describedby", r),
            this.setContent(),
            this._config.animation && o.classList.add("fade");
            const a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement
              , l = this._getAttachment(a);
            this._addAttachmentClass(l);
            const {container: c} = this._config;
            W.set(o, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o),
            B.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)),
            o.classList.add("show");
            const h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
            h && o.classList.add(...h.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => {
                B.on(t, "mouseover", f)
            }
            );
            const d = this.tip.classList.contains("fade");
            this._queueCallback( () => {
                const t = this._hoverState;
                this._hoverState = null,
                B.trigger(this._element, this.constructor.Event.SHOWN),
                "out" === t && this._leave(null, this)
            }
            , this.tip, d)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if (B.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove("show"),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t => B.off(t, "mouseover", f)),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains("fade");
            this._queueCallback( () => {
                this._isWithActiveTrigger() || ("show" !== this._hoverState && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                B.trigger(this._element, this.constructor.Event.HIDDEN),
                this._popper && (this._popper.destroy(),
                this._popper = null))
            }
            , this.tip, e),
            this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            const t = document.createElement("div");
            return t.innerHTML = this._config.template,
            this.tip = t.children[0],
            this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()),
            t.classList.remove("fade", "show")
        }
        setElementContent(t, e) {
            if (null !== t)
                return c(e) ? (e = h(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = Dt(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title");
            return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title),
            t
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            const s = this.constructor.DATA_KEY;
            return (e = e || W.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget,this._getDelegateConfig()),
            W.set(t.delegateTarget, s, e)),
            e
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t => this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t => {
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t))
        }
        _getAttachment(t) {
            return xt[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t => {
                if ("click" === t)
                    B.on(this._element, this.constructor.Event.CLICK, this._config.selector, t => this.toggle(t));
                else if ("manual" !== t) {
                    const e = "hover" === t ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , s = "hover" === t ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    B.on(this._element, e, this._config.selector, t => this._enter(t)),
                    B.on(this._element, s, this._config.selector, t => this._leave(t))
                }
            }
            ),
            this._hideModalHandler = () => {
                this._element && this.hide()
            }
            ,
            B.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
            e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout),
            e._hoverState = "show",
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout( () => {
                "show" === e._hoverState && e.show()
            }
            , e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = "out",
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout( () => {
                "out" === e._hoverState && e.hide()
            }
            , e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = V.getDataAttributes(this._element);
            return Object.keys(e).forEach(t => {
                Nt.has(t) && delete e[t]
            }
            ),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : h(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            d("tooltip", t, this.constructor.DefaultType),
            t.sanitize && (t.template = Dt(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            if (this._config)
                for (const e in this._config)
                    this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(It);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = jt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    y(jt);
    const Ht = new RegExp("(^|\\s)bs-popover\\S+","g")
      , Rt = {
        ...jt.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , Bt = {
        ...jt.DefaultType,
        content: "(string|element|function)"
    }
      , $t = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class Wt extends jt {
        static get Default() {
            return Rt
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return $t
        }
        static get DefaultType() {
            return Bt
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        getTipElement() {
            return this.tip || (this.tip = super.getTipElement(),
            this.getTitle() || i.findOne(".popover-header", this.tip).remove(),
            this._getContent() || i.findOne(".popover-body", this.tip).remove()),
            this.tip
        }
        setContent() {
            const t = this.getTipElement();
            this.setElementContent(i.findOne(".popover-header", t), this.getTitle());
            let e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
            this.setElementContent(i.findOne(".popover-body", t), e),
            t.classList.remove("fade", "show")
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t))
        }
        _getContent() {
            return this._element.getAttribute("data-bs-content") || this._config.content
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = t.getAttribute("class").match(Ht);
            null !== e && e.length > 0 && e.map(t => t.trim()).forEach(e => t.classList.remove(e))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Wt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    y(Wt);
    const qt = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , zt = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    };
    class Ft extends q {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._selector = `${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            B.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return qt
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : "position"
              , e = "auto" === this._config.method ? t : this._config.method
              , s = "position" === e ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            i.find(this._selector).map(t => {
                const n = r(t)
                  , o = n ? i.findOne(n) : null;
                if (o) {
                    const t = o.getBoundingClientRect();
                    if (t.width || t.height)
                        return [V[e](o).top + s, n]
                }
                return null
            }
            ).filter(t => t).sort( (t, e) => t[0] - e[0]).forEach(t => {
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            )
        }
        dispose() {
            B.off(this._scrollElement, ".bs.scrollspy"),
            super.dispose()
        }
        _getConfig(t) {
            if ("string" != typeof (t = {
                ...qt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target && c(t.target)) {
                let {id: e} = t.target;
                e || (e = n("scrollspy"),
                t.target.id = e),
                t.target = "#" + e
            }
            return d("scrollspy", t, zt),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , s = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= s) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = this._selector.split(",").map(e => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`)
              , s = i.findOne(e.join(","));
            s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"),
            s.classList.add("active")) : (s.classList.add("active"),
            i.parents(s, ".nav, .list-group").forEach(t => {
                i.prev(t, ".nav-link, .list-group-item").forEach(t => t.classList.add("active")),
                i.prev(t, ".nav-item").forEach(t => {
                    i.children(t, ".nav-link").forEach(t => t.classList.add("active"))
                }
                )
            }
            )),
            B.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            i.find(this._selector).filter(t => t.classList.contains("active")).forEach(t => t.classList.remove("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ft.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    B.on(window, "load.bs.scrollspy.data-api", () => {
        i.find('[data-bs-spy="scroll"]').forEach(t => new Ft(t))
    }
    ),
    y(Ft);
    class Ut extends q {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active"))
                return;
            let t;
            const e = a(this._element)
              , s = this._element.closest(".nav, .list-group");
            if (s) {
                const e = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";
                t = i.find(e, s),
                t = t[t.length - 1]
            }
            const n = t ? B.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (B.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== n && n.defaultPrevented)
                return;
            this._activate(this._element, s);
            const o = () => {
                B.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                B.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, o) : o()
        }
        _activate(t, e, s) {
            const n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0]
              , o = s && n && n.classList.contains("fade")
              , r = () => this._transitionComplete(t, n, s);
            n && o ? (n.classList.remove("show"),
            this._queueCallback(r, t, !0)) : r()
        }
        _transitionComplete(t, e, s) {
            if (e) {
                e.classList.remove("active");
                const t = i.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove("active"),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add("active"),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            m(t),
            t.classList.contains("fade") && t.classList.add("show");
            let n = t.parentNode;
            if (n && "LI" === n.nodeName && (n = n.parentNode),
            n && n.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && i.find(".dropdown-toggle", e).forEach(t => t.classList.add("active")),
                t.setAttribute("aria-expanded", !0)
            }
            s && s()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ut.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    B.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        g(this) || Ut.getOrCreateInstance(this).show()
    }
    )),
    y(Ut);
    const Kt = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , Vt = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Qt extends q {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return Kt
        }
        static get Default() {
            return Vt
        }
        static get NAME() {
            return "toast"
        }
        show() {
            B.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove("hide"),
            m(this._element),
            this._element.classList.add("showing"),
            this._queueCallback( () => {
                this._element.classList.remove("showing"),
                this._element.classList.add("show"),
                B.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains("show") && (B.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"),
            this._queueCallback( () => {
                this._element.classList.add("hide"),
                B.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains("show") && this._element.classList.remove("show"),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...Vt,
                ...V.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            d("toast", t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout( () => {
                this.hide()
            }
            , this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s || this._element.contains(s) || this._maybeScheduleHide()
        }
        _setListeners() {
            B.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', () => this.hide()),
            B.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, !0)),
            B.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, !1)),
            B.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, !0)),
            B.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Qt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return y(Qt),
    {
        Alert: z,
        Button: F,
        Carousel: et,
        Collapse: nt,
        Dropdown: pt,
        Modal: wt,
        Offcanvas: Tt,
        Popover: Wt,
        ScrollSpy: Ft,
        Tab: Ut,
        Toast: Qt,
        Tooltip: jt
    }
}
));

// popper.min.js
/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = e.ownerDocument.defaultView
          , n = o.getComputedStyle(e, null);
        return t ? n[t] : n
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function i(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent || null; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return ee(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? parseInt(o['offset' + e]) + parseInt(n['margin' + ('Height' === e ? 'Top' : 'Left')]) + parseInt(n['margin' + ('Height' === e ? 'Bottom' : 'Right')]) : 0)
    }
    function c(e) {
        var t = e.body
          , o = e.documentElement
          , n = r(10) && getComputedStyle(o);
        return {
            height: h('Height', t, o, n),
            width: h('Width', t, o, n)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c(e.ownerDocument) : {}
          , d = s.width || e.clientWidth || p.width
          , a = s.height || e.clientHeight || p.height
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth, 10)
          , c = parseFloat(m.borderLeftWidth, 10);
        i && s && (a.top = ee(a.top, 0),
        a.left = ee(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var w = parseFloat(m.marginTop, 10)
              , y = parseFloat(m.marginLeft, 10);
            b.top -= h - w,
            b.bottom -= h - w,
            b.left -= c - y,
            b.right -= c - y,
            b.marginTop = w,
            b.marginLeft = y
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function w(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = ee(o.clientWidth, window.innerWidth || 0)
          , r = ee(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function y(e) {
        var n = e.nodeName;
        if ('BODY' === n || 'HTML' === n)
            return !1;
        if ('fixed' === t(e, 'position'))
            return !0;
        var i = o(e);
        return !!i && y(i)
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, r, p) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , d = {
            top: 0,
            left: 0
        }
          , l = s ? E(e) : a(e, i(t));
        if ('viewport' === p)
            d = w(l, s);
        else {
            var f;
            'scrollParent' === p ? (f = n(o(t)),
            'BODY' === f.nodeName && (f = e.ownerDocument.documentElement)) : 'window' === p ? f = e.ownerDocument.documentElement : f = p;
            var m = b(f, l, s);
            if ('HTML' === f.nodeName && !y(l)) {
                var h = c(e.ownerDocument)
                  , g = h.height
                  , u = h.width;
                d.top += m.top - m.marginTop,
                d.bottom = g + m.top,
                d.left += m.left - m.marginLeft,
                d.right = u + m.left
            } else
                d = m
        }
        r = r || 0;
        var v = 'number' == typeof r;
        return d.left += v ? r : r.left || 0,
        d.top += v ? r : r.top || 0,
        d.right -= v ? r : r.right || 0,
        d.bottom -= v ? r : r.bottom || 0,
        d
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , r = n ? E(t) : a(t, i(o));
        return b(o, r, n)
    }
    function S(e) {
        var t = e.ownerDocument.defaultView
          , o = t.getComputedStyle(e)
          , n = parseFloat(o.marginTop || 0) + parseFloat(o.marginBottom || 0)
          , i = parseFloat(o.marginLeft || 0) + parseFloat(o.marginRight || 0)
          , r = {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        };
        return r
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function F(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function I() {
        this.state.eventsEnabled || (this.state = F(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function V(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t) {
        var o = e.offsets
          , n = o.popper
          , i = o.reference
          , r = $
          , p = function(e) {
            return e
        }
          , s = r(i.width)
          , d = r(n.width)
          , a = -1 !== ['left', 'right'].indexOf(e.placement)
          , l = -1 !== e.placement.indexOf('-')
          , f = t ? a || l || s % 2 == d % 2 ? r : Z : p
          , m = t ? r : p;
        return {
            left: f(1 == s % 2 && 1 == d % 2 && !l && t ? n.left - 1 : n.left),
            top: m(n.top),
            bottom: m(n.bottom),
            right: f(n.right)
        }
    }
    function K(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function z(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function G(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = he.indexOf(e)
          , n = he.slice(o + 1).concat(he.slice(0, o));
        return t ? n.reverse() : n
    }
    function _(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? ee(document.documentElement.clientHeight, window.innerHeight || 0) : ee(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function X(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return _(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function J(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : X(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    var Q = Math.min
      , Z = Math.floor
      , $ = Math.round
      , ee = Math.max
      , te = 'undefined' != typeof window && 'undefined' != typeof document && 'undefined' != typeof navigator
      , oe = function() {
        for (var e = ['Edge', 'Trident', 'Firefox'], t = 0; t < e.length; t += 1)
            if (te && 0 <= navigator.userAgent.indexOf(e[t]))
                return 1;
        return 0
    }()
      , ne = te && window.Promise
      , ie = ne ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = te && !!(window.MSInputMethodContext && document.documentMode)
      , pe = te && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = te && /Firefox/i.test(navigator.userAgent)
      , me = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , he = me.slice(3)
      , ce = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ge = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return I.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ge.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ge.placements = me,
    ge.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: J,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = ee(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = Q(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!K(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , w = t(e.instance.popper)
                      , y = parseFloat(w['margin' + f], 10)
                      , E = parseFloat(w['border' + f + 'Width'], 10)
                      , v = b - e.offsets.popper[m] - y - E;
                    return v = ee(Q(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, $(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case ce.FLIP:
                        p = [n, i];
                        break;
                    case ce.CLOCKWISE:
                        p = G(n);
                        break;
                    case ce.COUNTERCLOCKWISE:
                        p = G(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , w = -1 !== ['top', 'bottom'].indexOf(n)
                          , y = !!t.flipVariations && (w && 'start' === r && h || w && 'end' === r && c || !w && 'start' === r && g || !w && 'end' === r && u)
                          , E = !!t.flipVariationsByContent && (w && 'start' === r && c || w && 'end' === r && h || !w && 'start' === r && u || !w && 'end' === r && g)
                          , v = y || E;
                        (m || b || v) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        v && (r = z(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport',
                flipVariations: !1,
                flipVariationsByContent: !1
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!K(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = q(e, 2 > window.devicePixelRatio || !fe), c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? 'HTML' === l.nodeName ? -l.clientHeight + h.bottom : -f.height + h.bottom : h.top,
                    s = 'right' == g ? 'HTML' === l.nodeName ? -l.clientWidth + h.right : -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var w = 'bottom' == c ? -1 : 1
                          , y = 'right' == g ? -1 : 1;
                        m[c] = d * w,
                        m[g] = s * y,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return V(e.instance.popper, e.styles),
                    j(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    V(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ge
});

// swiper.min.js
/**
 * Swiper 7.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2021
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s={}, a={}) {
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
        e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
        e
    }
    class n extends Array {
        constructor(e) {
            super(...e || []),
            function(e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                    get: () => t,
                    set(e) {
                        t.__proto__ = e
                    }
                })
            }(this)
        }
    }
    function l(e=[]) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        }
        )),
        t
    }
    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }
    function d(e, t) {
        const s = r()
          , i = a();
        let l = [];
        if (!t && e instanceof n)
            return e;
        if (!e)
            return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"),
                0 === s.indexOf("<tr") && (e = "tbody"),
                0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"),
                0 === s.indexOf("<tbody") && (e = "table"),
                0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1)
                    l.push(t.childNodes[e])
            } else
                l = function(e, t) {
                    if ("string" != typeof e)
                        return [e];
                    const s = []
                      , a = t.querySelectorAll(e);
                    for (let e = 0; e < a.length; e += 1)
                        s.push(a[e]);
                    return s
                }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i)
            l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n)
                return e;
            l = e
        }
        return new n(function(e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
                -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            }
            )),
            this
        },
        removeClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            }
            )),
            this
        },
        hasClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            return o(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function(...e) {
            const t = l(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }
                ))
            }
            ))
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e)
                return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length)
                    this[s].setAttribute(e, t);
                else
                    for (const t in e)
                        this[s][t] = e[t],
                        this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (let t = 0; t < this.length; t += 1)
                this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function(...e) {
            let[t,s,a,i] = e;
            function r(e) {
                const t = e.target;
                if (!t)
                    return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e),
                d(t).is(s))
                    a.apply(t, i);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1)
                        d(e[t]).is(s) && a.apply(e[t], i)
                }
            }
            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e),
                a.apply(this, t)
            }
            "function" == typeof e[1] && ([t,a,i] = e,
            s = void 0),
            i || (i = !1);
            const l = t.split(" ");
            let o;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                        t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                        t.dom7LiveListeners[e].push({
                            listener: a,
                            proxyListener: r
                        }),
                        t.addEventListener(e, r, i)
                    }
                else
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7Listeners || (t.dom7Listeners = {}),
                        t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                        t.dom7Listeners[e].push({
                            listener: a,
                            proxyListener: n
                        }),
                        t.addEventListener(e, n, i)
                    }
            }
            return this
        },
        off: function(...e) {
            let[t,s,a,i] = e;
            "function" == typeof e[1] && ([t,a,i] = e,
            s = void 0),
            i || (i = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let n;
                    if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]),
                    n && n.length)
                        for (let e = n.length - 1; e >= 0; e -= 1) {
                            const s = n[e];
                            a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i),
                            n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i),
                            n.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = r()
              , s = e[0].split(" ")
              , a = e[1];
            for (let i = 0; i < s.length; i += 1) {
                const r = s[i];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s];
                    if (t.CustomEvent) {
                        const s = new t.CustomEvent(r,{
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter(( (e, t) => t > 0)),
                        i.dispatchEvent(s),
                        i.dom7EventData = [],
                        delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a),
                t.off("transitionend", s))
            }
            )),
            this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (this.length > 0) {
                const e = r()
                  , t = a()
                  , s = this[0]
                  , i = s.getBoundingClientRect()
                  , n = t.body
                  , l = s.clientTop || n.clientTop || 0
                  , o = s.clientLeft || n.clientLeft || 0
                  , d = s === e ? e.scrollY : s.scrollTop
                  , c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function(e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e)
                            this[a].style[t] = e[t];
                    return this
                }
                if (this[0])
                    return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1)
                    this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            return e ? (this.forEach(( (t, s) => {
                e.apply(t, [t, s])
            }
            )),
            this) : this
        },
        html: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e)
                return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1)
                this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = r()
              , s = a()
              , i = this[0];
            let l, o;
            if (!i || void 0 === e)
                return !1;
            if ("string" == typeof e) {
                if (i.matches)
                    return i.matches(e);
                if (i.webkitMatchesSelector)
                    return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector)
                    return i.msMatchesSelector(e);
                for (l = d(e),
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            if (e === s)
                return i === s;
            if (e === t)
                return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e,
                o = 0; o < l.length; o += 1)
                    if (l[o] === i)
                        return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); )
                    1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e)
                return this;
            const t = this.length;
            if (e > t - 1)
                return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function(...e) {
            let t;
            const s = a();
            for (let a = 0; a < e.length; a += 1) {
                t = e[a];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const a = s.createElement("div");
                        for (a.innerHTML = t; a.firstChild; )
                            this[e].appendChild(a.firstChild)
                    } else if (t instanceof n)
                        for (let s = 0; s < t.length; s += 1)
                            this[e].appendChild(t[s]);
                    else
                        this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e,
                    i = a.childNodes.length - 1; i >= 0; i -= 1)
                        this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                    for (i = 0; i < e.length; i += 1)
                        this[s].insertBefore(e[i], this[s].childNodes[0]);
                else
                    this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.nextElementSibling; ) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s)
                return d([]);
            for (; s.previousElementSibling; ) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a),
                s = a
            }
            return d(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1)
                null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a; )
                    e ? d(a).is(e) && t.push(a) : t.push(a),
                    a = a.parentNode
            }
            return d(t)
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)),
            t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1)
                    t.push(a[e])
            }
            return d(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1)
                    e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function(e) {
            return d(o(this, e))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1)
                this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };
    function p(e, t=0) {
        return setTimeout(e, t)
    }
    function u() {
        return Date.now()
    }
    function h(e, t="x") {
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")),
        n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function f(...e) {
        const t = Object(e[0])
          , s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const r = e[i];
            if (null != r && (a = r,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s]
                      , i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m(t[a]) && m(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a]) : !m(t[a]) && m(r[a]) ? (t[a] = {},
                    r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a])) : t[a] = r[a])
                }
            }
        }
        var a;
        return t
    }
    function g(e, t, s) {
        e.style.setProperty(t, s)
    }
    function v({swiper: e, targetPosition: t, side: s}) {
        const a = r()
          , i = -e.translate;
        let n, l = null;
        const o = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none",
        a.cancelAnimationFrame(e.cssModeFrameID);
        const d = t > i ? "next" : "prev"
          , c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t
          , p = () => {
            n = (new Date).getTime(),
            null === l && (l = n);
            const r = Math.max(Math.min((n - l) / o, 1), 0)
              , d = .5 - Math.cos(r * Math.PI) / 2;
            let u = i + d * (t - i);
            if (c(u, t) && (u = t),
            e.wrapperEl.scrollTo({
                [s]: u
            }),
            c(u, t))
                return e.wrapperEl.style.overflow = "hidden",
                e.wrapperEl.style.scrollSnapType = "",
                setTimeout(( () => {
                    e.wrapperEl.style.overflow = "",
                    e.wrapperEl.scrollTo({
                        [s]: u
                    })
                }
                )),
                void a.cancelAnimationFrame(e.cssModeFrameID);
            e.cssModeFrameID = a.requestAnimationFrame(p)
        }
        ;
        p()
    }
    let w, b, x;
    function y() {
        return w || (w = function() {
            const e = r()
              , t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart"in e
            }
        }()),
        w
    }
    function E(e={}) {
        return b || (b = function({userAgent: e}={}) {
            const t = y()
              , s = r()
              , a = s.navigator.platform
              , i = e || s.navigator.userAgent
              , n = {
                ios: !1,
                android: !1
            }
              , l = s.screen.width
              , o = s.screen.height
              , d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const p = i.match(/(iPod)(.*OS\s([\d_]+))?/)
              , u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , h = "Win32" === a;
            let m = "MacIntel" === a;
            return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/),
            c || (c = [0, 1, "13_0_0"]),
            m = !1),
            d && !h && (n.os = "android",
            n.android = !0),
            (c || u || p) && (n.os = "ios",
            n.ios = !0),
            n
        }(e)),
        b
    }
    function T() {
        return x || (x = function() {
            const e = r();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()),
        x
    }
    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }
    ));
    var C = {
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if ("function" != typeof t)
                return a;
            function i(...s) {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy,
                t.apply(a, s)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(( (a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners)
                return t;
            let s, a, i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0],
            a = e.slice(1, e.length),
            i = t) : (s = e[0].events,
            a = e[0].data,
            i = e[0].context || t),
            a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(i, [e, ...a])
                }
                )),
                t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(i, a)
                }
                ))
            }
            )),
            t
        }
    };
    function $({swiper: e, runCallbacks: t, direction: s, step: a}) {
        const {activeIndex: i, previousIndex: r} = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"),
        e.emit(`transition${a}`),
        t && i !== r) {
            if ("reset" === n)
                return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`),
            "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
        }
    }
    function S(e) {
        const t = this
          , s = a()
          , i = r()
          , n = t.touchEventsData
          , {params: l, touches: o, enabled: c} = t;
        if (!c)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
            return;
        if (n.isTouchEvent = "touchstart" === p.type,
        !n.isTouchEvent && "which"in p && 3 === p.which)
            return;
        if (!n.isTouchEvent && "button"in p && p.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t=this) {
            return function t(s) {
                return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot),
                s.closest(e) || t(s.getRootNode().host)) : null
            }(t)
        }(m, p.target) : h.closest(m)[0]))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0])
            return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX,
        o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX
          , v = o.currentY
          , w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
          , b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w)
                return;
            e.preventDefault()
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        o.startX = g,
        o.startY = v,
        n.touchStartTime = u(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1),
            s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.emit("touchStart", p)
    }
    function M(e) {
        const t = a()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: n, rtlTranslate: l, enabled: o} = s;
        if (!o)
            return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent),
        !i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type)
            return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0])
          , h = "touchmove" === c.type ? p.pageX : c.pageX
          , m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
            return n.startX = h,
            void (n.startY = m);
        if (!s.allowTouchMove)
            return s.allowClick = !1,
            void (i.isTouched && (Object.assign(n, {
                startX: h,
                startY: m,
                currentX: h,
                currentY: m
            }),
            i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate())
                return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c),
        c.targetTouches && c.targetTouches.length > 1)
            return;
        n.currentX = h,
        n.currentY = m;
        const f = n.currentX - n.startX
          , g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
        i.isScrolling)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && c.cancelable && c.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
        i.isMoved || (r.loop && !r.cssMode && s.loopFix(),
        i.startTranslate = s.getTranslate(),
        s.setTransition(0),
        s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        i.allowMomentumBounce = !1,
        !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
        s.emit("sliderFirstMove", c)),
        s.emit("sliderMove", c),
        i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v,
        v *= r.touchRatio,
        l && (v = -v),
        s.swipeDirection = v > 0 ? "prev" : "next",
        i.currentTranslate = v + i.startTranslate;
        let w = !0
          , b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0),
        v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
        w && (c.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function P(e) {
        const t = this
          , s = t.touchEventsData
          , {params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l} = t;
        if (!l)
            return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", o),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && a.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u()
          , c = d - s.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(o),
        t.emit("tap click", o),
        c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)),
        s.lastClickTime = u(),
        p(( () => {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate,
        a.cssMode)
            return;
        if (t.params.freeMode && a.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        let m = 0
          , f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e,
            f = n[e + t] - n[e]) : h >= n[e] && (m = e,
            f = n[n.length - 1] - n[n.length - 2])
        }
        const g = (h - n[m]) / f
          , v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
            "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v),
            "prev" === t.swipeDirection && t.slideTo(m))
        }
    }
    function k() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function z(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function O() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    let I = !1;
    function L() {}
    const A = (e, t) => {
        const s = a()
          , {params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d} = e
          , c = !!i.nested
          , p = "on" === t ? "addEventListener" : "removeEventListener"
          , u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t),
            n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c),
            n[p](r.end, e.onTouchEnd, t),
            r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else
            n[p](r.start, e.onTouchStart, !1),
            s[p](r.move, e.onTouchMove, c),
            s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0),
        i.cssMode && l[p]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0)
    }
    ;
    const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function N(e, t) {
        return function(s={}) {
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }),
            a in e && "enabled"in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            f(t, s)) : f(t, s)) : f(t, s)
        }
    }
    const B = {
        eventsEmitter: C,
        update: {
            updateSize: function() {
                const e = this;
                let t, s;
                const a = e.$el;
                t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth,
                s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight,
                0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10),
                s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(s) && (s = 0),
                Object.assign(e, {
                    width: t,
                    height: s,
                    size: e.isHorizontal() ? t : s
                }))
            },
            updateSlides: function() {
                const e = this;
                function t(t) {
                    return e.isHorizontal() ? t : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[t]
                }
                function s(e, s) {
                    return parseFloat(e.getPropertyValue(t(s)) || 0)
                }
                const a = e.params
                  , {$wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
                  , o = e.virtual && a.virtual.enabled
                  , d = o ? e.virtual.slides.length : e.slides.length
                  , c = i.children(`.${e.params.slideClass}`)
                  , p = o ? e.virtual.slides.length : c.length;
                let u = [];
                const h = []
                  , m = [];
                let f = a.slidesOffsetBefore;
                "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                let v = a.slidesOffsetAfter;
                "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                const w = e.snapGrid.length
                  , b = e.slidesGrid.length;
                let x = a.spaceBetween
                  , y = -f
                  , E = 0
                  , T = 0;
                if (void 0 === r)
                    return;
                "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r),
                e.virtualSize = -x,
                n ? c.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : c.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }),
                a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""),
                g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                const C = a.grid && a.grid.rows > 1 && e.grid;
                let $;
                C && e.grid.initSlides(p);
                const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                for (let i = 0; i < p; i += 1) {
                    $ = 0;
                    const n = c.eq(i);
                    if (C && e.grid.updateSlide(i, n, p, t),
                    "none" !== n.css("display")) {
                        if ("auto" === a.slidesPerView) {
                            S && (c[i].style[t("width")] = "");
                            const r = getComputedStyle(n[0])
                              , l = n[0].style.transform
                              , o = n[0].style.webkitTransform;
                            if (l && (n[0].style.transform = "none"),
                            o && (n[0].style.webkitTransform = "none"),
                            a.roundLengths)
                                $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                            else {
                                const e = s(r, "width")
                                  , t = s(r, "padding-left")
                                  , a = s(r, "padding-right")
                                  , i = s(r, "margin-left")
                                  , l = s(r, "margin-right")
                                  , o = r.getPropertyValue("box-sizing");
                                if (o && "border-box" === o)
                                    $ = e + i + l;
                                else {
                                    const {clientWidth: s, offsetWidth: r} = n[0];
                                    $ = e + t + a + i + l + (r - s)
                                }
                            }
                            l && (n[0].style.transform = l),
                            o && (n[0].style.webkitTransform = o),
                            a.roundLengths && ($ = Math.floor($))
                        } else
                            $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView,
                            a.roundLengths && ($ = Math.floor($)),
                            c[i] && (c[i].style[t("width")] = `${$}px`);
                        c[i] && (c[i].swiperSlideSize = $),
                        m.push($),
                        a.centeredSlides ? (y = y + $ / 2 + E / 2 + x,
                        0 === E && 0 !== i && (y = y - r / 2 - x),
                        0 === i && (y = y - r / 2 - x),
                        Math.abs(y) < .001 && (y = 0),
                        a.roundLengths && (y = Math.floor(y)),
                        T % a.slidesPerGroup == 0 && u.push(y),
                        h.push(y)) : (a.roundLengths && (y = Math.floor(y)),
                        (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y),
                        h.push(y),
                        y = y + $ + x),
                        e.virtualSize += $ + x,
                        E = $,
                        T += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, r) + v,
                n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                    width: `${e.virtualSize + a.spaceBetween}px`
                }),
                a.setWrapperSize && i.css({
                    [t("width")]: `${e.virtualSize + a.spaceBetween}px`
                }),
                C && e.grid.updateWrapperSize($, u, t),
                !a.centeredSlides) {
                    const t = [];
                    for (let s = 0; s < u.length; s += 1) {
                        let i = u[s];
                        a.roundLengths && (i = Math.floor(i)),
                        u[s] <= e.virtualSize - r && t.push(i)
                    }
                    u = t,
                    Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                }
                if (0 === u.length && (u = [0]),
                0 !== a.spaceBetween) {
                    const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                    c.filter(( (e, t) => !a.cssMode || t !== c.length - 1)).css({
                        [s]: `${x}px`
                    })
                }
                if (a.centeredSlides && a.centeredSlidesBounds) {
                    let e = 0;
                    m.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    }
                    )),
                    e -= a.spaceBetween;
                    const t = e - r;
                    u = u.map((e => e < 0 ? -f : e > t ? t + v : e))
                }
                if (a.centerInsufficientSlides) {
                    let e = 0;
                    if (m.forEach((t => {
                        e += t + (a.spaceBetween ? a.spaceBetween : 0)
                    }
                    )),
                    e -= a.spaceBetween,
                    e < r) {
                        const t = (r - e) / 2;
                        u.forEach(( (e, s) => {
                            u[s] = e - t
                        }
                        )),
                        h.forEach(( (e, s) => {
                            h[s] = e + t
                        }
                        ))
                    }
                }
                if (Object.assign(e, {
                    slides: c,
                    snapGrid: u,
                    slidesGrid: h,
                    slidesSizesGrid: m
                }),
                a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                    g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
                    g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                    const t = -e.snapGrid[0]
                      , s = -e.slidesGrid[0];
                    e.snapGrid = e.snapGrid.map((e => e + t)),
                    e.slidesGrid = e.slidesGrid.map((e => e + s))
                }
                p !== d && e.emit("slidesLengthChange"),
                u.length !== w && (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
                h.length !== b && e.emit("slidesGridLengthChange"),
                a.watchSlidesProgress && e.updateSlidesOffset()
            },
            updateAutoHeight: function(e) {
                const t = this
                  , s = []
                  , a = t.virtual && t.params.virtual.enabled;
                let i, r = 0;
                "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    if (t.params.centeredSlides)
                        t.visibleSlides.each((e => {
                            s.push(e)
                        }
                        ));
                    else
                        for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                            const e = t.activeIndex + i;
                            if (e > t.slides.length && !a)
                                break;
                            s.push(n(e))
                        }
                else
                    s.push(n(t.activeIndex));
                for (i = 0; i < s.length; i += 1)
                    if (void 0 !== s[i]) {
                        const e = s[i].offsetHeight;
                        r = e > r ? e : r
                    }
                r && t.$wrapperEl.css("height", `${r}px`)
            },
            updateSlidesOffset: function() {
                const e = this
                  , t = e.slides;
                for (let s = 0; s < t.length; s += 1)
                    t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
            },
            updateSlidesProgress: function(e=this && this.translate || 0) {
                const t = this
                  , s = t.params
                  , {slides: a, rtlTranslate: i, snapGrid: r} = t;
                if (0 === a.length)
                    return;
                void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                let n = -e;
                i && (n = e),
                a.removeClass(s.slideVisibleClass),
                t.visibleSlidesIndexes = [],
                t.visibleSlides = [];
                for (let e = 0; e < a.length; e += 1) {
                    const l = a[e];
                    let o = l.swiperSlideOffset;
                    s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                    const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                      , c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween)
                      , p = -(n - o)
                      , u = p + t.slidesSizesGrid[e];
                    (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l),
                    t.visibleSlidesIndexes.push(e),
                    a.eq(e).addClass(s.slideVisibleClass)),
                    l.progress = i ? -d : d,
                    l.originalProgress = i ? -c : c
                }
                t.visibleSlides = d(t.visibleSlides)
            },
            updateProgress: function(e) {
                const t = this;
                if (void 0 === e) {
                    const s = t.rtlTranslate ? -1 : 1;
                    e = t && t.translate && t.translate * s || 0
                }
                const s = t.params
                  , a = t.maxTranslate() - t.minTranslate();
                let {progress: i, isBeginning: r, isEnd: n} = t;
                const l = r
                  , o = n;
                0 === a ? (i = 0,
                r = !0,
                n = !0) : (i = (e - t.minTranslate()) / a,
                r = i <= 0,
                n = i >= 1),
                Object.assign(t, {
                    progress: i,
                    isBeginning: r,
                    isEnd: n
                }),
                (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
                r && !l && t.emit("reachBeginning toEdge"),
                n && !o && t.emit("reachEnd toEdge"),
                (l && !r || o && !n) && t.emit("fromEdge"),
                t.emit("progress", i)
            },
            updateSlidesClasses: function() {
                const e = this
                  , {slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r} = e
                  , n = e.virtual && s.virtual.enabled;
                let l;
                t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
                l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i),
                l.addClass(s.slideActiveClass),
                s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                s.loop && 0 === o.length && (o = t.eq(0),
                o.addClass(s.slideNextClass));
                let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                s.loop && 0 === d.length && (d = t.eq(-1),
                d.addClass(s.slidePrevClass)),
                s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),
                d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),
                e.emitSlidesClasses()
            },
            updateActiveIndex: function(e) {
                const t = this
                  , s = t.rtlTranslate ? t.translate : -t.translate
                  , {slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o} = t;
                let d, c = e;
                if (void 0 === c) {
                    for (let e = 0; e < a.length; e += 1)
                        void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                    r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                }
                if (i.indexOf(s) >= 0)
                    d = i.indexOf(s);
                else {
                    const e = Math.min(r.slidesPerGroupSkip, c);
                    d = e + Math.floor((c - e) / r.slidesPerGroup)
                }
                if (d >= i.length && (d = i.length - 1),
                c === n)
                    return void (d !== o && (t.snapIndex = d,
                    t.emit("snapIndexChange")));
                const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                Object.assign(t, {
                    snapIndex: d,
                    realIndex: p,
                    previousIndex: n,
                    activeIndex: c
                }),
                t.emit("activeIndexChange"),
                t.emit("snapIndexChange"),
                l !== p && t.emit("realIndexChange"),
                (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
            },
            updateClickedSlide: function(e) {
                const t = this
                  , s = t.params
                  , a = d(e.target).closest(`.${s.slideClass}`)[0];
                let i, r = !1;
                if (a)
                    for (let e = 0; e < t.slides.length; e += 1)
                        if (t.slides[e] === a) {
                            r = !0,
                            i = e;
                            break
                        }
                if (!a || !r)
                    return t.clickedSlide = void 0,
                    void (t.clickedIndex = void 0);
                t.clickedSlide = a,
                t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i,
                s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
            }
        },
        translate: {
            getTranslate: function(e=(this.isHorizontal() ? "x" : "y")) {
                const {params: t, rtlTranslate: s, translate: a, $wrapperEl: i} = this;
                if (t.virtualTranslate)
                    return s ? -a : a;
                if (t.cssMode)
                    return a;
                let r = h(i[0], e);
                return s && (r = -r),
                r || 0
            },
            setTranslate: function(e, t) {
                const s = this
                  , {rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l} = s;
                let o, d = 0, c = 0;
                s.isHorizontal() ? d = a ? -e : e : c = e,
                i.roundLengths && (d = Math.floor(d),
                c = Math.floor(c)),
                i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
                s.previousTranslate = s.translate,
                s.translate = s.isHorizontal() ? d : c;
                const p = s.maxTranslate() - s.minTranslate();
                o = 0 === p ? 0 : (e - s.minTranslate()) / p,
                o !== l && s.updateProgress(e),
                s.emit("setTranslate", s.translate, t)
            },
            minTranslate: function() {
                return -this.snapGrid[0]
            },
            maxTranslate: function() {
                return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e=0, t=this.params.speed, s=!0, a=!0, i) {
                const r = this
                  , {params: n, wrapperEl: l} = r;
                if (r.animating && n.preventInteractionOnTransition)
                    return !1;
                const o = r.minTranslate()
                  , d = r.maxTranslate();
                let c;
                if (c = a && e > o ? o : a && e < d ? d : e,
                r.updateProgress(c),
                n.cssMode) {
                    const e = r.isHorizontal();
                    if (0 === t)
                        l[e ? "scrollLeft" : "scrollTop"] = -c;
                    else {
                        if (!r.support.smoothScroll)
                            return v({
                                swiper: r,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        l.scrollTo({
                            [e ? "left" : "top"]: -c,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(c),
                s && (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionEnd"))) : (r.setTransition(t),
                r.setTranslate(c),
                s && (r.emit("beforeTransitionStart", t, i),
                r.emit("transitionStart")),
                r.animating || (r.animating = !0,
                r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd),
                    r.onTranslateToWrapperTransitionEnd = null,
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))),
                !0
            }
        },
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e=!0, t) {
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                $({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e=!0, t) {
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                $({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: {
            slideTo: function(e=0, t=this.params.speed, s=!0, a, i) {
                if ("number" != typeof e && "string" != typeof e)
                    throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                if ("string" == typeof e) {
                    const t = parseInt(e, 10);
                    if (!isFinite(t))
                        throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                    e = t
                }
                const r = this;
                let n = e;
                n < 0 && (n = 0);
                const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m} = r;
                if (r.animating && l.preventInteractionOnTransition || !m && !a && !i)
                    return !1;
                const f = Math.min(r.params.slidesPerGroupSkip, n);
                let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                g >= o.length && (g = o.length - 1),
                (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                const w = -o[g];
                if (r.updateProgress(w),
                l.normalizeSlideIndex)
                    for (let e = 0; e < d.length; e += 1) {
                        const t = -Math.floor(100 * w)
                          , s = Math.floor(100 * d[e])
                          , a = Math.floor(100 * d[e + 1]);
                        void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                    }
                if (r.initialized && n !== p) {
                    if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
                        return !1;
                    if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                        return !1
                }
                let b;
                if (b = n > p ? "next" : n < p ? "prev" : "reset",
                u && -w === r.translate || !u && w === r.translate)
                    return r.updateActiveIndex(n),
                    l.autoHeight && r.updateAutoHeight(),
                    r.updateSlidesClasses(),
                    "slide" !== l.effect && r.setTranslate(w),
                    "reset" !== b && (r.transitionStart(s, b),
                    r.transitionEnd(s, b)),
                    !1;
                if (l.cssMode) {
                    const e = r.isHorizontal()
                      , s = u ? w : -w;
                    if (0 === t) {
                        const t = r.virtual && r.params.virtual.enabled;
                        t && (r.wrapperEl.style.scrollSnapType = "none",
                        r._immediateVirtual = !0),
                        h[e ? "scrollLeft" : "scrollTop"] = s,
                        t && requestAnimationFrame(( () => {
                            r.wrapperEl.style.scrollSnapType = "",
                            r._swiperImmediateVirtual = !1
                        }
                        ))
                    } else {
                        if (!r.support.smoothScroll)
                            return v({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }),
                            !0;
                        h.scrollTo({
                            [e ? "left" : "top"]: s,
                            behavior: "smooth"
                        })
                    }
                    return !0
                }
                return 0 === t ? (r.setTransition(0),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                r.transitionEnd(s, b)) : (r.setTransition(t),
                r.setTranslate(w),
                r.updateActiveIndex(n),
                r.updateSlidesClasses(),
                r.emit("beforeTransitionStart", t, a),
                r.transitionStart(s, b),
                r.animating || (r.animating = !0,
                r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                    r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                    r.onSlideToWrapperTransitionEnd = null,
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b))
                }
                ),
                r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                !0
            },
            slideToLoop: function(e=0, t=this.params.speed, s=!0, a) {
                const i = this;
                let r = e;
                return i.params.loop && (r += i.loopedSlides),
                i.slideTo(r, t, s, a)
            },
            slideNext: function(e=this.params.speed, t=!0, s) {
                const a = this
                  , {animating: i, enabled: r, params: n} = a;
                if (!r)
                    return a;
                let l = n.slidesPerGroup;
                "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                if (n.loop) {
                    if (i && n.loopPreventsSlide)
                        return !1;
                    a.loopFix(),
                    a._clientLeft = a.$wrapperEl[0].clientLeft
                }
                return a.slideTo(a.activeIndex + o, e, t, s)
            },
            slidePrev: function(e=this.params.speed, t=!0, s) {
                const a = this
                  , {params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d} = a;
                if (!d)
                    return a;
                if (i.loop) {
                    if (r && i.loopPreventsSlide)
                        return !1;
                    a.loopFix(),
                    a._clientLeft = a.$wrapperEl[0].clientLeft
                }
                function c(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                }
                const p = c(o ? a.translate : -a.translate)
                  , u = n.map((e => c(e)));
                let h = n[u.indexOf(p) - 1];
                if (void 0 === h && i.cssMode) {
                    let e;
                    n.forEach(( (t, s) => {
                        p >= t && (e = s)
                    }
                    )),
                    void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                }
                let m = 0;
                return void 0 !== h && (m = l.indexOf(h),
                m < 0 && (m = a.activeIndex - 1),
                "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1,
                m = Math.max(m, 0))),
                a.slideTo(m, e, t, s)
            },
            slideReset: function(e=this.params.speed, t=!0, s) {
                return this.slideTo(this.activeIndex, e, t, s)
            },
            slideToClosest: function(e=this.params.speed, t=!0, s, a=.5) {
                const i = this;
                let r = i.activeIndex;
                const n = Math.min(i.params.slidesPerGroupSkip, r)
                  , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
                  , o = i.rtlTranslate ? i.translate : -i.translate;
                if (o >= i.snapGrid[l]) {
                    const e = i.snapGrid[l];
                    o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                } else {
                    const e = i.snapGrid[l - 1];
                    o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                }
                return r = Math.max(r, 0),
                r = Math.min(r, i.slidesGrid.length - 1),
                i.slideTo(r, e, t, s)
            },
            slideToClickedSlide: function() {
                const e = this
                  , {params: t, $wrapperEl: s} = e
                  , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                let i, r = e.clickedIndex;
                if (t.loop) {
                    if (e.animating)
                        return;
                    i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10),
                    t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                    r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    p(( () => {
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                    r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),
                    p(( () => {
                        e.slideTo(r)
                    }
                    ))) : e.slideTo(r)
                } else
                    e.slideTo(r)
            }
        },
        loop: {
            loopCreate: function() {
                const e = this
                  , t = a()
                  , {params: s, $wrapperEl: i} = e
                  , r = d(i.children()[0].parentNode);
                r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                let n = r.children(`.${s.slideClass}`);
                if (s.loopFillGroupWithBlank) {
                    const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                    if (e !== s.slidesPerGroup) {
                        for (let a = 0; a < e; a += 1) {
                            const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                            r.append(e)
                        }
                        n = r.children(`.${s.slideClass}`)
                    }
                }
                "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
                e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)),
                e.loopedSlides += s.loopAdditionalSlides,
                e.loopedSlides > n.length && (e.loopedSlides = n.length);
                const l = []
                  , o = [];
                n.each(( (t, s) => {
                    const a = d(t);
                    s < e.loopedSlides && o.push(t),
                    s < n.length && s >= n.length - e.loopedSlides && l.push(t),
                    a.attr("data-swiper-slide-index", s)
                }
                ));
                for (let e = 0; e < o.length; e += 1)
                    r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                for (let e = l.length - 1; e >= 0; e -= 1)
                    r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
            },
            loopFix: function() {
                const e = this;
                e.emit("beforeLoopFix");
                const {activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l} = e;
                let o;
                e.allowSlidePrev = !0,
                e.allowSlideNext = !0;
                const d = -n[t] - e.getTranslate();
                if (t < a) {
                    o = s.length - 3 * a + t,
                    o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                } else if (t >= s.length - a) {
                    o = -s.length + t + a,
                    o += a;
                    e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                }
                e.allowSlidePrev = i,
                e.allowSlideNext = r,
                e.emit("loopFix")
            },
            loopDestroy: function() {
                const {$wrapperEl: e, params: t, slides: s} = this;
                e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                s.removeAttr("data-swiper-slide-index")
            }
        },
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move",
                s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                s.style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                s.style.cursor = e ? "grabbing" : "grab"
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , t = a()
                  , {params: s, support: i} = e;
                e.onTouchStart = S.bind(e),
                e.onTouchMove = M.bind(e),
                e.onTouchEnd = P.bind(e),
                s.cssMode && (e.onScroll = O.bind(e)),
                e.onClick = z.bind(e),
                i.touch && !I && (t.addEventListener("touchstart", L),
                I = !0),
                A(e, "on")
            },
            detachEvents: function() {
                A(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {activeIndex: t, initialized: s, loopedSlides: a=0, params: i, $el: r} = e
                  , n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length)
                    return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l)
                    return;
                const o = (l in n ? n[l] : void 0) || e.originalParams
                  , d = D(e, i)
                  , c = D(e, o)
                  , p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`),
                (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`),
                e.emitContainerClasses());
                const u = o.direction && o.direction !== i.direction
                  , h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(),
                f(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                p && !m ? e.disable() : !p && m && e.enable(),
                e.currentBreakpoint = l,
                e.emit("_beforeBreakpoint", o),
                h && s && (e.loopDestroy(),
                e.loopCreate(),
                e.updateSlides(),
                e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", o)
            },
            getBreakpoint: function(e, t="window", s) {
                if (!e || "container" === t && !s)
                    return;
                let a = !1;
                const i = r()
                  , n = "window" === t ? i.innerHeight : s.clientHeight
                  , l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                l.sort(( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const e = this
                  , {classNames: t, params: s, rtl: a, $el: i, device: r, support: n} = e
                  , l = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        }
                        )) : "string" == typeof e && s.push(t + e)
                    }
                    )),
                    s
                }(["initialized", s.direction, {
                    "pointer-events": !n.touch
                }, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }], s.containerModifierClass);
                t.push(...l),
                i.addClass([...t].join(" ")),
                e.emitContainerClasses()
            },
            removeClasses: function() {
                const {$el: e, classNames: t} = this;
                e.removeClass(t.join(" ")),
                this.emitContainerClasses()
            }
        },
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r();
                let o;
                function c() {
                    n && n()
                }
                d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image,
                o.onload = c,
                o.onerror = c,
                a && (o.sizes = a),
                s && (o.srcset = s),
                t && (o.src = t)) : c()
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")))
                }
                e.imagesToLoad = e.$el.find("img");
                for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                }
            }
        }
    }
      , X = {};
    class H {
        constructor(...e) {
            let t, s;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t,s] = e,
            s || (s = {}),
            s = f({}, s),
            t && !s.el && (s.el = t),
            s.el && d(s.el).length > 1) {
                const e = [];
                return d(s.el).each((t => {
                    const a = f({}, s, {
                        el: t
                    });
                    e.push(new H(a))
                }
                )),
                e
            }
            const a = this;
            a.__swiper__ = !0,
            a.support = y(),
            a.device = E({
                userAgent: s.userAgent
            }),
            a.browser = T(),
            a.eventsListeners = {},
            a.eventsAnyListeners = [],
            a.modules = [...a.__modules__],
            s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
            const i = {};
            a.modules.forEach((e => {
                e({
                    swiper: a,
                    extendParams: N(s, i),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }
            ));
            const r = f({}, G, i);
            return a.params = f({}, r, X, s),
            a.originalParams = f({}, a.params),
            a.passedParams = f({}, s),
            a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                a.on(e, a.params.on[e])
            }
            )),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            a.$ = d,
            Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"]
                      , t = ["pointerdown", "pointermove", "pointerup"];
                    return a.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    },
                    a.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    },
                    a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e="current", t=!1) {
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled ? (a(),
            e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            i || a()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t=!0) {
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0]))
                return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let r = ( () => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e),
                    t
                }
                return s.children(i())
            }
            )();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e),
                e.className = t.params.wrapperClass,
                s.append(e),
                s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }
                ))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.attachEvents(),
            t.initialized = !0,
            t.emit("init"),
            t.emit("afterInit")),
            t
        }
        destroy(e=!0, t=!0) {
            const s = this
              , {params: a, $el: i, $wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            }
            )),
            !1 !== e && (s.$el[0].swiper = null,
            function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            f(X, e)
        }
        static get extendedDefaults() {
            return X
        }
        static get defaults() {
            return G
        }
        static installModule(e) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => H.installModule(e))),
            H) : (H.installModule(e),
            H)
        }
    }
    function Y(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"),
                n.className = i[a],
                e.$el.append(n)),
                s[a] = n,
                t[a] = n
            }
        }
        )),
        s
    }
    function W(e="") {
        return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function R(e) {
        const t = this
          , {$wrapperEl: s, params: a} = t;
        if (a.loop && t.loopDestroy(),
        "object" == typeof e && "length"in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && s.append(e[t]);
        else
            s.append(e);
        a.loop && t.loopCreate(),
        a.observer || t.update()
    }
    function j(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length"in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && a.prepend(e[t]);
            r = i + e.length
        } else
            a.prepend(e);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        t.slideTo(r, 0, !1)
    }
    function _(e, t) {
        const s = this
          , {$wrapperEl: a, params: i, activeIndex: r} = s;
        let n = r;
        i.loop && (n -= s.loopedSlides,
        s.loopDestroy(),
        s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            a.append(t);
        for (let e = 0; e < d.length; e += 1)
            a.append(d[e]);
        i.loop && s.loopCreate(),
        i.observer || s.update(),
        i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function V(e) {
        const t = this
          , {params: s, $wrapperEl: a, activeIndex: i} = t;
        let r = i;
        s.loop && (r -= t.loopedSlides,
        t.loopDestroy(),
        t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length"in e) {
            for (let s = 0; s < e.length; s += 1)
                n = e[s],
                t.slides[n] && t.slides.eq(n).remove(),
                n < l && (l -= 1);
            l = Math.max(l, 0)
        } else
            n = e,
            t.slides[n] && t.slides.eq(n).remove(),
            n < l && (l -= 1),
            l = Math.max(l, 0);
        s.loop && t.loopCreate(),
        s.observer || t.update(),
        s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }
    function q() {
        const e = this
          , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function F(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l} = e;
        a("beforeInit", ( () => {
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        }
        )),
        a("setTranslate", ( () => {
            s.params.effect === t && i()
        }
        )),
        a("setTransition", ( (e, a) => {
            s.params.effect === t && r(a)
        }
        ))
    }
    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }
    function K({swiper: e, duration: t, transformEl: s, allSlides: a}) {
        const {slides: i, activeIndex: r, $wrapperEl: n} = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, l = !1;
            t = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r),
            t.transitionEnd(( () => {
                if (l)
                    return;
                if (!e || e.destroyed)
                    return;
                l = !0,
                e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1)
                    n.trigger(t[e])
            }
            ))
        }
    }
    function Z(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : "")
          , i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`),
        i.append(r)),
        r
    }
    Object.keys(B).forEach((e => {
        Object.keys(B[e]).forEach((t => {
            H.prototype[t] = B[e][t]
        }
        ))
    }
    )),
    H.use([function({swiper: e, on: t, emit: s}) {
        const a = r();
        let i = null;
        const n = () => {
            e && !e.destroyed && e.initialized && (s("beforeResize"),
            s("resize"))
        }
          , l = () => {
            e && !e.destroyed && e.initialized && s("orientationchange")
        }
        ;
        t("init", ( () => {
            e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                const {width: s, height: a} = e;
                let i = s
                  , r = a;
                t.forEach(( ({contentBoxSize: t, contentRect: s, target: a}) => {
                    a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize,
                    r = s ? s.height : (t[0] || t).blockSize)
                }
                )),
                i === s && r === a || n()
            }
            )),
            i.observe(e.el)) : (a.addEventListener("resize", n),
            a.addEventListener("orientationchange", l))
        }
        )),
        t("destroy", ( () => {
            i && i.unobserve && e.el && (i.unobserve(e.el),
            i = null),
            a.removeEventListener("resize", n),
            a.removeEventListener("orientationchange", l)
        }
        ))
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = []
          , n = r()
          , l = (e, t={}) => {
            const s = new (n.MutationObserver || n.WebkitMutationObserver)((e => {
                if (1 === e.length)
                    return void a("observerUpdate", e[0]);
                const t = function() {
                    a("observerUpdate", e[0])
                };
                n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
            }
            ));
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            i.push(s)
        }
        ;
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        s("init", ( () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1)
                        l(t[e])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }),
                l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        }
        )),
        s("destroy", ( () => {
            i.forEach((e => {
                e.disconnect()
            }
            )),
            i.splice(0, i.length)
        }
        ))
    }
    ]);
    const J = [function({swiper: e, extendParams: t, on: s}) {
        let a;
        function i(t, s) {
            const a = e.params.virtual;
            if (a.cache && e.virtual.cache[s])
                return e.virtual.cache[s];
            const i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s),
            a.cache && (e.virtual.cache[s] = i),
            i
        }
        function r(t) {
            const {slidesPerView: s, slidesPerGroup: a, centeredSlides: r} = e.params
              , {addSlidesBefore: n, addSlidesAfter: l} = e.params.virtual
              , {from: o, to: d, slides: c, slidesGrid: p, offset: u} = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const h = e.activeIndex || 0;
            let m, f, g;
            m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top",
            r ? (f = Math.floor(s / 2) + a + l,
            g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l,
            g = a + n);
            const v = Math.max((h || 0) - g, 0)
              , w = Math.min((h || 0) + f, c.length - 1)
              , b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
            function x() {
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load()
            }
            if (Object.assign(e.virtual, {
                from: v,
                to: w,
                offset: b,
                slidesGrid: e.slidesGrid
            }),
            o === v && d === w && !t)
                return e.slidesGrid !== p && b !== u && e.slides.css(m, `${b}px`),
                void e.updateProgress();
            if (e.params.virtual.renderExternal)
                return e.params.virtual.renderExternal.call(e, {
                    offset: b,
                    from: v,
                    to: w,
                    slides: function() {
                        const e = [];
                        for (let t = v; t <= w; t += 1)
                            e.push(c[t]);
                        return e
                    }()
                }),
                void (e.params.virtual.renderExternalUpdate && x());
            const y = []
              , E = [];
            if (t)
                e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
            else
                for (let t = o; t <= d; t += 1)
                    (t < v || t > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < c.length; e += 1)
                e >= v && e <= w && (void 0 === d || t ? E.push(e) : (e > d && E.push(e),
                e < o && y.push(e)));
            E.forEach((t => {
                e.$wrapperEl.append(i(c[t], t))
            }
            )),
            y.sort(( (e, t) => t - e)).forEach((t => {
                e.$wrapperEl.prepend(i(c[t], t))
            }
            )),
            e.$wrapperEl.children(".swiper-slide").css(m, `${b}px`),
            x()
        }
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }),
        e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        },
        s("beforeInit", ( () => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides,
            e.classNames.push(`${e.params.containerModifierClass}virtual`),
            e.params.watchSlidesProgress = !0,
            e.originalParams.watchSlidesProgress = !0,
            e.params.initialSlide || r())
        }
        )),
        s("setTranslate", ( () => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a),
            a = setTimeout(( () => {
                r()
            }
            ), 100)) : r())
        }
        )),
        s("init update resize", ( () => {
            e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        }
        )),
        Object.assign(e.virtual, {
            appendSlide: function(t) {
                if ("object" == typeof t && "length"in t)
                    for (let s = 0; s < t.length; s += 1)
                        t[s] && e.virtual.slides.push(t[s]);
                else
                    e.virtual.slides.push(t);
                r(!0)
            },
            prependSlide: function(t) {
                const s = e.activeIndex;
                let a = s + 1
                  , i = 1;
                if (Array.isArray(t)) {
                    for (let s = 0; s < t.length; s += 1)
                        t[s] && e.virtual.slides.unshift(t[s]);
                    a = s + t.length,
                    i = t.length
                } else
                    e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache
                      , s = {};
                    Object.keys(t).forEach((e => {
                        const a = t[e]
                          , r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i),
                        s[parseInt(e, 10) + i] = a
                    }
                    )),
                    e.virtual.cache = s
                }
                r(!0),
                e.slideTo(a, 0)
            },
            removeSlide: function(t) {
                if (null == t)
                    return;
                let s = e.activeIndex;
                if (Array.isArray(t))
                    for (let a = t.length - 1; a >= 0; a -= 1)
                        e.virtual.slides.splice(t[a], 1),
                        e.params.virtual.cache && delete e.virtual.cache[t[a]],
                        t[a] < s && (s -= 1),
                        s = Math.max(s, 0);
                else
                    e.virtual.slides.splice(t, 1),
                    e.params.virtual.cache && delete e.virtual.cache[t],
                    t < s && (s -= 1),
                    s = Math.max(s, 0);
                r(!0),
                e.slideTo(s, 0)
            },
            removeAllSlides: function() {
                e.virtual.slides = [],
                e.params.virtual.cache && (e.virtual.cache = {}),
                r(!0),
                e.slideTo(0, 0)
            },
            update: r
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: i}) {
        const n = a()
          , l = r();
        function o(t) {
            if (!e.enabled)
                return;
            const {rtlTranslate: s} = e;
            let a = t;
            a.originalEvent && (a = a.originalEvent);
            const r = a.keyCode || a.charCode
              , o = e.params.keyboard.pageUpDown
              , d = o && 33 === r
              , c = o && 34 === r
              , p = 37 === r
              , u = 39 === r
              , h = 38 === r
              , m = 40 === r;
            if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c))
                return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length)
                        return;
                    const a = e.$el
                      , i = a[0].clientWidth
                      , r = a[0].clientHeight
                      , n = l.innerWidth
                      , o = l.innerHeight
                      , d = e.$el.offset();
                    s && (d.left -= e.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let e = 0; e < c.length; e += 1) {
                        const s = c[e];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            t = !0
                        }
                    }
                    if (!t)
                        return
                }
                e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((c || u) && !s || (d || p) && s) && e.slideNext(),
                ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (c || m) && e.slideNext(),
                (d || h) && e.slidePrev()),
                i("keyPress", r)
            }
        }
        function c() {
            e.keyboard.enabled || (d(n).on("keydown", o),
            e.keyboard.enabled = !0)
        }
        function p() {
            e.keyboard.enabled && (d(n).off("keydown", o),
            e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        },
        t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        s("init", ( () => {
            e.params.keyboard.enabled && c()
        }
        )),
        s("destroy", ( () => {
            e.keyboard.enabled && p()
        }
        )),
        Object.assign(e.keyboard, {
            enable: c,
            disable: p
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = r();
        let n;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }),
        e.mousewheel = {
            enabled: !1
        };
        let l, o = u();
        const c = [];
        function h() {
            e.enabled && (e.mouseEntered = !0)
        }
        function m() {
            e.enabled && (e.mouseEntered = !1)
        }
        function f(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(),
            a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(),
            a("scroll", t.raw)),
            o = (new i.Date).getTime(),
            !1)))
        }
        function g(t) {
            let s = t
              , i = !0;
            if (!e.enabled)
                return;
            const r = e.params.mousewheel;
            e.params.cssMode && s.preventDefault();
            let o = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)),
            !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let h = 0;
            const m = e.rtlTranslate ? -1 : 1
              , g = function(e) {
                let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                s = 0),
                a = 10 * t,
                i = 10 * s,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (a = e.deltaX),
                e.shiftKey && !a && (a = i,
                i = 0),
                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                i *= 40) : (a *= 800,
                i *= 800)),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                        return !0;
                    h = -g.pixelX * m
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                        return !0;
                    h = -g.pixelY
                }
            else
                h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
            if (0 === h)
                return !0;
            r.invert && (h = -h);
            let v = e.getTranslate() + h * r.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()),
            v <= e.maxTranslate() && (v = e.maxTranslate()),
            i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()),
            i && e.params.nested && s.stopPropagation(),
            e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                    time: u(),
                    delta: Math.abs(h),
                    direction: Math.sign(h)
                }
                  , i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                if (!i) {
                    l = void 0,
                    e.params.loop && e.loopFix();
                    let o = e.getTranslate() + h * r.sensitivity;
                    const d = e.isBeginning
                      , u = e.isEnd;
                    if (o >= e.minTranslate() && (o = e.minTranslate()),
                    o <= e.maxTranslate() && (o = e.maxTranslate()),
                    e.setTransition(0),
                    e.setTranslate(o),
                    e.updateProgress(),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses(),
                    (!d && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(),
                    e.params.freeMode.sticky) {
                        clearTimeout(n),
                        n = void 0,
                        c.length >= 15 && c.shift();
                        const s = c.length ? c[c.length - 1] : void 0
                          , a = c[0];
                        if (c.push(t),
                        s && (t.delta > s.delta || t.direction !== s.direction))
                            c.splice(0);
                        else if (c.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                            const s = h > 0 ? .8 : .2;
                            l = t,
                            c.splice(0),
                            n = p(( () => {
                                e.slideToClosest(e.params.speed, !0, void 0, s)
                            }
                            ), 0)
                        }
                        n || (n = p(( () => {
                            l = t,
                            c.splice(0),
                            e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (i || a("scroll", s),
                    e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(),
                    o === e.minTranslate() || o === e.maxTranslate())
                        return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                    raw: t
                };
                c.length >= 2 && c.shift();
                const a = c.length ? c[c.length - 1] : void 0;
                if (c.push(s),
                a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s),
                function(t) {
                    const s = e.params.mousewheel;
                    if (t.direction < 0) {
                        if (e.isEnd && !e.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
            !1
        }
        function v(t) {
            let s = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)),
            s[t]("mouseenter", h),
            s[t]("mouseleave", m),
            s[t]("wheel", g)
        }
        function w() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g),
            !0) : !e.mousewheel.enabled && (v("on"),
            e.mousewheel.enabled = !0,
            !0)
        }
        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g),
            !0) : !!e.mousewheel.enabled && (v("off"),
            e.mousewheel.enabled = !1,
            !0)
        }
        s("init", ( () => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(),
            e.params.mousewheel.enabled && w()
        }
        )),
        s("destroy", ( () => {
            e.params.cssMode && w(),
            e.mousewheel.enabled && b()
        }
        )),
        Object.assign(e.mousewheel, {
            enable: w,
            disable: b
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        function i(t) {
            let s;
            return t && (s = d(t),
            e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))),
            s
        }
        function r(t, s) {
            const a = e.params.navigation;
            t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
            e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }
        function n() {
            if (e.params.loop)
                return;
            const {$nextEl: t, $prevEl: s} = e.navigation;
            r(s, e.isBeginning),
            r(t, e.isEnd)
        }
        function l(t) {
            t.preventDefault(),
            e.isBeginning && !e.params.loop || e.slidePrev()
        }
        function o(t) {
            t.preventDefault(),
            e.isEnd && !e.params.loop || e.slideNext()
        }
        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !t.nextEl && !t.prevEl)
                return;
            const s = i(t.nextEl)
              , a = i(t.prevEl);
            s && s.length > 0 && s.on("click", o),
            a && a.length > 0 && a.on("click", l),
            Object.assign(e.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }),
            e.enabled || (s && s.addClass(t.lockClass),
            a && a.addClass(t.lockClass))
        }
        function p() {
            const {$nextEl: t, $prevEl: s} = e.navigation;
            t && t.length && (t.off("click", o),
            t.removeClass(e.params.navigation.disabledClass)),
            s && s.length && (s.off("click", l),
            s.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }),
        e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        },
        s("init", ( () => {
            c(),
            n()
        }
        )),
        s("toEdge fromEdge lock unlock", ( () => {
            n()
        }
        )),
        s("destroy", ( () => {
            p()
        }
        )),
        s("enable disable", ( () => {
            const {$nextEl: t, $prevEl: s} = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
            s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        }
        )),
        s("click", ( (t, s) => {
            const {$nextEl: i, $prevEl: r} = e.navigation
              , n = s.target;
            if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n)))
                    return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                a(!0 === t ? "navigationShow" : "navigationHide"),
                i && i.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass)
            }
        }
        )),
        Object.assign(e.navigation, {
            update: n,
            init: c,
            destroy: p
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = "swiper-pagination";
        let r;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`
            }
        }),
        e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let n = 0;
        function l() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }
        function o(t, s) {
            const {bulletActiveClass: a} = e.params.pagination;
            t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }
        function c() {
            const t = e.rtl
              , s = e.params.pagination;
            if (l())
                return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , c = e.pagination.$el;
            let p;
            const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup),
            p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides),
            p > u - 1 && (p -= u),
            p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
            "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let i, l, u;
                if (s.dynamicBullets && (r = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"),
                s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex,
                n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)),
                i = p - n,
                l = i + (Math.min(a.length, s.dynamicMainBullets) - 1),
                u = (l + i) / 2),
                a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")),
                c.length > 1)
                    a.each((e => {
                        const t = d(e)
                          , a = t.index();
                        a === p && t.addClass(s.bulletActiveClass),
                        s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`),
                        a === i && o(t, "prev"),
                        a === l && o(t, "next"))
                    }
                    ));
                else {
                    const t = a.eq(p)
                      , r = t.index();
                    if (t.addClass(s.bulletActiveClass),
                    s.dynamicBullets) {
                        const t = a.eq(i)
                          , n = a.eq(l);
                        for (let e = i; e <= l; e += 1)
                            a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (r >= a.length - s.dynamicMainBullets) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else
                                o(t, "prev"),
                                o(n, "next");
                        else
                            o(t, "prev"),
                            o(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4)
                      , n = (r * i - r) / 2 - u * r
                      , l = t ? "right" : "left";
                    a.css(e.isHorizontal() ? l : "top", `${n}px`)
                }
            }
            if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            c.find(W(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1
                  , r = 1;
                "horizontal" === t ? i = a : r = a,
                c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e, p + 1, u)),
            a("paginationRender", c[0])) : a("paginationUpdate", c[0]),
            e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }
        function p() {
            const t = e.params.pagination;
            if (l())
                return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
              , i = e.pagination.$el;
            let r = "";
            if ("bullets" === t.type) {
                let a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && a > s && (a = s);
                for (let s = 0; s < a; s += 1)
                    t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(r),
                e.pagination.bullets = i.find(W(t.bulletClass))
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
            i.html(r)),
            "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
            i.html(r)),
            "custom" !== t.type && a("paginationRender", e.pagination.$el[0])
        }
        function u() {
            e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el)
                return;
            let s = d(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el),
            s.length > 1 && (s = s.filter((t => d(t).parents(".swiper")[0] === e.el)))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
            n = 0,
            t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass),
            t.clickable && s.on("click", W(t.bulletClass), (function(t) {
                t.preventDefault();
                let s = d(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides),
                e.slideTo(s)
            }
            )),
            Object.assign(e.pagination, {
                $el: s,
                el: s[0]
            }),
            e.enabled || s.addClass(t.lockClass))
        }
        function h() {
            const t = e.params.pagination;
            if (l())
                return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", W(t.bulletClass))
        }
        s("init", ( () => {
            u(),
            p(),
            c()
        }
        )),
        s("activeIndexChange", ( () => {
            (e.params.loop || void 0 === e.snapIndex) && c()
        }
        )),
        s("snapIndexChange", ( () => {
            e.params.loop || c()
        }
        )),
        s("slidesLengthChange", ( () => {
            e.params.loop && (p(),
            c())
        }
        )),
        s("snapGridLengthChange", ( () => {
            e.params.loop || (p(),
            c())
        }
        )),
        s("destroy", ( () => {
            h()
        }
        )),
        s("enable disable", ( () => {
            const {$el: t} = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        }
        )),
        s("lock unlock", ( () => {
            c()
        }
        )),
        s("click", ( (t, s) => {
            const i = s.target
              , {$el: r} = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl))
                    return;
                const t = r.hasClass(e.params.pagination.hiddenClass);
                a(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass)
            }
        }
        )),
        Object.assign(e.pagination, {
            render: p,
            update: c,
            init: u,
            destroy: h
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: i}) {
        const r = a();
        let n, l, o, c, u = !1, h = null, m = null;
        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t, rtlTranslate: s, progress: a} = e
              , {$dragEl: i, $el: r} = t
              , n = e.params.scrollbar;
            let d = l
              , c = (o - l) * a;
            s ? (c = -c,
            c > 0 ? (d = l - c,
            c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c,
            c = 0) : c + l > o && (d = o - c),
            e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`),
            i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`),
            i[0].style.height = `${d}px`),
            n.hide && (clearTimeout(h),
            r[0].style.opacity = 1,
            h = setTimeout(( () => {
                r[0].style.opacity = 0,
                r.transition(400)
            }
            ), 1e3))
        }
        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el)
                return;
            const {scrollbar: t} = e
              , {$dragEl: s, $el: a} = t;
            s[0].style.width = "",
            s[0].style.height = "",
            o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)),
            l = "auto" === e.params.scrollbar.dragSize ? o * c : parseInt(e.params.scrollbar.dragSize, 10),
            e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`,
            a[0].style.display = c >= 1 ? "none" : "",
            e.params.scrollbar.hide && (a[0].style.opacity = 0),
            e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }
        function v(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }
        function w(t) {
            const {scrollbar: s, rtlTranslate: a} = e
              , {$el: i} = s;
            let r;
            r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
            e.updateProgress(d),
            e.setTranslate(d),
            e.updateActiveIndex(),
            e.updateSlidesClasses()
        }
        function b(t) {
            const s = e.params.scrollbar
              , {scrollbar: a, $wrapperEl: r} = e
              , {$el: l, $dragEl: o} = a;
            u = !0,
            n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null,
            t.preventDefault(),
            t.stopPropagation(),
            r.transition(100),
            o.transition(100),
            w(t),
            clearTimeout(m),
            l.transition(0),
            s.hide && l.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            i("scrollbarDragStart", t)
        }
        function x(t) {
            const {scrollbar: s, $wrapperEl: a} = e
              , {$el: r, $dragEl: n} = s;
            u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1,
            w(t),
            a.transition(0),
            r.transition(0),
            n.transition(0),
            i("scrollbarDragMove", t))
        }
        function y(t) {
            const s = e.params.scrollbar
              , {scrollbar: a, $wrapperEl: r} = e
              , {$el: n} = a;
            u && (u = !1,
            e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""),
            r.transition("")),
            s.hide && (clearTimeout(m),
            m = p(( () => {
                n.css("opacity", 0),
                n.transition(400)
            }
            ), 1e3)),
            i("scrollbarDragEnd", t),
            s.snapOnRelease && e.slideToClosest())
        }
        function E(t) {
            const {scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: n, support: l} = e
              , o = s.$el[0]
              , d = !(!l.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            }
              , c = !(!l.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!o)
                return;
            const p = "on" === t ? "addEventListener" : "removeEventListener";
            l.touch ? (o[p](a.start, b, d),
            o[p](a.move, x, d),
            o[p](a.end, y, c)) : (o[p](i.start, b, d),
            r[p](i.move, x, d),
            r[p](i.end, y, c))
        }
        function T() {
            const {scrollbar: t, $el: s} = e;
            e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = e.params.scrollbar;
            if (!a.el)
                return;
            let i = d(a.el);
            e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let r = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`),
            i.append(r)),
            Object.assign(t, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }),
            a.draggable && e.params.scrollbar.el && E("on"),
            i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        function C() {
            e.params.scrollbar.el && E("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }),
        e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        },
        s("init", ( () => {
            T(),
            g(),
            f()
        }
        )),
        s("update resize observerUpdate lock unlock", ( () => {
            g()
        }
        )),
        s("setTranslate", ( () => {
            f()
        }
        )),
        s("setTransition", ( (t, s) => {
            !function(t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(s)
        }
        )),
        s("enable disable", ( () => {
            const {$el: t} = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }
        )),
        s("destroy", ( () => {
            C()
        }
        )),
        Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: f,
            init: T,
            destroy: C
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const a = (t, s) => {
            const {rtl: a} = e
              , i = d(t)
              , r = a ? -1 : 1
              , n = i.attr("data-swiper-parallax") || "0";
            let l = i.attr("data-swiper-parallax-x")
              , o = i.attr("data-swiper-parallax-y");
            const c = i.attr("data-swiper-parallax-scale")
              , p = i.attr("data-swiper-parallax-opacity");
            if (l || o ? (l = l || "0",
            o = o || "0") : e.isHorizontal() ? (l = n,
            o = "0") : (o = n,
            l = "0"),
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px",
            o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px",
            null != p) {
                const e = p - (p - 1) * (1 - Math.abs(s));
                i[0].style.opacity = e
            }
            if (null == c)
                i.transform(`translate3d(${l}, ${o}, 0px)`);
            else {
                const e = c - (c - 1) * (1 - Math.abs(s));
                i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
            }
        }
          , i = () => {
            const {$el: t, slides: s, progress: i, snapGrid: r} = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                a(e, i)
            }
            )),
            s.each(( (t, s) => {
                let n = t.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)),
                n = Math.min(Math.max(n, -1), 1),
                d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    a(e, n)
                }
                ))
            }
            ))
        }
        ;
        s("beforeInit", ( () => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0,
            e.originalParams.watchSlidesProgress = !0)
        }
        )),
        s("init", ( () => {
            e.params.parallax.enabled && i()
        }
        )),
        s("setTranslate", ( () => {
            e.params.parallax.enabled && i()
        }
        )),
        s("setTransition", ( (t, s) => {
            e.params.parallax.enabled && ( (t=e.params.speed) => {
                const {$el: s} = e;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const s = d(e);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (a = 0),
                    s.transition(a)
                }
                ))
            }
            )(s)
        }
        ))
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        const i = r();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        e.zoom = {
            enabled: !1
        };
        let n, l, o, c = 1, p = !1;
        const u = {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
        }
          , m = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , f = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let g = 1;
        function v(e) {
            if (e.targetTouches.length < 2)
                return 1;
            const t = e.targetTouches[0].pageX
              , s = e.targetTouches[0].pageY
              , a = e.targetTouches[1].pageX
              , i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }
        function w(t) {
            const s = e.support
              , a = e.params.zoom;
            if (l = !1,
            o = !1,
            !s.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                    return;
                l = !0,
                u.scaleStart = v(t)
            }
            u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`),
            0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)),
            u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`),
            u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0),
            p = !0) : u.$imageEl = void 0
        }
        function b(t) {
            const s = e.support
              , a = e.params.zoom
              , i = e.zoom;
            if (!s.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2)
                    return;
                o = !0,
                u.scaleMove = v(t)
            }
            u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c : i.scale = u.scaleMove / u.scaleStart * c,
            i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** .5),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5),
            u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w(t)
        }
        function x(t) {
            const s = e.device
              , a = e.support
              , i = e.params.zoom
              , r = e.zoom;
            if (!a.gestures) {
                if (!l || !o)
                    return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android)
                    return;
                l = !1,
                o = !1
            }
            u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio),
            u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
            c = r.scale,
            p = !1,
            1 === r.scale && (u.$slideEl = void 0))
        }
        function y(t) {
            const s = e.zoom;
            if (!u.$imageEl || 0 === u.$imageEl.length)
                return;
            if (e.allowClick = !1,
            !m.isTouched || !u.$slideEl)
                return;
            m.isMoved || (m.width = u.$imageEl[0].offsetWidth,
            m.height = u.$imageEl[0].offsetHeight,
            m.startX = h(u.$imageWrapEl[0], "x") || 0,
            m.startY = h(u.$imageWrapEl[0], "y") || 0,
            u.slideWidth = u.$slideEl[0].offsetWidth,
            u.slideHeight = u.$slideEl[0].offsetHeight,
            u.$imageWrapEl.transition(0));
            const a = m.width * s.scale
              , i = m.height * s.scale;
            if (!(a < u.slideWidth && i < u.slideHeight)) {
                if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0),
                m.maxX = -m.minX,
                m.minY = Math.min(u.slideHeight / 2 - i / 2, 0),
                m.maxY = -m.minY,
                m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                !m.isMoved && !p) {
                    if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x))
                        return void (m.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))
                        return void (m.isTouched = !1)
                }
                t.cancelable && t.preventDefault(),
                t.stopPropagation(),
                m.isMoved = !0,
                m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX,
                m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY,
                m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8),
                m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8),
                m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8),
                m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8),
                f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x),
                f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y),
                f.prevTime || (f.prevTime = Date.now()),
                f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2,
                f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2,
                Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0),
                Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0),
                f.prevPositionX = m.touchesCurrent.x,
                f.prevPositionY = m.touchesCurrent.y,
                f.prevTime = Date.now(),
                u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }
        function E() {
            const t = e.zoom;
            u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"),
            t.scale = 1,
            c = 1,
            u.$slideEl = void 0,
            u.$imageEl = void 0,
            u.$imageWrapEl = void 0)
        }
        function T(t) {
            const s = e.zoom
              , a = e.params.zoom;
            if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)),
            u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex)),
            u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)),
            !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length)
                return;
            let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden",
            e.wrapperEl.style.touchAction = "none"),
            u.$slideEl.addClass(`${a.zoomedSlideClass}`),
            void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
            n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x,
            n = m.touchesStart.y),
            s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio,
            t ? ($ = u.$slideEl[0].offsetWidth,
            S = u.$slideEl[0].offsetHeight,
            l = u.$slideEl.offset().left + i.scrollX,
            o = u.$slideEl.offset().top + i.scrollY,
            p = l + $ / 2 - r,
            h = o + S / 2 - n,
            v = u.$imageEl[0].offsetWidth,
            w = u.$imageEl[0].offsetHeight,
            b = v * s.scale,
            x = w * s.scale,
            y = Math.min($ / 2 - b / 2, 0),
            E = Math.min(S / 2 - x / 2, 0),
            T = -y,
            C = -E,
            f = p * s.scale,
            g = h * s.scale,
            f < y && (f = y),
            f > T && (f = T),
            g < E && (g = E),
            g > C && (g = C)) : (f = 0,
            g = 0),
            u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),
            u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }
        function C() {
            const t = e.zoom
              , s = e.params.zoom;
            u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex),
            u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"),
            u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)),
            u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "",
            e.wrapperEl.style.touchAction = ""),
            t.scale = 1,
            c = 1,
            u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            u.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            u.$slideEl = void 0)
        }
        function $(t) {
            const s = e.zoom;
            s.scale && 1 !== s.scale ? C() : T(t)
        }
        function S() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function M() {
            return `.${e.params.slideClass}`
        }
        function P(t) {
            const {passiveListener: s} = S()
              , a = M();
            e.$wrapperEl[t]("gesturestart", a, w, s),
            e.$wrapperEl[t]("gesturechange", a, b, s),
            e.$wrapperEl[t]("gestureend", a, x, s)
        }
        function k() {
            n || (n = !0,
            P("on"))
        }
        function z() {
            n && (n = !1,
            P("off"))
        }
        function O() {
            const t = e.zoom;
            if (t.enabled)
                return;
            t.enabled = !0;
            const s = e.support
              , {passiveListener: a, activeListenerWithCapture: i} = S()
              , r = M();
            s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a),
            e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a),
            e.$wrapperEl.on(e.touchEvents.move, r, b, i),
            e.$wrapperEl.on(e.touchEvents.end, r, x, a),
            e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)),
            e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }
        function I() {
            const t = e.zoom;
            if (!t.enabled)
                return;
            const s = e.support;
            t.enabled = !1;
            const {passiveListener: a, activeListenerWithCapture: i} = S()
              , r = M();
            s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a),
            e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a),
            e.$wrapperEl.off(e.touchEvents.move, r, b, i),
            e.$wrapperEl.off(e.touchEvents.end, r, x, a),
            e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)),
            e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => g,
            set(e) {
                if (g !== e) {
                    const t = u.$imageEl ? u.$imageEl[0] : void 0
                      , s = u.$slideEl ? u.$slideEl[0] : void 0;
                    a("zoomChange", e, t, s)
                }
                g = e
            }
        }),
        s("init", ( () => {
            e.params.zoom.enabled && O()
        }
        )),
        s("destroy", ( () => {
            I()
        }
        )),
        s("touchStart", ( (t, s) => {
            e.zoom.enabled && function(t) {
                const s = e.device;
                u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(),
                m.isTouched = !0,
                m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(s)
        }
        )),
        s("touchEnd", ( (t, s) => {
            e.zoom.enabled && function() {
                const t = e.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length)
                    return;
                if (!m.isTouched || !m.isMoved)
                    return m.isTouched = !1,
                    void (m.isMoved = !1);
                m.isTouched = !1,
                m.isMoved = !1;
                let s = 300
                  , a = 300;
                const i = f.x * s
                  , r = m.currentX + i
                  , n = f.y * a
                  , l = m.currentY + n;
                0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)),
                0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
                const o = Math.max(s, a);
                m.currentX = r,
                m.currentY = l;
                const d = m.width * t.scale
                  , c = m.height * t.scale;
                m.minX = Math.min(u.slideWidth / 2 - d / 2, 0),
                m.maxX = -m.minX,
                m.minY = Math.min(u.slideHeight / 2 - c / 2, 0),
                m.maxY = -m.minY,
                m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX),
                m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY),
                u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        }
        )),
        s("doubleTap", ( (t, s) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s)
        }
        )),
        s("transitionEnd", ( () => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        }
        )),
        s("slideChange", ( () => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        }
        )),
        Object.assign(e.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: C,
            toggle: $
        })
    }
    , function({swiper: e, extendParams: t, on: s, emit: a}) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }),
        e.lazy = {};
        let i = !1
          , n = !1;
        function l(t, s=!0) {
            const i = e.params.lazy;
            if (void 0 === t)
                return;
            if (0 === e.slides.length)
                return;
            const r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t)
              , n = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
            !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]),
            0 !== n.length && n.each((t => {
                const n = d(t);
                n.addClass(i.loadingClass);
                const o = n.attr("data-background")
                  , c = n.attr("data-src")
                  , p = n.attr("data-srcset")
                  , u = n.attr("data-sizes")
                  , h = n.parent("picture");
                e.loadImage(n[0], c || o, p, u, !1, ( () => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (o ? (n.css("background-image", `url("${o}")`),
                        n.removeAttr("data-background")) : (p && (n.attr("srcset", p),
                        n.removeAttr("data-srcset")),
                        u && (n.attr("sizes", u),
                        n.removeAttr("data-sizes")),
                        h.length && h.children("source").each((e => {
                            const t = d(e);
                            t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")),
                            t.removeAttr("data-srcset"))
                        }
                        )),
                        c && (n.attr("src", c),
                        n.removeAttr("data-src"))),
                        n.addClass(i.loadedClass).removeClass(i.loadingClass),
                        r.find(`.${i.preloaderClass}`).remove(),
                        e.params.loop && s) {
                            const t = r.attr("data-swiper-slide-index");
                            if (r.hasClass(e.params.slideDuplicateClass)) {
                                l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                            }
                        }
                        a("lazyImageReady", r[0], n[0]),
                        e.params.autoHeight && e.updateAutoHeight()
                    }
                }
                )),
                a("lazyImageLoad", r[0], n[0])
            }
            ))
        }
        function o() {
            const {$wrapperEl: t, params: s, slides: a, activeIndex: i} = e
              , r = e.virtual && s.virtual.enabled
              , o = s.lazy;
            let c = s.slidesPerView;
            function p(e) {
                if (r) {
                    if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)
                        return !0
                } else if (a[e])
                    return !0;
                return !1
            }
            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0),
            n || (n = !0),
            e.params.watchSlidesProgress)
                t.children(`.${s.slideVisibleClass}`).each((e => {
                    l(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
                }
                ));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1)
                    p(e) && l(e);
            else
                l(i);
            if (o.loadPrevNext)
                if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    const e = o.loadPrevNextAmount
                      , t = c
                      , s = Math.min(i + t + Math.max(e, t), a.length)
                      , r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + c; e < s; e += 1)
                        p(e) && l(e);
                    for (let e = r; e < i; e += 1)
                        p(e) && l(e)
                } else {
                    const e = t.children(`.${s.slideNextClass}`);
                    e.length > 0 && l(u(e));
                    const a = t.children(`.${s.slidePrevClass}`);
                    a.length > 0 && l(u(a))
                }
        }
        function c() {
            const t = r();
            if (!e || e.destroyed)
                return;
            const s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t)
              , a = s[0] === t
              , n = a ? t.innerWidth : s[0].offsetWidth
              , l = a ? t.innerHeight : s[0].offsetHeight
              , p = e.$el.offset()
              , {rtlTranslate: u} = e;
            let h = !1;
            u && (p.left -= e.$el[0].scrollLeft);
            const m = [[p.left, p.top], [p.left + e.width, p.top], [p.left, p.top + e.height], [p.left + e.width, p.top + e.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1])
                        continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (o(),
            s.off("scroll", c, f)) : i || (i = !0,
            s.on("scroll", c, f))
        }
        s("beforeInit", ( () => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        }
        )),
        s("init", ( () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
        }
        )),
        s("scroll", ( () => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o()
        }
        )),
        s("scrollbarDragMove resize _freeModeNoMomentumRelease", ( () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
        }
        )),
        s("transitionStart", ( () => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? c() : o())
        }
        )),
        s("transitionEnd", ( () => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : o())
        }
        )),
        s("slideChange", ( () => {
            const {lazy: t, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r} = e.params;
            t.enabled && (s || a && (i || 0 === r)) && o()
        }
        )),
        Object.assign(e.lazy, {
            load: o,
            loadInSlide: l
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        function a(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        }
        function i() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0,
            delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        e.controller = {
            control: void 0
        },
        s("beforeInit", ( () => {
            e.controller.control = e.params.controller.control
        }
        )),
        s("update", ( () => {
            i()
        }
        )),
        s("resize", ( () => {
            i()
        }
        )),
        s("observerUpdate", ( () => {
            i()
        }
        )),
        s("setTranslate", ( (t, s, a) => {
            e.controller.control && e.controller.setTranslate(s, a)
        }
        )),
        s("setTransition", ( (t, s, a) => {
            e.controller.control && e.controller.setTransition(s, a)
        }
        )),
        Object.assign(e.controller, {
            setTranslate: function(t, s) {
                const i = e.controller.control;
                let r, n;
                const l = e.constructor;
                function o(t) {
                    const s = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (!function(t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid,t.slidesGrid) : new a(e.snapGrid,t.snapGrid))
                    }(t),
                    n = -e.controller.spline.interpolate(-s)),
                    n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()),
                    n = (s - e.minTranslate()) * r + t.minTranslate()),
                    e.params.controller.inverse && (n = t.maxTranslate() - n),
                    t.updateProgress(n),
                    t.setTranslate(n, e),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1)
                        i[e] !== s && i[e]instanceof l && o(i[e]);
                else
                    i instanceof l && s !== i && o(i)
            },
            setTransition: function(t, s) {
                const a = e.constructor
                  , i = e.controller.control;
                let r;
                function n(s) {
                    s.setTransition(t, e),
                    0 !== t && (s.transitionStart(),
                    s.params.autoHeight && p(( () => {
                        s.updateAutoHeight()
                    }
                    )),
                    s.$wrapperEl.transitionEnd(( () => {
                        i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(),
                        s.transitionEnd())
                    }
                    )))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r]instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let a = null;
        function i(e) {
            const t = a;
            0 !== t.length && (t.html(""),
            t.html(e))
        }
        function r(e) {
            e.attr("tabIndex", "0")
        }
        function n(e) {
            e.attr("tabIndex", "-1")
        }
        function l(e, t) {
            e.attr("role", t)
        }
        function o(e, t) {
            e.attr("aria-roledescription", t)
        }
        function c(e, t) {
            e.attr("aria-label", t)
        }
        function p(e) {
            e.attr("aria-disabled", !0)
        }
        function u(e) {
            e.attr("aria-disabled", !1)
        }
        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode)
                return;
            const s = e.params.a11y
              , a = d(t.target);
            e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(),
            e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)),
            e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(),
            e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)),
            e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click()
        }
        function m() {
            if (e.params.loop || !e.navigation)
                return;
            const {$nextEl: t, $prevEl: s} = e.navigation;
            s && s.length > 0 && (e.isBeginning ? (p(s),
            n(s)) : (u(s),
            r(s))),
            t && t.length > 0 && (e.isEnd ? (p(t),
            n(t)) : (u(t),
            r(t)))
        }
        function f() {
            return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length
        }
        const g = (e, t, s) => {
            r(e),
            "BUTTON" !== e[0].tagName && (l(e, "button"),
            e.on("keydown", h)),
            c(e, s),
            function(e, t) {
                e.attr("aria-controls", t)
            }(e, t)
        }
        ;
        function v() {
            const t = e.params.a11y;
            e.$el.append(a);
            const s = e.$el;
            t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage),
            t.containerMessage && c(s, t.containerMessage);
            const i = e.$wrapperEl
              , r = i.attr("id") || `swiper-wrapper-${function(e=16) {
                return "x".repeat(e).replace(/x/g, ( () => Math.round(16 * Math.random()).toString(16)))
            }(16)}`
              , n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            var p;
            p = r,
            i.attr("id", p),
            function(e, t) {
                e.attr("aria-live", t)
            }(i, n),
            t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage),
            l(d(e.slides), t.slideRole);
            const u = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
            let m, v;
            e.slides.each(( (s, a) => {
                const i = d(s)
                  , r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                c(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u))
            }
            )),
            e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl),
            e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl),
            m && m.length && g(m, r, t.nextSlideMessage),
            v && v.length && g(v, r, t.prevSlideMessage),
            f() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h)
        }
        s("beforeInit", ( () => {
            a = d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        }
        )),
        s("afterInit", ( () => {
            e.params.a11y.enabled && (v(),
            m())
        }
        )),
        s("toEdge", ( () => {
            e.params.a11y.enabled && m()
        }
        )),
        s("fromEdge", ( () => {
            e.params.a11y.enabled && m()
        }
        )),
        s("paginationUpdate", ( () => {
            e.params.a11y.enabled && function() {
                const t = e.params.a11y;
                f() && e.pagination.bullets.each((s => {
                    const a = d(s);
                    r(a),
                    e.params.pagination.renderBullet || (l(a, "button"),
                    c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))
                }
                ))
            }()
        }
        )),
        s("destroy", ( () => {
            e.params.a11y.enabled && function() {
                let t, s;
                a && a.length > 0 && a.remove(),
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl),
                t && t.off("keydown", h),
                s && s.off("keydown", h),
                f() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h)
            }()
        }
        ))
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let a = !1
          , i = {};
        const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , l = e => {
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter((e => "" !== e))
              , i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            }
        }
          , o = (t, s) => {
            const i = r();
            if (!a || !e.params.history.enabled)
                return;
            let l;
            l = e.params.url ? new URL(e.params.url) : i.location;
            const o = e.slides.eq(s);
            let d = n(o.attr("data-history"));
            if (e.params.history.root.length > 0) {
                let s = e.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                d = `${s}/${t}/${d}`
            } else
                l.pathname.includes(t) || (d = `${t}/${d}`);
            const c = i.history.state;
            c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
                value: d
            }, null, d) : i.history.pushState({
                value: d
            }, null, d))
        }
          , d = (t, s, a) => {
            if (s)
                for (let i = 0, r = e.slides.length; i < r; i += 1) {
                    const r = e.slides.eq(i);
                    if (n(r.attr("data-history")) === s && !r.hasClass(e.params.slideDuplicateClass)) {
                        const s = r.index();
                        e.slideTo(s, t, a)
                    }
                }
            else
                e.slideTo(0, t, a)
        }
          , c = () => {
            i = l(e.params.url),
            d(e.params.speed, e.paths.value, !1)
        }
        ;
        s("init", ( () => {
            e.params.history.enabled && ( () => {
                const t = r();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState)
                        return e.params.history.enabled = !1,
                        void (e.params.hashNavigation.enabled = !0);
                    a = !0,
                    i = l(e.params.url),
                    (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit),
                    e.params.history.replaceState || t.addEventListener("popstate", c))
                }
            }
            )()
        }
        )),
        s("destroy", ( () => {
            e.params.history.enabled && ( () => {
                const t = r();
                e.params.history.replaceState || t.removeEventListener("popstate", c)
            }
            )()
        }
        )),
        s("transitionEnd _freeModeNoMomentumRelease", ( () => {
            a && o(e.params.history.key, e.activeIndex)
        }
        )),
        s("slideChange", ( () => {
            a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
        }
        ))
    }
    , function({swiper: e, extendParams: t, emit: s, on: i}) {
        let n = !1;
        const l = a()
          , o = r();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const c = () => {
            s("hashChange");
            const t = l.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === s)
                    return;
                e.slideTo(s)
            }
        }
          , p = () => {
            if (n && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState)
                    o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""),
                    s("hashSet");
                else {
                    const t = e.slides.eq(e.activeIndex)
                      , a = t.attr("data-hash") || t.attr("data-history");
                    l.location.hash = a || "",
                    s("hashSet")
                }
        }
        ;
        i("init", ( () => {
            e.params.hashNavigation.enabled && ( () => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
                    return;
                n = !0;
                const t = l.location.hash.replace("#", "");
                if (t) {
                    const s = 0;
                    for (let a = 0, i = e.slides.length; a < i; a += 1) {
                        const i = e.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                            const t = i.index();
                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && d(o).on("hashchange", c)
            }
            )()
        }
        )),
        i("destroy", ( () => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", c)
        }
        )),
        i("transitionEnd _freeModeNoMomentumRelease", ( () => {
            n && p()
        }
        )),
        i("slideChange", ( () => {
            n && e.params.cssMode && p()
        }
        ))
    }
    , function({swiper: e, extendParams: t, on: s, emit: i}) {
        let r;
        function n() {
            const t = e.slides.eq(e.activeIndex);
            let s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(r),
            r = p(( () => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(),
                t = e.slidePrev(e.params.speed, !0, !0),
                i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0),
                i("autoplay")) : e.params.loop ? (e.loopFix(),
                t = e.slideNext(e.params.speed, !0, !0),
                i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0),
                i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0),
                i("autoplay")),
                (e.params.cssMode && e.autoplay.running || !1 === t) && n()
            }
            ), s)
        }
        function l() {
            return void 0 === r && (!e.autoplay.running && (e.autoplay.running = !0,
            i("autoplayStart"),
            n(),
            !0))
        }
        function o() {
            return !!e.autoplay.running && (void 0 !== r && (r && (clearTimeout(r),
            r = void 0),
            e.autoplay.running = !1,
            i("autoplayStop"),
            !0))
        }
        function d(t) {
            e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r),
            e.autoplay.paused = !0,
            0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, u)
            }
            )) : (e.autoplay.paused = !1,
            n())))
        }
        function c() {
            const t = a();
            "hidden" === t.visibilityState && e.autoplay.running && d(),
            "visible" === t.visibilityState && e.autoplay.paused && (n(),
            e.autoplay.paused = !1)
        }
        function u(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            }
            )),
            e.autoplay.paused = !1,
            e.autoplay.running ? n() : o())
        }
        function h() {
            e.params.autoplay.disableOnInteraction ? o() : d(),
            ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            }
            ))
        }
        function m() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1,
            n())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        },
        t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }),
        s("init", ( () => {
            if (e.params.autoplay.enabled) {
                l();
                a().addEventListener("visibilitychange", c),
                e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h),
                e.$el.on("mouseleave", m))
            }
        }
        )),
        s("beforeTransitionStart", ( (t, s, a) => {
            e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
        }
        )),
        s("sliderFirstMove", ( () => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
        }
        )),
        s("touchEnd", ( () => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
        }
        )),
        s("destroy", ( () => {
            e.$el.off("mouseenter", h),
            e.$el.off("mouseleave", m),
            e.autoplay.running && o();
            a().removeEventListener("visibilitychange", c)
        }
        )),
        Object.assign(e.autoplay, {
            pause: d,
            run: n,
            start: l,
            stop: o
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let a = !1
          , i = !1;
        function r() {
            const t = e.thumbs.swiper;
            if (!t)
                return;
            const s = t.clickedIndex
              , a = t.clickedSlide;
            if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s,
            e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(),
                e._clientLeft = e.$wrapperEl[0].clientLeft,
                t = e.activeIndex);
                const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index()
                  , a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
            }
            e.slideTo(i)
        }
        function n() {
            const {thumbs: t} = e.params;
            if (a)
                return !1;
            a = !0;
            const s = e.constructor;
            if (t.swiper instanceof s)
                e.thumbs.swiper = t.swiper,
                Object.assign(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
            else if (m(t.swiper)) {
                const a = Object.assign({}, t.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                e.thumbs.swiper = new s(a),
                i = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", r),
            !0
        }
        function l(t) {
            const s = e.thumbs.swiper;
            if (!s)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView
              , i = e.params.thumbs.autoScrollOffset
              , r = i && !s.params.loop;
            if (e.realIndex !== s.realIndex || r) {
                let n, l, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(),
                    s._clientLeft = s.$wrapperEl[0].clientLeft,
                    o = s.activeIndex);
                    const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index()
                      , a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t,
                    l = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else
                    n = e.realIndex,
                    l = n > e.previousIndex ? "next" : "prev";
                r && (n += "next" === l ? i : -1 * i),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup,
                s.slideTo(n, t ? 0 : void 0))
            }
            let n = 1;
            const l = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (n = 1),
            n = Math.floor(n),
            s.slides.removeClass(l),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let t = 0; t < n; t += 1)
                    s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex + t}"]`).addClass(l);
            else
                for (let t = 0; t < n; t += 1)
                    s.slides.eq(e.realIndex + t).addClass(l)
        }
        e.thumbs = {
            swiper: null
        },
        s("beforeInit", ( () => {
            const {thumbs: t} = e.params;
            t && t.swiper && (n(),
            l(!0))
        }
        )),
        s("slideChange update resize observerUpdate", ( () => {
            e.thumbs.swiper && l()
        }
        )),
        s("setTransition", ( (t, s) => {
            const a = e.thumbs.swiper;
            a && a.setTransition(s)
        }
        )),
        s("beforeDestroy", ( () => {
            const t = e.thumbs.swiper;
            t && i && t && t.destroy()
        }
        )),
        Object.assign(e.thumbs, {
            init: n,
            update: l
        })
    }
    , function({swiper: e, extendParams: t, emit: s, once: a}) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(e, {
            freeMode: {
                onTouchMove: function() {
                    const {touchEventsData: t, touches: s} = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: s[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }),
                    t.velocities.push({
                        position: s[e.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function({currentPos: t}) {
                    const {params: i, $wrapperEl: r, rtlTranslate: n, snapGrid: l, touchEventsData: o} = e
                      , d = u() - o.touchStartTime;
                    if (t < -e.minTranslate())
                        e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate())
                        e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (i.freeMode.momentum) {
                            if (o.velocities.length > 1) {
                                const t = o.velocities.pop()
                                  , s = o.velocities.pop()
                                  , a = t.position - s.position
                                  , r = t.time - s.time;
                                e.velocity = a / r,
                                e.velocity /= 2,
                                Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0),
                                (r > 150 || u() - t.time > 300) && (e.velocity = 0)
                            } else
                                e.velocity = 0;
                            e.velocity *= i.freeMode.momentumVelocityRatio,
                            o.velocities.length = 0;
                            let t = 1e3 * i.freeMode.momentumRatio;
                            const d = e.velocity * t;
                            let c = e.translate + d;
                            n && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                            let f;
                            if (c < e.maxTranslate())
                                i.freeMode.momentumBounce ? (c + e.maxTranslate() < -m && (c = e.maxTranslate() - m),
                                p = e.maxTranslate(),
                                h = !0,
                                o.allowMomentumBounce = !0) : c = e.maxTranslate(),
                                i.loop && i.centeredSlides && (f = !0);
                            else if (c > e.minTranslate())
                                i.freeMode.momentumBounce ? (c - e.minTranslate() > m && (c = e.minTranslate() + m),
                                p = e.minTranslate(),
                                h = !0,
                                o.allowMomentumBounce = !0) : c = e.minTranslate(),
                                i.loop && i.centeredSlides && (f = !0);
                            else if (i.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < l.length; e += 1)
                                    if (l[e] > -c) {
                                        t = e;
                                        break
                                    }
                                c = Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) || "next" === e.swipeDirection ? l[t] : l[t - 1],
                                c = -c
                            }
                            if (f && a("transitionEnd", ( () => {
                                e.loopFix()
                            }
                            )),
                            0 !== e.velocity) {
                                if (t = n ? Math.abs((-c - e.translate) / e.velocity) : Math.abs((c - e.translate) / e.velocity),
                                i.freeMode.sticky) {
                                    const s = Math.abs((n ? -c : c) - e.translate)
                                      , a = e.slidesSizesGrid[e.activeIndex];
                                    t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                                }
                            } else if (i.freeMode.sticky)
                                return void e.slideToClosest();
                            i.freeMode.momentumBounce && h ? (e.updateProgress(p),
                            e.setTransition(t),
                            e.setTranslate(c),
                            e.transitionStart(!0, e.swipeDirection),
                            e.animating = !0,
                            r.transitionEnd(( () => {
                                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"),
                                e.setTransition(i.speed),
                                setTimeout(( () => {
                                    e.setTranslate(p),
                                    r.transitionEnd(( () => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : e.velocity ? (s("_freeModeNoMomentumRelease"),
                            e.updateProgress(c),
                            e.setTransition(t),
                            e.setTranslate(c),
                            e.transitionStart(!0, e.swipeDirection),
                            e.animating || (e.animating = !0,
                            r.transitionEnd(( () => {
                                e && !e.destroyed && e.transitionEnd()
                            }
                            )))) : e.updateProgress(c),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses()
                        } else {
                            if (i.freeMode.sticky)
                                return void e.slideToClosest();
                            i.freeMode && s("_freeModeNoMomentumRelease")
                        }
                        (!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function({swiper: e, extendParams: t}) {
        let s, a, i;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }),
        e.grid = {
            initSlides: t => {
                const {slidesPerView: r} = e.params
                  , {rows: n, fill: l} = e.params.grid;
                a = s / n,
                i = Math.floor(t / n),
                s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n,
                "auto" !== r && "row" === l && (s = Math.max(s, r * n))
            }
            ,
            updateSlide: (t, r, n, l) => {
                const {slidesPerGroup: o, spaceBetween: d} = e.params
                  , {rows: c, fill: p} = e.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const e = Math.floor(t / (o * c))
                      , a = t - c * o * e
                      , i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
                    m = Math.floor(a / i),
                    h = a - m * i + e * o,
                    u = h + m * s / c,
                    r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else
                    "column" === p ? (h = Math.floor(t / c),
                    m = t - h * c,
                    (h > i || h === i && m === c - 1) && (m += 1,
                    m >= c && (m = 0,
                    h += 1))) : (m = Math.floor(t / a),
                    h = t - m * a);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            }
            ,
            updateWrapperSize: (t, a, i) => {
                const {spaceBetween: r, centeredSlides: n, roundLengths: l} = e.params
                  , {rows: o} = e.params.grid;
                if (e.virtualSize = (t + r) * s,
                e.virtualSize = Math.ceil(e.virtualSize / o) - r,
                e.$wrapperEl.css({
                    [i("width")]: `${e.virtualSize + r}px`
                }),
                n) {
                    a.splice(0, a.length);
                    const t = [];
                    for (let s = 0; s < a.length; s += 1) {
                        let i = a[s];
                        l && (i = Math.floor(i)),
                        a[s] < e.virtualSize + a[0] && t.push(i)
                    }
                    a.push(...t)
                }
            }
        }
    }
    , function({swiper: e}) {
        Object.assign(e, {
            appendSlide: R.bind(e),
            prependSlide: j.bind(e),
            addSlide: _.bind(e),
            removeSlide: V.bind(e),
            removeAllSlides: q.bind(e)
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }),
        F({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t} = e
                  , s = e.params.fadeEffect;
                for (let a = 0; a < t.length; a += 1) {
                    const t = e.slides.eq(a);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let r = 0;
                    e.isHorizontal() || (r = i,
                    i = 0);
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    U(s, t).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            }
            ,
            setTransition: t => {
                const {transformEl: s} = e.params.fadeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }),
        F({
            effect: "cube",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {$el: t, $wrapperEl: s, slides: a, width: i, height: r, rtlTranslate: n, size: l, browser: o} = e
                  , c = e.params.cubeEffect
                  , p = e.isHorizontal()
                  , u = e.virtual && e.params.virtual.enabled;
                let h, m = 0;
                c.shadow && (p ? (h = s.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                s.append(h)),
                h.css({
                    height: `${i}px`
                })) : (h = t.find(".swiper-cube-shadow"),
                0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'),
                t.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let i = 90 * s
                      , r = Math.floor(i / 360);
                    n && (i = -i,
                    r = Math.floor(-i / 360));
                    const o = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0
                      , f = 0
                      , g = 0;
                    s % 4 == 0 ? (h = 4 * -r * l,
                    g = 0) : (s - 1) % 4 == 0 ? (h = 0,
                    g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l,
                    g = l) : (s - 3) % 4 == 0 && (h = -l,
                    g = 3 * l + 4 * l * r),
                    n && (h = -h),
                    p || (f = h,
                    h = 0);
                    const v = `rotateX(${p ? 0 : -i}deg) rotateY(${p ? i : 0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                    if (o <= 1 && o > -1 && (m = 90 * s + 90 * o,
                    n && (m = 90 * -s - 90 * o)),
                    t.transform(v),
                    c.slideShadows) {
                        let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = d(`<div class="swiper-slide-shadow-${p ? "left" : "top"}"></div>`),
                        t.append(e)),
                        0 === s.length && (s = d(`<div class="swiper-slide-shadow-${p ? "right" : "bottom"}"></div>`),
                        t.append(s)),
                        e.length && (e[0].style.opacity = Math.max(-o, 0)),
                        s.length && (s[0].style.opacity = Math.max(o, 0))
                    }
                }
                if (s.css({
                    "-webkit-transform-origin": `50% 50% -${l / 2}px`,
                    "transform-origin": `50% 50% -${l / 2}px`
                }),
                c.shadow)
                    if (p)
                        h.transform(`translate3d(0px, ${i / 2 + c.shadowOffset}px, ${-i / 2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                    else {
                        const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , s = c.shadowScale
                          , a = c.shadowScale / t
                          , i = c.shadowOffset;
                        h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r / 2 + i}px, ${-r / 2 / a}px) rotateX(-90deg)`)
                    }
                const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`)
            }
            ,
            setTransition: t => {
                const {$el: s, slides: a} = e;
                a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }),
        F({
            effect: "flip",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, rtlTranslate: s} = e
                  , a = e.params.flipEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const r = t.eq(i);
                    let n = r[0].progress;
                    e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                    const l = r[0].swiperSlideOffset;
                    let o = -180 * n
                      , d = 0
                      , c = e.params.cssMode ? -l - e.translate : -l
                      , p = 0;
                    if (e.isHorizontal() ? s && (o = -o) : (p = c,
                    c = 0,
                    d = -o,
                    o = 0),
                    r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length,
                    a.slideShadows) {
                        let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                          , s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")),
                        0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")),
                        t.length && (t[0].style.opacity = Math.max(-n, 0)),
                        s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                    const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                    U(a, r).transform(u)
                }
            }
            ,
            setTransition: t => {
                const {transformEl: s} = e.params.flipEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }),
        F({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {width: t, height: s, slides: a, slidesSizesGrid: i} = e
                  , r = e.params.coverflowEffect
                  , n = e.isHorizontal()
                  , l = e.translate
                  , o = n ? t / 2 - l : s / 2 - l
                  , d = n ? r.rotate : -r.rotate
                  , c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e)
                      , s = i[e]
                      , l = (o - t[0].swiperSlideOffset - s / 2) / s * r.modifier;
                    let p = n ? d * l : 0
                      , u = n ? 0 : d * l
                      , h = -c * Math.abs(l)
                      , m = r.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                    let f = n ? 0 : m * l
                      , g = n ? m * l : 0
                      , v = 1 - (1 - r.scale) * Math.abs(l);
                    Math.abs(g) < .001 && (g = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(p) < .001 && (p = 0),
                    Math.abs(u) < .001 && (u = 0),
                    Math.abs(v) < .001 && (v = 0);
                    const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
                    if (U(r, t).transform(w),
                    t[0].style.zIndex = 1 - Math.abs(Math.round(l)),
                    r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                          , s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Z(r, t, n ? "left" : "top")),
                        0 === s.length && (s = Z(r, t, n ? "right" : "bottom")),
                        e.length && (e[0].style.opacity = l > 0 ? l : 0),
                        s.length && (s[0].style.opacity = -l > 0 ? -l : 0)
                    }
                }
            }
            ,
            setTransition: t => {
                const {transformEl: s} = e.params.coverflowEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const a = e => "string" == typeof e ? e : `${e}px`;
        F({
            effect: "creative",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, $wrapperEl: s, slidesSizesGrid: i} = e
                  , r = e.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = e.params.centeredSlides;
                if (l) {
                    const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let s = 0; s < t.length; s += 1) {
                    const i = t.eq(s)
                      , o = i[0].progress
                      , d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = i[0].swiperSlideOffset
                      , u = [e.params.cssMode ? -p - e.translate : -p, 0, 0]
                      , h = [0, 0, 0];
                    let m = !1;
                    e.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next,
                    m = !0) : d > 0 && (f = r.prev,
                    m = !0),
                    u.forEach(( (e, t) => {
                        u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`
                    }
                    )),
                    h.forEach(( (e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    }
                    )),
                    i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                    const g = u.join(", ")
                      , v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`
                      , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                      , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                      , x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = i.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = Z(r, i)),
                        e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = U(r, i);
                    y.transform(x).css({
                        opacity: b
                    }),
                    f.origin && y.css("transform-origin", f.origin)
                }
            }
            ,
            setTransition: t => {
                const {transformEl: s} = e.params.creativeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            }
            ,
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    , function({swiper: e, extendParams: t, on: s}) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }),
        F({
            effect: "cards",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {slides: t, activeIndex: s} = e
                  , a = e.params.cardsEffect
                  , {startTranslate: i, isTouched: r} = e.touchEventsData
                  , n = e.translate;
                for (let l = 0; l < t.length; l += 1) {
                    const o = t.eq(l)
                      , d = o[0].progress
                      , c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),
                    e.params.centeredSlides && e.params.cssMode && (p -= t[0].swiperSlideOffset);
                    let u = e.params.cssMode ? -p - e.translate : -p
                      , h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1
                      , g = -2 * c
                      , v = 8 - .75 * Math.abs(c);
                    const w = (l === s || l === s - 1) && c > 0 && c < 1 && (r || e.params.cssMode) && n < i
                      , b = (l === s || l === s + 1) && c < 0 && c > -1 && (r || e.params.cssMode) && n > i;
                    if (w || b) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e,
                        f += -.5 * e,
                        v += 96 * e,
                        h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`,
                    !e.isHorizontal()) {
                        const e = h;
                        h = u,
                        u = e
                    }
                    const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c)})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = Z(a, o)),
                        e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                    U(a, o).transform(x)
                }
            }
            ,
            setTransition: t => {
                const {transformEl: s} = e.params.cardsEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t),
                K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }
    ];
    return H.use(J),
    H
}
));

// jquery.datetimepicker.full.js
/*!
* @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2020
* @version 1.3.6
*
* Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
* This library is a standalone javascript library and does not depend on other libraries or plugins like jQuery. The
* library also adds support for Universal Module Definition (UMD).
*
* @see http://php.net/manual/en/function.date.php
*
* For more JQuery plugins visit http://plugins.krajee.com
* For more Yii related demos visit http://demos.krajee.com
*/
!function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.DateFormatter = e()
}("undefined" != typeof self ? self : this, function() {
    var t, e;
    return e = {
        DAY: 864e5,
        HOUR: 3600,
        defaults: {
            dateSettings: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridiem: ["AM", "PM"],
                ordinal: function(t) {
                    var e = t % 10
                      , n = {
                        1: "st",
                        2: "nd",
                        3: "rd"
                    };
                    return 1 !== Math.floor(t % 100 / 10) && n[e] ? n[e] : "th"
                }
            },
            separators: /[ \-+\/.:@]/g,
            validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
            intParts: /[djwNzmnyYhHgGis]/g,
            tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            tzClip: /[^-+\dA-Z]/g
        },
        getInt: function(t, e) {
            return parseInt(t, e ? e : 10)
        },
        compare: function(t, e) {
            return "string" == typeof t && "string" == typeof e && t.toLowerCase() === e.toLowerCase()
        },
        lpad: function(t, n, r) {
            var a = t.toString();
            return r = r || "0",
            a.length < n ? e.lpad(r + a, n) : a
        },
        merge: function(t) {
            var n, r;
            for (t = t || {},
            n = 1; n < arguments.length; n++)
                if (r = arguments[n])
                    for (var a in r)
                        r.hasOwnProperty(a) && ("object" == typeof r[a] ? e.merge(t[a], r[a]) : t[a] = r[a]);
            return t
        },
        getIndex: function(t, e) {
            for (var n = 0; n < e.length; n++)
                if (e[n].toLowerCase() === t.toLowerCase())
                    return n;
            return -1
        }
    },
    t = function(t) {
        var n = this
          , r = e.merge(e.defaults, t);
        n.dateSettings = r.dateSettings,
        n.separators = r.separators,
        n.validParts = r.validParts,
        n.intParts = r.intParts,
        n.tzParts = r.tzParts,
        n.tzClip = r.tzClip
    }
    ,
    t.prototype = {
        constructor: t,
        getMonth: function(t) {
            var n, r = this;
            return n = e.getIndex(t, r.dateSettings.monthsShort) + 1,
            0 === n && (n = e.getIndex(t, r.dateSettings.months) + 1),
            n
        },
        parseDate: function(t, n) {
            var r, a, u, i, o, s, c, f, l, d, g = this, h = !1, m = !1, p = g.dateSettings, y = {
                date: null,
                year: null,
                month: null,
                day: null,
                hour: 0,
                min: 0,
                sec: 0
            };
            if (!t)
                return null;
            if (t instanceof Date)
                return t;
            if ("U" === n)
                return u = e.getInt(t),
                u ? new Date(1e3 * u) : t;
            switch (typeof t) {
            case "number":
                return new Date(t);
            case "string":
                break;
            default:
                return null
            }
            if (r = n.match(g.validParts),
            !r || 0 === r.length)
                throw new Error("Invalid date format definition.");
            for (u = r.length - 1; u >= 0; u--)
                "S" === r[u] && r.splice(u, 1);
            for (a = t.replace(g.separators, "\x00").split("\x00"),
            u = 0; u < a.length; u++)
                switch (i = a[u],
                o = e.getInt(i),
                r[u]) {
                case "y":
                case "Y":
                    if (!o)
                        return null;
                    l = i.length,
                    y.year = 2 === l ? e.getInt((70 > o ? "20" : "19") + i) : o,
                    h = !0;
                    break;
                case "m":
                case "n":
                case "M":
                case "F":
                    if (isNaN(o)) {
                        if (s = g.getMonth(i),
                        !(s > 0))
                            return null;
                        y.month = s
                    } else {
                        if (!(o >= 1 && 12 >= o))
                            return null;
                        y.month = o
                    }
                    h = !0;
                    break;
                case "d":
                case "j":
                    if (!(o >= 1 && 31 >= o))
                        return null;
                    y.day = o,
                    h = !0;
                    break;
                case "g":
                case "h":
                    if (c = r.indexOf("a") > -1 ? r.indexOf("a") : r.indexOf("A") > -1 ? r.indexOf("A") : -1,
                    d = a[c],
                    -1 !== c)
                        f = e.compare(d, p.meridiem[0]) ? 0 : e.compare(d, p.meridiem[1]) ? 12 : -1,
                        o >= 1 && 12 >= o && -1 !== f ? y.hour = o % 12 === 0 ? f : o + f : o >= 0 && 23 >= o && (y.hour = o);
                    else {
                        if (!(o >= 0 && 23 >= o))
                            return null;
                        y.hour = o
                    }
                    m = !0;
                    break;
                case "G":
                case "H":
                    if (!(o >= 0 && 23 >= o))
                        return null;
                    y.hour = o,
                    m = !0;
                    break;
                case "i":
                    if (!(o >= 0 && 59 >= o))
                        return null;
                    y.min = o,
                    m = !0;
                    break;
                case "s":
                    if (!(o >= 0 && 59 >= o))
                        return null;
                    y.sec = o,
                    m = !0
                }
            if (h === !0) {
                var D = y.year || 0
                  , v = y.month ? y.month - 1 : 0
                  , S = y.day || 1;
                y.date = new Date(D,v,S,y.hour,y.min,y.sec,0)
            } else {
                if (m !== !0)
                    return null;
                y.date = new Date(0,0,0,y.hour,y.min,y.sec,0)
            }
            return y.date
        },
        guessDate: function(t, n) {
            if ("string" != typeof t)
                return t;
            var r, a, u, i, o, s, c = this, f = t.replace(c.separators, "\x00").split("\x00"), l = /^[djmn]/g, d = n.match(c.validParts), g = new Date, h = 0;
            if (!l.test(d[0]))
                return t;
            for (u = 0; u < f.length; u++) {
                if (h = 2,
                o = f[u],
                s = e.getInt(o.substr(0, 2)),
                isNaN(s))
                    return null;
                switch (u) {
                case 0:
                    "m" === d[0] || "n" === d[0] ? g.setMonth(s - 1) : g.setDate(s);
                    break;
                case 1:
                    "m" === d[0] || "n" === d[0] ? g.setDate(s) : g.setMonth(s - 1);
                    break;
                case 2:
                    if (a = g.getFullYear(),
                    r = o.length,
                    h = 4 > r ? r : 4,
                    a = e.getInt(4 > r ? a.toString().substr(0, 4 - r) + o : o.substr(0, 4)),
                    !a)
                        return null;
                    g.setFullYear(a);
                    break;
                case 3:
                    g.setHours(s);
                    break;
                case 4:
                    g.setMinutes(s);
                    break;
                case 5:
                    g.setSeconds(s)
                }
                i = o.substr(h),
                i.length > 0 && f.splice(u + 1, 0, i)
            }
            return g
        },
        parseFormat: function(t, n) {
            var r, a = this, u = a.dateSettings, i = /\\?(.?)/gi, o = function(t, e) {
                return r[t] ? r[t]() : e
            };
            return r = {
                d: function() {
                    return e.lpad(r.j(), 2)
                },
                D: function() {
                    return u.daysShort[r.w()]
                },
                j: function() {
                    return n.getDate()
                },
                l: function() {
                    return u.days[r.w()]
                },
                N: function() {
                    return r.w() || 7
                },
                w: function() {
                    return n.getDay()
                },
                z: function() {
                    var t = new Date(r.Y(),r.n() - 1,r.j())
                      , n = new Date(r.Y(),0,1);
                    return Math.round((t - n) / e.DAY)
                },
                W: function() {
                    var t = new Date(r.Y(),r.n() - 1,r.j() - r.N() + 3)
                      , n = new Date(t.getFullYear(),0,4);
                    return e.lpad(1 + Math.round((t - n) / e.DAY / 7), 2)
                },
                F: function() {
                    return u.months[n.getMonth()]
                },
                m: function() {
                    return e.lpad(r.n(), 2)
                },
                M: function() {
                    return u.monthsShort[n.getMonth()]
                },
                n: function() {
                    return n.getMonth() + 1
                },
                t: function() {
                    return new Date(r.Y(),r.n(),0).getDate()
                },
                L: function() {
                    var t = r.Y();
                    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 1 : 0
                },
                o: function() {
                    var t = r.n()
                      , e = r.W()
                      , n = r.Y();
                    return n + (12 === t && 9 > e ? 1 : 1 === t && e > 9 ? -1 : 0)
                },
                Y: function() {
                    return n.getFullYear()
                },
                y: function() {
                    return r.Y().toString().slice(-2)
                },
                a: function() {
                    return r.A().toLowerCase()
                },
                A: function() {
                    var t = r.G() < 12 ? 0 : 1;
                    return u.meridiem[t]
                },
                B: function() {
                    var t = n.getUTCHours() * e.HOUR
                      , r = 60 * n.getUTCMinutes()
                      , a = n.getUTCSeconds();
                    return e.lpad(Math.floor((t + r + a + e.HOUR) / 86.4) % 1e3, 3)
                },
                g: function() {
                    return r.G() % 12 || 12
                },
                G: function() {
                    return n.getHours()
                },
                h: function() {
                    return e.lpad(r.g(), 2)
                },
                H: function() {
                    return e.lpad(r.G(), 2)
                },
                i: function() {
                    return e.lpad(n.getMinutes(), 2)
                },
                s: function() {
                    return e.lpad(n.getSeconds(), 2)
                },
                u: function() {
                    return e.lpad(1e3 * n.getMilliseconds(), 6)
                },
                e: function() {
                    var t = /\((.*)\)/.exec(String(n))[1];
                    return t || "Coordinated Universal Time"
                },
                I: function() {
                    var t = new Date(r.Y(),0)
                      , e = Date.UTC(r.Y(), 0)
                      , n = new Date(r.Y(),6)
                      , a = Date.UTC(r.Y(), 6);
                    return t - e !== n - a ? 1 : 0
                },
                O: function() {
                    var t = n.getTimezoneOffset()
                      , r = Math.abs(t);
                    return (t > 0 ? "-" : "+") + e.lpad(100 * Math.floor(r / 60) + r % 60, 4)
                },
                P: function() {
                    var t = r.O();
                    return t.substr(0, 3) + ":" + t.substr(3, 2)
                },
                T: function() {
                    var t = (String(n).match(a.tzParts) || [""]).pop().replace(a.tzClip, "");
                    return t || "UTC"
                },
                Z: function() {
                    return 60 * -n.getTimezoneOffset()
                },
                c: function() {
                    return "Y-m-d\\TH:i:sP".replace(i, o)
                },
                r: function() {
                    return "D, d M Y H:i:s O".replace(i, o)
                },
                U: function() {
                    return n.getTime() / 1e3 || 0
                }
            },
            o(t, t)
        },
        formatDate: function(t, n) {
            var r, a, u, i, o, s = this, c = "", f = "\\";
            if ("string" == typeof t && (t = s.parseDate(t, n),
            !t))
                return null;
            if (t instanceof Date) {
                for (u = n.length,
                r = 0; u > r; r++)
                    o = n.charAt(r),
                    "S" !== o && o !== f && (r > 0 && n.charAt(r - 1) === f ? c += o : (i = s.parseFormat(o, t),
                    r !== u - 1 && s.intParts.test(o) && "S" === n.charAt(r + 1) && (a = e.getInt(i) || 0,
                    i += s.dateSettings.ordinal(a)),
                    c += i));
                return c
            }
            return ""
        }
    },
    t
});
var datetimepickerFactory = function($) {
    'use strict';
    var default_options = {
        i18n: {
            ar: {
                months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: {
                months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: {
                months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: {
                months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: {
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: {
                months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                dayOfWeekShort: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: {
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: {
                months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: {
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: {
                months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: {
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: {
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: {
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: {
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: {
                months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                dayOfWeekShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: {
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            km: {
                months: ["មករា​", "កុម្ភៈ", "មិនា​", "មេសា​", "ឧសភា​", "មិថុនា​", "កក្កដា​", "សីហា​", "កញ្ញា​", "តុលា​", "វិច្ឆិកា", "ធ្នូ​"],
                dayOfWeekShort: ["អាទិ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហ​​", "សុក្រ​", "សៅរ៍"],
                dayOfWeek: ["អាទិត្យ​", "ច័ន្ទ​", "អង្គារ​", "ពុធ​", "ព្រហស្បតិ៍​", "សុក្រ​", "សៅរ៍"]
            },
            kr: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: {
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: {
                months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: {
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
            },
            ja: {
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: {
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: {
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: {
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: {
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: {
                months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: {
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: {
                months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            'en-GB': {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: {
                months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: {
                months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
            },
            fi: {
                months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: {
                months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: {
                months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: {
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: {
                months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: {
                months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: {
                months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: {
                months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            'pt-BR': {
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: {
                months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: {
                months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            'sr-YU': {
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: {
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: {
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            'zh-TW': {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: {
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            ug: {
                months: ["1-ئاي", "2-ئاي", "3-ئاي", "4-ئاي", "5-ئاي", "6-ئاي", "7-ئاي", "8-ئاي", "9-ئاي", "10-ئاي", "11-ئاي", "12-ئاي"],
                dayOfWeek: ["يەكشەنبە", "دۈشەنبە", "سەيشەنبە", "چارشەنبە", "پەيشەنبە", "جۈمە", "شەنبە"]
            },
            he: {
                months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                dayOfWeekShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: {
                months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: {
                months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
                dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
            },
            rm: {
                months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
            },
            ka: {
                months: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
                dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            },
            kk: {
                months: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
                dayOfWeekShort: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сб"],
                dayOfWeek: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"]
            }
        },
        ownerDocument: document,
        contentWindow: window,
        value: '',
        rtl: false,
        format: 'Y/m/d H:i',
        formatTime: 'H:i',
        formatDate: 'Y/m/d',
        startDate: false,
        step: 60,
        monthChangeSpinner: true,
        closeOnDateSelect: false,
        closeOnTimeSelect: true,
        closeOnWithoutClick: true,
        closeOnInputClick: true,
        openOnFocus: true,
        timepicker: true,
        datepicker: true,
        weeks: false,
        defaultTime: false,
        defaultDate: false,
        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        minDateTime: false,
        maxDateTime: false,
        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        theme: '',
        touchMovedThreshold: 5,
        onSelectDate: function() {},
        onSelectTime: function() {},
        onChangeMonth: function() {},
        onGetWeekOfYear: function() {},
        onChangeYear: function() {},
        onChangeDateTime: function() {},
        onShow: function() {},
        onClose: function() {},
        onGenerate: function() {},
        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        next: 'xdsoft_next',
        prev: 'xdsoft_prev',
        dayOfWeekStart: 0,
        parentID: 'body',
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        prevButton: true,
        nextButton: true,
        defaultSelect: true,
        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,
        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: '',
        id: '',
        fixed: false,
        roundTime: 'round',
        className: '',
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,
        enterLikeTab: true,
        showApplyButton: false,
        insideParent: false,
    };
    var dateHelper = null
      , defaultDateHelper = null
      , globalLocaleDefault = 'en'
      , globalLocale = 'en';
    var dateFormatterOptionsDefault = {
        meridiem: ['AM', 'PM']
    };
    var initDateFormatter = function() {
        var locale = default_options.i18n[globalLocale]
          , opts = {
            days: locale.dayOfWeek,
            daysShort: locale.dayOfWeekShort,
            months: locale.months,
            monthsShort: $.map(locale.months, function(n) {
                return n.substring(0, 3)
            })
        };
        if (typeof DateFormatter === 'function') {
            dateHelper = defaultDateHelper = new DateFormatter({
                dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
            });
        }
    };
    var dateFormatters = {
        moment: {
            default_options: {
                format: 'YYYY/MM/DD HH:mm',
                formatDate: 'YYYY/MM/DD',
                formatTime: 'HH:mm',
            },
            formatter: {
                parseDate: function(date, format) {
                    if (isFormatStandard(format)) {
                        return defaultDateHelper.parseDate(date, format);
                    }
                    var d = moment(date, format);
                    return d.isValid() ? d.toDate() : false;
                },
                formatDate: function(date, format) {
                    if (isFormatStandard(format)) {
                        return defaultDateHelper.formatDate(date, format);
                    }
                    return moment(date).format(format);
                },
                formatMask: function(format) {
                    return format.replace(/Y{4}/g, '9999').replace(/Y{2}/g, '99').replace(/M{2}/g, '19').replace(/D{2}/g, '39').replace(/H{2}/g, '29').replace(/m{2}/g, '59').replace(/s{2}/g, '59');
                },
            }
        }
    }
    $.datetimepicker = {
        setLocale: function(locale) {
            var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
            if (globalLocale !== newLocale) {
                globalLocale = newLocale;
                initDateFormatter();
            }
        },
        setDateFormatter: function(dateFormatter) {
            if (typeof dateFormatter === 'string' && dateFormatters.hasOwnProperty(dateFormatter)) {
                var df = dateFormatters[dateFormatter];
                $.extend(default_options, df.default_options);
                dateHelper = df.formatter;
            } else {
                dateHelper = dateFormatter;
            }
        },
    };
    var standardFormats = {
        RFC_2822: 'D, d M Y H:i:s O',
        ATOM: 'Y-m-d\TH:i:sP',
        ISO_8601: 'Y-m-d\TH:i:sO',
        RFC_822: 'D, d M y H:i:s O',
        RFC_850: 'l, d-M-y H:i:s T',
        RFC_1036: 'D, d M y H:i:s O',
        RFC_1123: 'D, d M Y H:i:s O',
        RSS: 'D, d M Y H:i:s O',
        W3C: 'Y-m-d\TH:i:sP'
    }
    var isFormatStandard = function(format) {
        return Object.values(standardFormats).indexOf(format) === -1 ? false : true;
    }
    $.extend($.datetimepicker, standardFormats);
    initDateFormatter();
    if (!window.getComputedStyle) {
        window.getComputedStyle = function(el) {
            this.el = el;
            this.getPropertyValue = function(prop) {
                var re = /(-([a-z]))/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function(a, b, c) {
                        return c.toUpperCase();
                    });
                }
                return el.currentStyle[prop] || null;
            }
            ;
            return this;
        }
        ;
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj, start) {
            var i, j;
            for (i = (start || 0),
            j = this.length; i < j; i += 1) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        }
        ;
    }
    Date.prototype.countDaysInMonth = function() {
        return new Date(this.getFullYear(),this.getMonth() + 1,0).getDate();
    }
    ;
    $.fn.xdsoftScroller = function(options, percent) {
        return this.each(function() {
            var timeboxparent = $(this), pointerEventToXY = function(e) {
                var out = {
                    x: 0,
                    y: 0
                }, touch;
                if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                    touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    out.x = touch.clientX;
                    out.y = touch.clientY;
                } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
                    out.x = e.clientX;
                    out.y = e.clientY;
                }
                return out;
            }, getWheelDelta = function(e) {
                var deltaY = 0;
                if ('detail'in e) {
                    deltaY = e.detail;
                }
                if ('wheelDelta'in e) {
                    deltaY = -e.wheelDelta / 120;
                }
                if ('wheelDeltaY'in e) {
                    deltaY = -e.wheelDeltaY / 120;
                }
                if ('axis'in e && e.axis === e.HORIZONTAL_AXIS) {
                    deltaY = 0;
                }
                deltaY *= 10;
                if ('deltaY'in e) {
                    deltaY = -e.deltaY;
                }
                if (deltaY && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        deltaY *= 40;
                    } else {
                        deltaY *= 800;
                    }
                }
                return deltaY;
            }, timebox, timeboxTop = 0, parentHeight, height, scrollbar, scroller, maximumOffset = 100, start = false, startY = 0, startTop = 0, h1 = 0, touchStart = false, startTopScroll = 0, calcOffset = function() {};
            if (percent === 'hide') {
                timeboxparent.find('.xdsoft_scrollbar').hide();
                return;
            }
            if (!$(this).hasClass('xdsoft_scroller_box')) {
                timebox = timeboxparent.children().eq(0);
                timeboxTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
                parentHeight = timeboxparent[0].clientHeight;
                height = timebox[0].offsetHeight;
                scrollbar = $('<div class="xdsoft_scrollbar"></div>');
                scroller = $('<div class="xdsoft_scroller"></div>');
                scrollbar.append(scroller);
                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                calcOffset = function calcOffset(event) {
                    var offset = pointerEventToXY(event).y - startY + startTopScroll;
                    if (offset < 0) {
                        offset = 0;
                    }
                    if (offset + scroller[0].offsetHeight > h1) {
                        offset = h1 - scroller[0].offsetHeight;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
                }
                ;
                scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function(event) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
                    }
                    startY = pointerEventToXY(event).y;
                    startTopScroll = parseInt(scroller.css('marginTop'), 10);
                    h1 = scrollbar[0].offsetHeight;
                    if (event.type === 'mousedown' || event.type === 'touchstart') {
                        if (options.ownerDocument) {
                            $(options.ownerDocument.body).addClass('xdsoft_noselect');
                        }
                        $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
                            $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
                        });
                        $(options.ownerDocument.body).on('mousemove.xdsoft_scroller', calcOffset);
                    } else {
                        touchStart = true;
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }).on('touchmove', function(event) {
                    if (touchStart) {
                        event.preventDefault();
                        calcOffset(event);
                    }
                }).on('touchend touchcancel', function() {
                    touchStart = false;
                    startTopScroll = 0;
                });
                timeboxparent.on('scroll_element.xdsoft_scroller', function(event, percentage) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
                    }
                    percentage = percentage > 1 ? 1 : (percentage < 0 || isNaN(percentage)) ? 0 : percentage;
                    timeboxTop = parseFloat(Math.abs((timebox[0].offsetHeight - parentHeight) * percentage).toFixed(4));
                    scroller.css('marginTop', maximumOffset * percentage);
                    timebox.css('marginTop', -timeboxTop);
                }).on('resize_scroll.xdsoft_scroller', function(event, percentage, noTriggerScroll) {
                    var percent, sh;
                    parentHeight = timeboxparent[0].clientHeight;
                    height = timebox[0].offsetHeight;
                    percent = parentHeight / height;
                    sh = percent * scrollbar[0].offsetHeight;
                    if (percent > 1) {
                        scroller.hide();
                    } else {
                        scroller.show();
                        scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
                        maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
                        if (noTriggerScroll !== true) {
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || timeboxTop / (height - parentHeight)]);
                        }
                    }
                });
                timeboxparent.on('mousewheel', function(event) {
                    var deltaY = getWheelDelta(event.originalEvent);
                    var top = Math.max(0, timeboxTop - deltaY);
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
                    event.stopPropagation();
                    return false;
                });
                timeboxparent.on('touchstart', function(event) {
                    start = pointerEventToXY(event);
                    startTop = timeboxTop;
                });
                timeboxparent.on('touchmove', function(event) {
                    if (start) {
                        event.preventDefault();
                        var coord = pointerEventToXY(event);
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
                    }
                });
                timeboxparent.on('touchend touchcancel', function() {
                    start = false;
                    startTop = 0;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
        });
    }
    ;
    $.fn.datetimepicker = function(opt, opt2) {
        var result = this, KEY0 = 48, KEY9 = 57, _KEY0 = 96, _KEY9 = 105, CTRLKEY = 17, CMDKEY = 91, DEL = 46, ENTER = 13, ESC = 27, BACKSPACE = 8, ARROWLEFT = 37, ARROWUP = 38, ARROWRIGHT = 39, ARROWDOWN = 40, TAB = 9, F5 = 116, AKEY = 65, CKEY = 67, VKEY = 86, ZKEY = 90, YKEY = 89, ctrlDown = false, cmdDown = false, options = ($.isPlainObject(opt) || !opt) ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options), lazyInitTimer = 0, createDateTimePicker, destroyDateTimePicker, lazyInit = function(input) {
            input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
                if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
                    return;
                }
                clearTimeout(lazyInitTimer);
                lazyInitTimer = setTimeout(function() {
                    if (!input.data('xdsoft_datetimepicker')) {
                        createDateTimePicker(input);
                    }
                    input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback).trigger('open.xdsoft');
                }, 100);
            });
        };
        createDateTimePicker = function(input) {
            var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'), xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'), datepicker = $('<div class="xdsoft_datepicker active"></div>'), month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'), calendar = $('<div class="xdsoft_calendar"></div>'), timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'), timeboxparent = timepicker.find('.xdsoft_time_box').eq(0), timebox = $('<div class="xdsoft_time_variant"></div>'), applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'), monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'), yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'), triggerAfterOpen = false, XDSoft_datetime, xchangeTimer, timerclick, current_time_index, setPos, timer = 0, _xdsoft_datetime, forEachAncestorOf;
            if (options.id) {
                datetimepicker.attr('id', options.id);
            }
            if (options.style) {
                datetimepicker.attr('style', options.style);
            }
            if (options.weeks) {
                datetimepicker.addClass('xdsoft_showweeks');
            }
            if (options.rtl) {
                datetimepicker.addClass('xdsoft_rtl');
            }
            datetimepicker.addClass('xdsoft_' + options.theme);
            datetimepicker.addClass(options.className);
            month_picker.find('.xdsoft_month span').after(monthselect);
            month_picker.find('.xdsoft_year span').after(yearselect);
            month_picker.find('.xdsoft_month,.xdsoft_year').on('touchstart mousedown.xdsoft', function(event) {
                var select = $(this).find('.xdsoft_select').eq(0), val = 0, top = 0, visible = select.is(':visible'), items, i;
                month_picker.find('.xdsoft_select').hide();
                if (_xdsoft_datetime.currentTime) {
                    val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
                }
                select[visible ? 'hide' : 'show']();
                for (items = select.find('div.xdsoft_option'),
                i = 0; i < items.length; i += 1) {
                    if (items.eq(i).data('value') === val) {
                        break;
                    } else {
                        top += items[0].offsetHeight;
                    }
                }
                select.xdsoftScroller(options, top / (select.children()[0].offsetHeight - (select[0].clientHeight)));
                event.stopPropagation();
                return false;
            });
            var handleTouchMoved = function(event) {
                var evt = event.originalEvent;
                var touchPosition = evt.touches ? evt.touches[0] : evt;
                this.touchStartPosition = this.touchStartPosition || touchPosition;
                var xMovement = Math.abs(this.touchStartPosition.clientX - touchPosition.clientX);
                var yMovement = Math.abs(this.touchStartPosition.clientY - touchPosition.clientY);
                var distance = Math.sqrt(xMovement * xMovement + yMovement * yMovement);
                if (distance > options.touchMovedThreshold) {
                    this.touchMoved = true;
                }
            }
            month_picker.find('.xdsoft_select').xdsoftScroller(options).on('touchstart mousedown.xdsoft', function(event) {
                var evt = event.originalEvent;
                this.touchMoved = false;
                this.touchStartPosition = evt.touches ? evt.touches[0] : evt;
                event.stopPropagation();
                event.preventDefault();
            }).on('touchmove', '.xdsoft_option', handleTouchMoved).on('touchend mousedown.xdsoft', '.xdsoft_option', function() {
                if (!this.touchMoved) {
                    if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    }
                    var year = _xdsoft_datetime.currentTime.getFullYear();
                    if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
                        _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
                    }
                    $(this).parent().parent().hide();
                    datetimepicker.trigger('xchange.xdsoft');
                    if (options.onChangeMonth && typeof options.onChangeMonth === 'function') {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    if (year !== _xdsoft_datetime.currentTime.getFullYear() && typeof options.onChangeYear === 'function') {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                }
            });
            datetimepicker.getValue = function() {
                return _xdsoft_datetime.getCurrentTime();
            }
            ;
            datetimepicker.setOptions = function(_options) {
                var highlightedDates = {};
                options = $.extend(true, {}, options, _options);
                if (_options.allowTimes && Array.isArray(_options.allowTimes) && _options.allowTimes.length) {
                    options.allowTimes = $.extend(true, [], _options.allowTimes);
                }
                if (_options.weekends && Array.isArray(_options.weekends) && _options.weekends.length) {
                    options.weekends = $.extend(true, [], _options.weekends);
                }
                if (_options.allowDates && Array.isArray(_options.allowDates) && _options.allowDates.length) {
                    options.allowDates = $.extend(true, [], _options.allowDates);
                }
                if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
                    options.allowDateRe = new RegExp(_options.allowDateRe);
                }
                if (_options.highlightedDates && Array.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
                    $.each(_options.highlightedDates, function(index, value) {
                        var splitData = $.map(value.split(','), $.trim), exDesc, hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate),splitData[1],splitData[2]), keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
                        if (highlightedDates[keyDate] !== undefined) {
                            exDesc = highlightedDates[keyDate].desc;
                            if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                            }
                        } else {
                            highlightedDates[keyDate] = hDate;
                        }
                    });
                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }
                if (_options.highlightedPeriods && Array.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
                    highlightedDates = $.extend(true, [], options.highlightedDates);
                    $.each(_options.highlightedPeriods, function(index, value) {
                        var dateTest, dateEnd, desc, hDate, keyDate, exDesc, style;
                        if (Array.isArray(value)) {
                            dateTest = value[0];
                            dateEnd = value[1];
                            desc = value[2];
                            style = value[3];
                        } else {
                            var splitData = $.map(value.split(','), $.trim);
                            dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
                            dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
                            desc = splitData[2];
                            style = splitData[3];
                        }
                        while (dateTest <= dateEnd) {
                            hDate = new HighlightedDate(dateTest,desc,style);
                            keyDate = dateHelper.formatDate(dateTest, options.formatDate);
                            dateTest.setDate(dateTest.getDate() + 1);
                            if (highlightedDates[keyDate] !== undefined) {
                                exDesc = highlightedDates[keyDate].desc;
                                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                    highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                                }
                            } else {
                                highlightedDates[keyDate] = hDate;
                            }
                        }
                    });
                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }
                if (_options.disabledDates && Array.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }
                if (_options.disabledWeekDays && Array.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
                    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
                }
                if ((options.open || options.opened) && (!options.inline)) {
                    input.trigger('open.xdsoft');
                }
                if (options.inline) {
                    triggerAfterOpen = true;
                    datetimepicker.addClass('xdsoft_inline');
                    input.after(datetimepicker).hide();
                }
                if (options.inverseButton) {
                    options.next = 'xdsoft_prev';
                    options.prev = 'xdsoft_next';
                }
                if (options.datepicker) {
                    datepicker.addClass('active');
                } else {
                    datepicker.removeClass('active');
                }
                if (options.timepicker) {
                    timepicker.addClass('active');
                } else {
                    timepicker.removeClass('active');
                }
                if (options.value) {
                    _xdsoft_datetime.setCurrentTime(options.value);
                    if (input && input.val) {
                        input.val(_xdsoft_datetime.str);
                    }
                }
                if (isNaN(options.dayOfWeekStart)) {
                    options.dayOfWeekStart = 0;
                } else {
                    options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
                }
                if (!options.timepickerScrollbar) {
                    timeboxparent.xdsoftScroller(options, 'hide');
                }
                if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
                    options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
                }
                if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
                    options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
                }
                if (options.minDateTime && /^\+(.*)$/.test(options.minDateTime)) {
                    options.minDateTime = _xdsoft_datetime.strToDateTime(options.minDateTime).dateFormat(options.formatDate);
                }
                if (options.maxDateTime && /^\+(.*)$/.test(options.maxDateTime)) {
                    options.maxDateTime = _xdsoft_datetime.strToDateTime(options.maxDateTime).dateFormat(options.formatDate);
                }
                applyButton.toggle(options.showApplyButton);
                month_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');
                month_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');
                month_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');
                setMask(options);
                if (options.validateOnBlur) {
                    input.off('blur.xdsoft').on('blur.xdsoft', function() {
                        if (options.allowBlank && (!$(this).val().trim().length || (typeof options.mask === "string" && $(this).val().trim() === options.mask.replace(/[0-9]/g, '_')))) {
                            $(this).val(null);
                            datetimepicker.data('xdsoft_datetime').empty();
                        } else {
                            var d = dateHelper.parseDate($(this).val(), options.format);
                            if (d) {
                                $(this).val(dateHelper.formatDate(d, options.format));
                            } else {
                                var splittedHours = +([$(this).val()[0], $(this).val()[1]].join(''))
                                  , splittedMinutes = +([$(this).val()[2], $(this).val()[3]].join(''));
                                if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                                    $(this).val([splittedHours, splittedMinutes].map(function(item) {
                                        return item > 9 ? item : '0' + item;
                                    }).join(':'));
                                } else {
                                    $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                                }
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                        }
                        datetimepicker.trigger('changedatetime.xdsoft');
                        datetimepicker.trigger('close.xdsoft');
                    });
                }
                options.dayOfWeekStartPrev = (options.dayOfWeekStart === 0) ? 6 : options.dayOfWeekStart - 1;
                datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
            }
            ;
            datetimepicker.data('options', options).on('touchstart mousedown.xdsoft', function(event) {
                event.stopPropagation();
                event.preventDefault();
                yearselect.hide();
                monthselect.hide();
                return false;
            });
            timeboxparent.append(timebox);
            timeboxparent.xdsoftScroller(options);
            datetimepicker.on('afterOpen.xdsoft', function() {
                timeboxparent.xdsoftScroller(options);
            });
            datetimepicker.append(datepicker).append(timepicker);
            if (options.withoutCopyright !== true) {
                datetimepicker.append(xdsoft_copyright);
            }
            datepicker.append(month_picker).append(calendar).append(applyButton);
            if (options.insideParent) {
                $(input).parent().append(datetimepicker);
            } else {
                $(options.parentID).append(datetimepicker);
            }
            XDSoft_datetime = function() {
                var _this = this;
                _this.now = function(norecursion) {
                    var d = new Date(), date, time;
                    if (!norecursion && options.defaultDate) {
                        date = _this.strToDateTime(options.defaultDate);
                        d.setFullYear(date.getFullYear());
                        d.setMonth(date.getMonth());
                        d.setDate(date.getDate());
                    }
                    d.setFullYear(d.getFullYear());
                    if (!norecursion && options.defaultTime) {
                        time = _this.strtotime(options.defaultTime);
                        d.setHours(time.getHours());
                        d.setMinutes(time.getMinutes());
                        d.setSeconds(time.getSeconds());
                        d.setMilliseconds(time.getMilliseconds());
                    }
                    return d;
                }
                ;
                _this.isValidDate = function(d) {
                    if (Object.prototype.toString.call(d) !== "[object Date]") {
                        return false;
                    }
                    return !isNaN(d.getTime());
                }
                ;
                _this.setCurrentTime = function(dTime, requireValidDate) {
                    if (typeof dTime === 'string') {
                        _this.currentTime = _this.strToDateTime(dTime);
                    } else if (_this.isValidDate(dTime)) {
                        _this.currentTime = dTime;
                    } else if (!dTime && !requireValidDate && options.allowBlank && !options.inline) {
                        _this.currentTime = null;
                    } else {
                        _this.currentTime = _this.now();
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                }
                ;
                _this.empty = function() {
                    _this.currentTime = null;
                }
                ;
                _this.getCurrentTime = function() {
                    return _this.currentTime;
                }
                ;
                _this.nextMonth = function() {
                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }
                    var month = _this.currentTime.getMonth() + 1, year;
                    if (month === 12) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
                        month = 0;
                    }
                    year = _this.currentTime.getFullYear();
                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(),month + 1,0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && typeof options.onChangeMonth === 'function') {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    if (year !== _this.currentTime.getFullYear() && typeof options.onChangeYear === 'function') {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                }
                ;
                _this.prevMonth = function() {
                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }
                    var month = _this.currentTime.getMonth() - 1;
                    if (month === -1) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
                        month = 11;
                    }
                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(),month + 1,0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && typeof options.onChangeMonth === 'function') {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                }
                ;
                _this.getWeekOfYear = function(datetime) {
                    if (options.onGetWeekOfYear && typeof options.onGetWeekOfYear === 'function') {
                        var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
                        if (typeof week !== 'undefined') {
                            return week;
                        }
                    }
                    var onejan = new Date(datetime.getFullYear(),0,1);
                    if (onejan.getDay() !== 4) {
                        onejan.setMonth(0, 1 + ((4 - onejan.getDay() + 7) % 7));
                    }
                    return Math.ceil((((datetime - onejan) / 86400000) + onejan.getDay() + 1) / 7);
                }
                ;
                _this.strToDateTime = function(sDateTime) {
                    var tmpDate = [], timeOffset, currentTime;
                    if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
                        return sDateTime;
                    }
                    tmpDate = /^([+-]{1})(.*)$/.exec(sDateTime);
                    if (tmpDate) {
                        tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
                    }
                    if (tmpDate && tmpDate[2]) {
                        timeOffset = tmpDate[2].getTime() - (tmpDate[2].getTimezoneOffset()) * 60000;
                        currentTime = new Date((_this.now(true)).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
                    } else {
                        currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
                    }
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now();
                    }
                    return currentTime;
                }
                ;
                _this.strToDate = function(sDate) {
                    if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
                        return sDate;
                    }
                    var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                }
                ;
                _this.strtotime = function(sTime) {
                    if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
                        return sTime;
                    }
                    var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                }
                ;
                _this.str = function() {
                    var format = options.format;
                    if (options.yearOffset) {
                        format = format.replace('Y', _this.currentTime.getFullYear() + options.yearOffset);
                        format = format.replace('y', String(_this.currentTime.getFullYear() + options.yearOffset).substring(2, 4));
                    }
                    return dateHelper.formatDate(_this.currentTime, format);
                }
                ;
                _this.currentTime = this.now();
            }
            ;
            _xdsoft_datetime = new XDSoft_datetime();
            applyButton.on('touchend click', function(e) {
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_today_button').on('touchend mousedown.xdsoft', function() {
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(0, true);
                datetimepicker.trigger('afterOpen.xdsoft');
            }).on('dblclick.xdsoft', function() {
                var currentDate = _xdsoft_datetime.getCurrentTime(), minDate, maxDate;
                currentDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
                minDate = _xdsoft_datetime.strToDate(options.minDate);
                minDate = new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());
                if (currentDate < minDate) {
                    return;
                }
                maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                maxDate = new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate());
                if (currentDate > maxDate) {
                    return;
                }
                input.val(_xdsoft_datetime.str());
                input.trigger('change');
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function() {
                var $this = $(this)
                  , timer = 0
                  , stop = false;
                (function arguments_callee1(v) {
                    if ($this.hasClass(options.next)) {
                        _xdsoft_datetime.nextMonth();
                    } else if ($this.hasClass(options.prev)) {
                        _xdsoft_datetime.prevMonth();
                    }
                    if (options.monthChangeSpinner) {
                        if (!stop) {
                            timer = setTimeout(arguments_callee1, v || 100);
                        }
                    }
                }(500));
                $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee2() {
                    clearTimeout(timer);
                    stop = true;
                    $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee2);
                });
            });
            timepicker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function() {
                var $this = $(this)
                  , timer = 0
                  , stop = false
                  , period = 110;
                (function arguments_callee4(v) {
                    var pheight = timeboxparent[0].clientHeight
                      , height = timebox[0].offsetHeight
                      , top = Math.abs(parseInt(timebox.css('marginTop'), 10));
                    if (top < options.timeHeightInTimePicker) {
                        top = options.timeHeightInTimePicker;
                    } else if ($this.hasClass(options.next) && (height - pheight) < top) {
                        timebox.css('marginTop', '-' + height + 'px');
                    }
                    if ($this.hasClass(options.next) && (height - pheight) > top) {
                        timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
                    } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
                        timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
                    period = (period > 10) ? 10 : period - 10;
                    if (!stop) {
                        timer = setTimeout(arguments_callee4, v || period);
                    }
                }(500));
                $([options.ownerDocument.body, options.contentWindow]).on('touchend mouseup.xdsoft', function arguments_callee5() {
                    clearTimeout(timer);
                    stop = true;
                    $([options.ownerDocument.body, options.contentWindow]).off('touchend mouseup.xdsoft', arguments_callee5);
                });
            });
            xchangeTimer = 0;
            datetimepicker.on('xchange.xdsoft', function(event) {
                clearTimeout(xchangeTimer);
                xchangeTimer = setTimeout(function() {
                    if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null || isNaN(_xdsoft_datetime.currentTime.getTime())) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    }
                    var table = '', start = new Date(_xdsoft_datetime.currentTime.getFullYear(),_xdsoft_datetime.currentTime.getMonth(),1,12,0,0), i = 0, j, today = _xdsoft_datetime.now(), maxDate = false, minDate = false, minDateTime = false, maxDateTime = false, hDate, day, d, y, m, w, classes = [], customDateSettings, newRow = true, time = '', h, line_time, description;
                    while (start.getDay() !== options.dayOfWeekStart) {
                        start.setDate(start.getDate() - 1);
                    }
                    table += '<table><thead><tr>';
                    if (options.weeks) {
                        table += '<th></th>';
                    }
                    for (j = 0; j < 7; j += 1) {
                        table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
                    }
                    table += '</tr></thead>';
                    table += '<tbody>';
                    if (options.maxDate !== false) {
                        maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                        maxDate = new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate(),23,59,59,999);
                    }
                    if (options.minDate !== false) {
                        minDate = _xdsoft_datetime.strToDate(options.minDate);
                        minDate = new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());
                    }
                    if (options.minDateTime !== false) {
                        minDateTime = _xdsoft_datetime.strToDate(options.minDateTime);
                        minDateTime = new Date(minDateTime.getFullYear(),minDateTime.getMonth(),minDateTime.getDate(),minDateTime.getHours(),minDateTime.getMinutes(),minDateTime.getSeconds());
                    }
                    if (options.maxDateTime !== false) {
                        maxDateTime = _xdsoft_datetime.strToDate(options.maxDateTime);
                        maxDateTime = new Date(maxDateTime.getFullYear(),maxDateTime.getMonth(),maxDateTime.getDate(),maxDateTime.getHours(),maxDateTime.getMinutes(),maxDateTime.getSeconds());
                    }
                    var maxDateTimeDay;
                    if (maxDateTime !== false) {
                        maxDateTimeDay = ((maxDateTime.getFullYear() * 12) + maxDateTime.getMonth()) * 31 + maxDateTime.getDate();
                    }
                    while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
                        classes = [];
                        i += 1;
                        day = start.getDay();
                        d = start.getDate();
                        y = start.getFullYear();
                        m = start.getMonth();
                        w = _xdsoft_datetime.getWeekOfYear(start);
                        description = '';
                        classes.push('xdsoft_date');
                        if (options.beforeShowDay && typeof options.beforeShowDay.call === 'function') {
                            customDateSettings = options.beforeShowDay.call(datetimepicker, start);
                        } else {
                            customDateSettings = null;
                        }
                        if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
                            if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                                classes.push('xdsoft_disabled');
                            }
                        }
                        if (options.allowDates && options.allowDates.length > 0) {
                            if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                                classes.push('xdsoft_disabled');
                            }
                        }
                        var currentDay = ((start.getFullYear() * 12) + start.getMonth()) * 31 + start.getDate();
                        if ((maxDate !== false && start > maxDate) || (minDateTime !== false && start < minDateTime) || (minDate !== false && start < minDate) || (maxDateTime !== false && currentDay > maxDateTimeDay) || (customDateSettings && customDateSettings[0] === false)) {
                            classes.push('xdsoft_disabled');
                        }
                        if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_disabled');
                        }
                        if (options.disabledWeekDays.indexOf(day) !== -1) {
                            classes.push('xdsoft_disabled');
                        }
                        if (input.is('[disabled]')) {
                            classes.push('xdsoft_disabled');
                        }
                        if (customDateSettings && customDateSettings[1] !== "") {
                            classes.push(customDateSettings[1]);
                        }
                        if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                            classes.push('xdsoft_other_month');
                        }
                        if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_current');
                        }
                        if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_today');
                        }
                        if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_weekend');
                        }
                        if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
                            hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
                            classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
                            description = hDate.desc === undefined ? '' : hDate.desc;
                        }
                        if (options.beforeShowDay && typeof options.beforeShowDay === 'function') {
                            classes.push(options.beforeShowDay(start));
                        }
                        if (newRow) {
                            table += '<tr>';
                            newRow = false;
                            if (options.weeks) {
                                table += '<th>' + w + '</th>';
                            }
                        }
                        table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';
                        if (start.getDay() === options.dayOfWeekStartPrev) {
                            table += '</tr>';
                            newRow = true;
                        }
                        start.setDate(d + 1);
                    }
                    table += '</tbody></table>';
                    calendar.html(table);
                    month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
                    month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear() + options.yearOffset);
                    time = '';
                    h = '';
                    m = '';
                    var minTimeMinutesOfDay = 0;
                    if (options.minTime !== false) {
                        var t = _xdsoft_datetime.strtotime(options.minTime);
                        minTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
                    }
                    var maxTimeMinutesOfDay = 24 * 60;
                    if (options.maxTime !== false) {
                        var t = _xdsoft_datetime.strtotime(options.maxTime);
                        maxTimeMinutesOfDay = 60 * t.getHours() + t.getMinutes();
                    }
                    if (options.minDateTime !== false) {
                        var t = _xdsoft_datetime.strToDateTime(options.minDateTime);
                        var currentDayIsMinDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
                        if (currentDayIsMinDateTimeDay) {
                            var m = 60 * t.getHours() + t.getMinutes();
                            if (m > minTimeMinutesOfDay)
                                minTimeMinutesOfDay = m;
                        }
                    }
                    if (options.maxDateTime !== false) {
                        var t = _xdsoft_datetime.strToDateTime(options.maxDateTime);
                        var currentDayIsMaxDateTimeDay = dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(t, options.formatDate);
                        if (currentDayIsMaxDateTimeDay) {
                            var m = 60 * t.getHours() + t.getMinutes();
                            if (m < maxTimeMinutesOfDay)
                                maxTimeMinutesOfDay = m;
                        }
                    }
                    line_time = function line_time(h, m) {
                        var now = _xdsoft_datetime.now(), current_time, isALlowTimesInit = options.allowTimes && Array.isArray(options.allowTimes) && options.allowTimes.length;
                        now.setHours(h);
                        h = parseInt(now.getHours(), 10);
                        now.setMinutes(m);
                        m = parseInt(now.getMinutes(), 10);
                        classes = [];
                        var currentMinutesOfDay = 60 * h + m;
                        if (input.is('[disabled]') || (currentMinutesOfDay >= maxTimeMinutesOfDay) || (currentMinutesOfDay < minTimeMinutesOfDay)) {
                            classes.push('xdsoft_disabled');
                        }
                        current_time = new Date(_xdsoft_datetime.currentTime);
                        current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));
                        if (!isALlowTimesInit) {
                            current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                        }
                        if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && ((!isALlowTimesInit && options.step > 59) || current_time.getMinutes() === parseInt(m, 10))) {
                            if (options.defaultSelect || datetimepicker.data('changed')) {
                                classes.push('xdsoft_current');
                            } else if (options.initTime) {
                                classes.push('xdsoft_init_time');
                            }
                        }
                        if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                            classes.push('xdsoft_today');
                        }
                        time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
                    }
                    ;
                    if (!options.allowTimes || !Array.isArray(options.allowTimes) || !options.allowTimes.length) {
                        for (i = 0,
                        j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                            for (j = 0; j < 60; j += options.step) {
                                var currentMinutesOfDay = i * 60 + j;
                                if (currentMinutesOfDay < minTimeMinutesOfDay)
                                    continue;
                                if (currentMinutesOfDay >= maxTimeMinutesOfDay)
                                    continue;
                                h = (i < 10 ? '0' : '') + i;
                                m = (j < 10 ? '0' : '') + j;
                                line_time(h, m);
                            }
                        }
                    } else {
                        for (i = 0; i < options.allowTimes.length; i += 1) {
                            h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                            m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                            line_time(h, m);
                        }
                    }
                    timebox.html(time);
                    opt = '';
                    for (i = parseInt(options.yearStart, 10); i <= parseInt(options.yearEnd, 10); i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + (i + options.yearOffset) + '</div>';
                    }
                    yearselect.children().eq(0).html(opt);
                    for (i = parseInt(options.monthStart, 10),
                    opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
                    }
                    monthselect.children().eq(0).html(opt);
                    $(datetimepicker).trigger('generate.xdsoft');
                }, 10);
                event.stopPropagation();
            }).on('afterOpen.xdsoft', function() {
                if (options.timepicker) {
                    var classType, pheight, height, top;
                    if (timebox.find('.xdsoft_current').length) {
                        classType = '.xdsoft_current';
                    } else if (timebox.find('.xdsoft_init_time').length) {
                        classType = '.xdsoft_init_time';
                    }
                    if (classType) {
                        pheight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
                        if ((height - pheight) < top) {
                            top = height - pheight;
                        }
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
                    } else {
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
                    }
                }
            });
            timerclick = 0;
            calendar.on('touchend click.xdsoft', 'td', function(xdevent) {
                xdevent.stopPropagation();
                timerclick += 1;
                var $this = $(this)
                  , currentTime = _xdsoft_datetime.currentTime;
                if (currentTime === undefined || currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    currentTime = _xdsoft_datetime.currentTime;
                }
                if ($this.hasClass('xdsoft_disabled')) {
                    return false;
                }
                currentTime.setDate(1);
                currentTime.setFullYear($this.data('year'));
                currentTime.setMonth($this.data('month'));
                currentTime.setDate($this.data('date'));
                datetimepicker.trigger('select.xdsoft', [currentTime]);
                input.val(_xdsoft_datetime.str());
                if (options.onSelectDate && typeof options.onSelectDate === 'function') {
                    options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                }
                datetimepicker.data('changed', true);
                datetimepicker.trigger('xchange.xdsoft');
                datetimepicker.trigger('changedatetime.xdsoft');
                if ((timerclick > 1 || (options.closeOnDateSelect === true || (options.closeOnDateSelect === false && !options.timepicker))) && !options.inline) {
                    datetimepicker.trigger('close.xdsoft');
                }
                setTimeout(function() {
                    timerclick = 0;
                }, 200);
            });
            timebox.on('touchstart', 'div', function(xdevent) {
                this.touchMoved = false;
            }).on('touchmove', 'div', handleTouchMoved).on('touchend click.xdsoft', 'div', function(xdevent) {
                if (!this.touchMoved) {
                    xdevent.stopPropagation();
                    var $this = $(this)
                      , currentTime = _xdsoft_datetime.currentTime;
                    if (currentTime === undefined || currentTime === null) {
                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                        currentTime = _xdsoft_datetime.currentTime;
                    }
                    if ($this.hasClass('xdsoft_disabled')) {
                        return false;
                    }
                    currentTime.setHours($this.data('hour'));
                    currentTime.setMinutes($this.data('minute'));
                    datetimepicker.trigger('select.xdsoft', [currentTime]);
                    datetimepicker.data('input').val(_xdsoft_datetime.str());
                    if (options.onSelectTime && typeof options.onSelectTime === 'function') {
                        options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                    }
                    datetimepicker.data('changed', true);
                    datetimepicker.trigger('xchange.xdsoft');
                    datetimepicker.trigger('changedatetime.xdsoft');
                    if (options.inline !== true && options.closeOnTimeSelect === true) {
                        datetimepicker.trigger('close.xdsoft');
                    }
                }
            });
            datepicker.on('mousewheel.xdsoft', function(event) {
                if (!options.scrollMonth) {
                    return true;
                }
                if (event.deltaY < 0) {
                    _xdsoft_datetime.nextMonth();
                } else {
                    _xdsoft_datetime.prevMonth();
                }
                return false;
            });
            input.on('mousewheel.xdsoft', function(event) {
                if (!options.scrollInput) {
                    return true;
                }
                if (!options.datepicker && options.timepicker) {
                    current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
                    if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
                        current_time_index += event.deltaY;
                    }
                    if (timebox.children().eq(current_time_index).length) {
                        timebox.children().eq(current_time_index).trigger('mousedown');
                    }
                    return false;
                }
                if (options.datepicker && !options.timepicker) {
                    datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
                    if (input.val) {
                        input.val(_xdsoft_datetime.str());
                    }
                    datetimepicker.trigger('changedatetime.xdsoft');
                    return false;
                }
            });
            datetimepicker.on('changedatetime.xdsoft', function(event) {
                if (options.onChangeDateTime && typeof options.onChangeDateTime === 'function') {
                    var $input = datetimepicker.data('input');
                    options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
                    delete options.value;
                    $input.trigger('change');
                }
            }).on('generate.xdsoft', function() {
                if (options.onGenerate && typeof options.onGenerate === 'function') {
                    options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }
                if (triggerAfterOpen) {
                    datetimepicker.trigger('afterOpen.xdsoft');
                    triggerAfterOpen = false;
                }
            }).on('click.xdsoft', function(xdevent) {
                xdevent.stopPropagation();
            });
            current_time_index = 0;
            forEachAncestorOf = function(node, callback) {
                do {
                    node = node.parentNode;
                    if (!node || callback(node) === false) {
                        break;
                    }
                } while (node.nodeName !== 'HTML');
            }
            ;
            setPos = function() {
                var dateInputOffset, dateInputElem, verticalPosition, left, position, datetimepickerElem, dateInputHasFixedAncestor, $dateInput, windowWidth, verticalAnchorEdge, datetimepickerCss, windowHeight, windowScrollTop;
                $dateInput = datetimepicker.data('input');
                dateInputOffset = $dateInput.offset();
                dateInputElem = $dateInput[0];
                verticalAnchorEdge = 'top';
                verticalPosition = (dateInputOffset.top + dateInputElem.offsetHeight) - 1;
                left = dateInputOffset.left;
                position = "absolute";
                windowWidth = $(options.contentWindow).width();
                windowHeight = $(options.contentWindow).height();
                windowScrollTop = $(options.contentWindow).scrollTop();
                if ((options.ownerDocument.documentElement.clientWidth - dateInputOffset.left) < datepicker.parent().outerWidth(true)) {
                    var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
                    left = left - diff;
                }
                if ($dateInput.parent().css('direction') === 'rtl') {
                    left -= (datetimepicker.outerWidth() - $dateInput.outerWidth());
                }
                if (options.fixed) {
                    verticalPosition -= windowScrollTop;
                    left -= $(options.contentWindow).scrollLeft();
                    position = "fixed";
                } else {
                    dateInputHasFixedAncestor = false;
                    forEachAncestorOf(dateInputElem, function(ancestorNode) {
                        if (ancestorNode === null) {
                            return false;
                        }
                        if (options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
                            dateInputHasFixedAncestor = true;
                            return false;
                        }
                    });
                    if (dateInputHasFixedAncestor && !options.insideParent) {
                        position = 'fixed';
                        if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
                            verticalAnchorEdge = 'bottom';
                            verticalPosition = (windowHeight + windowScrollTop) - dateInputOffset.top;
                        } else {
                            verticalPosition -= windowScrollTop;
                        }
                    } else {
                        if (verticalPosition + datetimepicker[0].offsetHeight > windowHeight + windowScrollTop) {
                            verticalPosition = dateInputOffset.top - datetimepicker[0].offsetHeight + 1;
                        }
                    }
                    if (verticalPosition < 0) {
                        verticalPosition = 0;
                    }
                    if (left + dateInputElem.offsetWidth > windowWidth) {
                        left = windowWidth - dateInputElem.offsetWidth;
                    }
                }
                datetimepickerElem = datetimepicker[0];
                forEachAncestorOf(datetimepickerElem, function(ancestorNode) {
                    var ancestorNodePosition;
                    ancestorNodePosition = options.contentWindow.getComputedStyle(ancestorNode).getPropertyValue('position');
                    if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
                        left = left - ((windowWidth - ancestorNode.offsetWidth) / 2);
                        return false;
                    }
                });
                datetimepickerCss = {
                    position: position,
                    left: options.insideParent ? dateInputElem.offsetLeft : left,
                    top: '',
                    bottom: ''
                };
                if (options.insideParent) {
                    datetimepickerCss[verticalAnchorEdge] = dateInputElem.offsetTop + dateInputElem.offsetHeight;
                } else {
                    datetimepickerCss[verticalAnchorEdge] = verticalPosition;
                }
                datetimepicker.css(datetimepickerCss);
            }
            ;
            datetimepicker.on('open.xdsoft', function(event) {
                var onShow = true;
                if (options.onShow && typeof options.onShow === 'function') {
                    onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onShow !== false) {
                    datetimepicker.show();
                    setPos();
                    $(options.contentWindow).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);
                    if (options.closeOnWithoutClick) {
                        $([options.ownerDocument.body, options.contentWindow]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
                            datetimepicker.trigger('close.xdsoft');
                            $([options.ownerDocument.body, options.contentWindow]).off('touchstart mousedown.xdsoft', arguments_callee6);
                        });
                    }
                }
            }).on('close.xdsoft', function(event) {
                var onClose = true;
                month_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();
                if (options.onClose && typeof options.onClose === 'function') {
                    onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onClose !== false && !options.opened && !options.inline) {
                    datetimepicker.hide();
                }
                event.stopPropagation();
            }).on('toggle.xdsoft', function() {
                if (datetimepicker.is(':visible')) {
                    datetimepicker.trigger('close.xdsoft');
                } else {
                    datetimepicker.trigger('open.xdsoft');
                }
            }).data('input', input);
            timer = 0;
            datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
            datetimepicker.setOptions(options);
            function getCurrentValue() {
                var ct = false, time;
                if (options.startDate) {
                    ct = _xdsoft_datetime.strToDate(options.startDate);
                } else {
                    ct = options.value || ((input && input.val && input.val()) ? input.val() : '');
                    if (ct) {
                        ct = _xdsoft_datetime.strToDateTime(ct);
                        if (options.yearOffset) {
                            ct = new Date(ct.getFullYear() - options.yearOffset,ct.getMonth(),ct.getDate(),ct.getHours(),ct.getMinutes(),ct.getSeconds(),ct.getMilliseconds());
                        }
                    } else if (options.defaultDate) {
                        ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
                        if (options.defaultTime) {
                            time = _xdsoft_datetime.strtotime(options.defaultTime);
                            ct.setHours(time.getHours());
                            ct.setMinutes(time.getMinutes());
                        }
                    }
                }
                if (ct && _xdsoft_datetime.isValidDate(ct)) {
                    datetimepicker.data('changed', true);
                } else {
                    ct = '';
                }
                return ct || 0;
            }
            function setMask(options) {
                var isValidValue = function(mask, value) {
                    var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
                    return (new RegExp(reg)).test(value);
                }
                  , getCaretPos = function(input) {
                    try {
                        if (options.ownerDocument.selection && options.ownerDocument.selection.createRange) {
                            var range = options.ownerDocument.selection.createRange();
                            return range.getBookmark().charCodeAt(2) - 2;
                        }
                        if (input.setSelectionRange) {
                            return input.selectionStart;
                        }
                    } catch (e) {
                        return 0;
                    }
                }
                  , setCaretPos = function(node, pos) {
                    node = (typeof node === "string" || node instanceof String) ? options.ownerDocument.getElementById(node) : node;
                    if (!node) {
                        return false;
                    }
                    if (node.createTextRange) {
                        var textRange = node.createTextRange();
                        textRange.collapse(true);
                        textRange.moveEnd('character', pos);
                        textRange.moveStart('character', pos);
                        textRange.select();
                        return true;
                    }
                    if (node.setSelectionRange) {
                        node.setSelectionRange(pos, pos);
                        return true;
                    }
                    return false;
                };
                if (options.mask) {
                    input.off('keydown.xdsoft');
                }
                if (options.mask === true) {
                    if (dateHelper.formatMask) {
                        options.mask = dateHelper.formatMask(options.format)
                    } else {
                        options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
                    }
                }
                if (typeof options.mask === 'string') {
                    if (!isValidValue(options.mask, input.val())) {
                        input.val(options.mask.replace(/[0-9]/g, '_'));
                        setCaretPos(input[0], 0);
                    }
                    input.on('paste.xdsoft', function(event) {
                        var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData
                          , pastedData = clipboardData.getData('text')
                          , val = this.value
                          , pos = this.selectionStart
                        var valueBeforeCursor = val.substr(0, pos);
                        var valueAfterPaste = val.substr(pos + pastedData.length);
                        val = valueBeforeCursor + pastedData + valueAfterPaste;
                        pos += pastedData.length;
                        if (isValidValue(options.mask, val)) {
                            this.value = val;
                            setCaretPos(this, pos);
                        } else if (val.trim() === '') {
                            this.value = options.mask.replace(/[0-9]/g, '_');
                        } else {
                            input.trigger('error_input.xdsoft');
                        }
                        event.preventDefault();
                        return false;
                    });
                    input.on('keydown.xdsoft', function(event) {
                        var val = this.value, key = event.which, pos = this.selectionStart, selEnd = this.selectionEnd, hasSel = pos !== selEnd, digit;
                        if (((key >= KEY0 && key <= KEY9) || (key >= _KEY0 && key <= _KEY9)) || (key === BACKSPACE || key === DEL)) {
                            digit = (key === BACKSPACE || key === DEL) ? '_' : String.fromCharCode((_KEY0 <= key && key <= _KEY9) ? key - KEY0 : key);
                            if (key === BACKSPACE && pos && !hasSel) {
                                pos -= 1;
                            }
                            while (true) {
                                var maskValueAtCurPos = options.mask.substr(pos, 1);
                                var posShorterThanMaskLength = pos < options.mask.length;
                                var posGreaterThanZero = pos > 0;
                                var notNumberOrPlaceholder = /[^0-9_]/;
                                var curPosOnSep = notNumberOrPlaceholder.test(maskValueAtCurPos);
                                var continueMovingPosition = curPosOnSep && posShorterThanMaskLength && posGreaterThanZero
                                if (!continueMovingPosition)
                                    break;
                                pos += (key === BACKSPACE && !hasSel) ? -1 : 1;
                            }
                            if (event.metaKey) {
                                pos = 0;
                                hasSel = true;
                            }
                            if (hasSel) {
                                var selLength = selEnd - pos
                                var defaultBlank = options.mask.replace(/[0-9]/g, '_');
                                var defaultBlankSelectionReplacement = defaultBlank.substr(pos, selLength);
                                var selReplacementRemainder = defaultBlankSelectionReplacement.substr(1)
                                var valueBeforeSel = val.substr(0, pos);
                                var insertChars = digit + selReplacementRemainder;
                                var charsAfterSelection = val.substr(pos + selLength);
                                val = valueBeforeSel + insertChars + charsAfterSelection
                            } else {
                                var valueBeforeCursor = val.substr(0, pos);
                                var insertChar = digit;
                                var valueAfterNextChar = val.substr(pos + 1);
                                val = valueBeforeCursor + insertChar + valueAfterNextChar
                            }
                            if (val.trim() === '') {
                                val = defaultBlank
                            } else {
                                if (pos === options.mask.length) {
                                    event.preventDefault();
                                    return false;
                                }
                            }
                            pos += (key === BACKSPACE) ? 0 : 1;
                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += (key === BACKSPACE) ? 0 : 1;
                            }
                            if (isValidValue(options.mask, val)) {
                                this.value = val;
                                setCaretPos(this, pos);
                            } else if (val.trim() === '') {
                                this.value = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                input.trigger('error_input.xdsoft');
                            }
                        } else {
                            if (([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown) || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                                return true;
                            }
                        }
                        event.preventDefault();
                        return false;
                    });
                }
            }
            _xdsoft_datetime.setCurrentTime(getCurrentValue());
            input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function() {
                if (input.is(':disabled') || (input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick)) {
                    return;
                }
                if (!options.openOnFocus) {
                    return;
                }
                clearTimeout(timer);
                timer = setTimeout(function() {
                    if (input.is(':disabled')) {
                        return;
                    }
                    triggerAfterOpen = true;
                    _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
                    if (options.mask) {
                        setMask(options);
                    }
                    datetimepicker.trigger('open.xdsoft');
                }, 100);
            }).on('keydown.xdsoft', function(event) {
                var elementSelector, key = event.which;
                if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
                    elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
                    datetimepicker.trigger('close.xdsoft');
                    elementSelector.eq(elementSelector.index(this) + 1).focus();
                    return false;
                }
                if ([TAB].indexOf(key) !== -1) {
                    datetimepicker.trigger('close.xdsoft');
                    return true;
                }
            }).on('blur.xdsoft', function() {
                datetimepicker.trigger('close.xdsoft');
            });
        }
        ;
        destroyDateTimePicker = function(input) {
            var datetimepicker = input.data('xdsoft_datetimepicker');
            if (datetimepicker) {
                datetimepicker.data('xdsoft_datetime', null);
                datetimepicker.remove();
                input.data('xdsoft_datetimepicker', null).off('.xdsoft');
                $(options.contentWindow).off('resize.xdsoft');
                $([options.contentWindow, options.ownerDocument.body]).off('mousedown.xdsoft touchstart');
                if (input.unmousewheel) {
                    input.unmousewheel();
                }
            }
        }
        ;
        $(options.ownerDocument).off('keydown.xdsoftctrl keyup.xdsoftctrl').off('keydown.xdsoftcmd keyup.xdsoftcmd').on('keydown.xdsoftctrl', function(e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = true;
            }
        }).on('keyup.xdsoftctrl', function(e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = false;
            }
        }).on('keydown.xdsoftcmd', function(e) {
            if (e.keyCode === CMDKEY) {
                cmdDown = true;
            }
        }).on('keyup.xdsoftcmd', function(e) {
            if (e.keyCode === CMDKEY) {
                cmdDown = false;
            }
        });
        this.each(function() {
            var datetimepicker = $(this).data('xdsoft_datetimepicker'), $input;
            if (datetimepicker) {
                if (typeof opt === 'string') {
                    switch (opt) {
                    case 'show':
                        $(this).select().focus();
                        datetimepicker.trigger('open.xdsoft');
                        break;
                    case 'hide':
                        datetimepicker.trigger('close.xdsoft');
                        break;
                    case 'toggle':
                        datetimepicker.trigger('toggle.xdsoft');
                        break;
                    case 'destroy':
                        destroyDateTimePicker($(this));
                        break;
                    case 'reset':
                        this.value = this.defaultValue;
                        if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                            datetimepicker.data('changed', false);
                        }
                        datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                        break;
                    case 'validate':
                        $input = datetimepicker.data('input');
                        $input.trigger('blur.xdsoft');
                        break;
                    default:
                        if (datetimepicker[opt] && typeof datetimepicker[opt] === 'function') {
                            result = datetimepicker[opt](opt2);
                        }
                    }
                } else {
                    datetimepicker.setOptions(opt);
                }
                return 0;
            }
            if (typeof opt !== 'string') {
                if (!options.lazyInit || options.open || options.inline) {
                    createDateTimePicker($(this));
                } else {
                    lazyInit($(this));
                }
            }
        });
        return result;
    }
    ;
    $.fn.datetimepicker.defaults = default_options;
    function HighlightedDate(date, desc, style) {
        "use strict";
        this.date = date;
        this.desc = desc;
        this.style = style;
    }
};
;(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'jquery-mousewheel'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
        ;
    } else {
        factory(jQuery);
    }
}(datetimepickerFactory));
/*!
* jQuery Mousewheel 3.1.13
*
* Copyright jQuery Foundation and other contributors
* Released under the MIT license
* http://jquery.org/license
*/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function($) {
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'], toBind = ('onwheel'in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'], slice = Array.prototype.slice, nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i; ) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: '3.1.12',
        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i; ) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i; ) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },
        getLineHeight: function(elem) {
            var $elem = $(elem)
              , $parent = $elem['offsetParent'in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },
        getPageHeight: function(elem) {
            return $(elem).height();
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },
        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event
          , args = slice.call(arguments, 1)
          , delta = 0
          , deltaX = 0
          , deltaY = 0
          , absDelta = 0
          , offsetX = 0
          , offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';
        if ('detail'in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta'in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY'in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX'in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        if ('axis'in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ('deltaY'in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX'in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return;
        }
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }
    function nullLowestDelta() {
        lowestDelta = null;
    }
    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
}));

// jquery.nice-select.min.js
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!function(e) {
    e.fn.niceSelect = function(t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next()
              , n = t.find("option")
              , i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()),
            n.each(function(t) {
                var n = e(this)
                  , i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t)
            return "update" == t ? this.each(function() {
                var t = e(this)
                  , n = e(this).next(".nice-select")
                  , i = n.hasClass("open");
                n.length && (n.remove(),
                s(t),
                i && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function() {
                var t = e(this)
                  , s = e(this).next(".nice-select");
                s.length && (s.remove(),
                t.css("display", ""))
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'),
            this;
        this.hide(),
        this.each(function() {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }),
        e(document).off(".nice_select"),
        e(document).on("click.nice_select", ".nice-select", function(t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"),
            s.toggleClass("open"),
            s.hasClass("open") ? (s.find(".option"),
            s.find(".focus").removeClass("focus"),
            s.find(".selected").addClass("focus")) : s.focus()
        }),
        e(document).on("click.nice_select", function(t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }),
        e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t) {
            var s = e(this)
              , n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"),
            s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change")
        }),
        e(document).on("keydown.nice_select", ".nice-select", function(t) {
            var s = e(this)
              , n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode)
                return s.hasClass("open") ? n.trigger("click") : s.trigger("click"),
                !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"),
                    i.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"),
                    l.addClass("focus"))
                } else
                    s.trigger("click");
                return !1
            }
            if (27 == t.keyCode)
                s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open"))
                return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto",
        "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
        this
    }
}(jQuery);

// venobox.min.js
!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).VenoBox = t()
}(this, function() {
    "use strict";
    let e, t, o, n, s, i, a, r, l, d, c, v, u, b, p, g, f, m, y, x, L, h, w, k, S, C, E, q, M, A, P, T, j, H, O;
    const z = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor">'
      , B = z + '<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>'
      , I = z + '<path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/><path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/></svg>'
      , V = z + '<path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
      , R = document.createElement("div");
    let D = 0
      , Q = 0
      , N = 0
      , Z = 50
      , W = !1
      , X = new Image;
    const Y = {
        bounce: ["sk-bounce", "sk-bounce-dot", 2],
        chase: ["sk-chase", "sk-chase-dot", 6],
        circle: ["sk-circle", "sk-circle-dot", 12],
        "circle-fade": ["sk-circle-fade", "sk-circle-fade-dot", 12],
        flow: ["sk-flow", "sk-flow-dot", 3],
        fold: ["sk-fold", "sk-fold-cube", 4],
        grid: ["sk-grid", "sk-grid-cube", 9],
        plane: ["sk-plane", "", 0],
        pulse: ["sk-pulse", "", 5],
        swing: ["sk-swing", "sk-swing-dot", 2],
        wander: ["sk-wander", "sk-wander-cube", 3],
        wave: ["sk-wave", "sk-wave-rec", 5]
    }
      , $ = {
        selector: ".venobox",
        autoplay: !1,
        bgcolor: "#fff",
        border: "0",
        infinigall: !1,
        maxWidth: "100%",
        navigation: !0,
        navKeyboard: !0,
        navTouch: !0,
        navSpeed: 300,
        numeration: !1,
        overlayClose: !0,
        overlayColor: "rgba(23,23,23,0.95)",
        popup: !1,
        ratio: "16x9",
        share: !1,
        shareStyle: "pill",
        spinner: "bounce",
        spinColor: "#d2d2d2",
        titleattr: "title",
        titlePosition: "top",
        titleStyle: "bar",
        toolsBackground: "#1C1C1C",
        toolsColor: "#d2d2d2",
        onPreOpen: function() {
            return !0
        },
        onPostOpen: function() {},
        onPreClose: function() {
            return !0
        },
        onNavComplete: function() {},
        onContentLoaded: function() {},
        onInit: function() {},
        jQuerySelectors: !1
    };
    function F(e, t, o) {
        if ("[object Object]" === Object.prototype.toString.call(e)) {
            let n;
            for (n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.call(o, e[n], n, e)
        } else {
            let n = 0
              , s = e.length;
            for (n = 0; n < s; n++)
                t.call(o, e[n], n, e)
        }
    }
    function K(e) {
        return e
    }
    function U({timing: e, draw: t, duration: o}) {
        let n = performance.now();
        requestAnimationFrame(function s(i) {
            let a = (i - n) / o;
            a > 1 && (a = 1);
            let r = e(a);
            t(r),
            a < 1 && requestAnimationFrame(s)
        })
    }
    function _(e) {
        if (!e)
            return !1;
        y = !0,
        r = e,
        h = !1,
        w = !1,
        S = e.getAttribute("data-maxwidth") || e.settings.maxWidth,
        C = e.getAttribute("data-overlay") || e.settings.overlayColor,
        E = e.getAttribute("data-ratio") || e.settings.ratio,
        q = e.getAttribute("data-autoplay") || e.settings.autoplay,
        M = e.getAttribute("data-href") || e.getAttribute("href"),
        P = e.getAttribute(e.settings.titleattr) || ""
    }
    function G() {
        return !(!r || !document.body.classList.contains("vbox-open")) && ((!r.settings.onPreClose || "function" != typeof r.settings.onPreClose || (r.settings.onPreClose(r, p, j, H),
        !1 !== r.settings.onPreClose)) && (document.body.removeEventListener("keydown", te),
        document.body.classList.remove("vbox-open"),
        r.focus(),
        void U({
            duration: 200,
            timing: K,
            draw: function(e) {
                k.style.opacity = 1 - e,
                1 === e && k.remove()
            }
        })))
    }
    function J() {
        ve(j)
    }
    function ee() {
        ve(H)
    }
    function te(e) {
        27 === e.keyCode && G(),
        O || (37 == e.keyCode && !0 === w && ve(H),
        39 == e.keyCode && !0 === h && ve(j),
        O = setTimeout( () => {
            O = null
        }
        , 100))
    }
    function oe(e) {
        a.classList.contains("vbox-" + e) || function() {
            y = !1,
            a.style.opacity = 0,
            a.innerHTML = x;
            let e = a.querySelector(":first-child");
            e.classList.add("vbox-child"),
            e.style.padding = r.settings.border,
            e.style.backgroundColor = r.settings.bgcolor,
            e.style.maxWidth = S,
            e.style.transform = "scale(0.9)",
            e.style.transition = "transform 200ms";
            let t = a.querySelector(".vbox-child img");
            t && t.addEventListener("dragstart", function(e) {
                e.preventDefault()
            }),
            i.scrollTo(0, 0),
            e.style.transform = "scale(1)",
            U({
                duration: 200,
                timing: K,
                draw: function(e) {
                    a.style.opacity = e,
                    1 === e && u.classList.add("vbox-hidden")
                }
            }),
            r.settings.onContentLoaded && "function" == typeof r.settings.onContentLoaded && r.settings.onContentLoaded(x)
        }()
    }
    function ne(e, t, o) {
        let n;
        if (a.classList.add("vbox-loading"),
        -1 !== e.search(/.+\.mp4|og[gv]|webm/))
            x = '<div class="venoratio venoratio-' + t + '"><video src="' + e + '"' + (n = o ? " autoplay" : "") + " controls>Your browser does not support the video tag.</video></div>";
        else {
            let s, i = function(e) {
                let t;
                return e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                RegExp.$3.indexOf("youtu") > -1 ? t = "youtube" : RegExp.$3.indexOf("vimeo") > -1 && (t = "vimeo"),
                {
                    type: t,
                    id: RegExp.$6
                }
            }(e), a = (n = o ? "?rel=0&autoplay=1" : "?rel=0") + function(e) {
                let t = ""
                  , o = decodeURIComponent(e).split("?");
                if (void 0 !== o[1]) {
                    let e, n, s = o[1].split("&");
                    for (n = 0; n < s.length; n++)
                        t = t + "&" + (e = s[n].split("="))[0] + "=" + e[1]
                }
                return encodeURI(t)
            }(e);
            "vimeo" == i.type ? s = "https://player.vimeo.com/video/" : "youtube" == i.type && (s = "https://www.youtube.com/embed/"),
            x = '<div class="venoratio venoratio-' + t + '"><iframe webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' + s + i.id + a + '"></iframe></div>'
        }
        a.classList.remove("vbox-loading"),
        oe("animated")
    }
    function se() {
        var e;
        if (e = x,
        R.innerHTML = e,
        (g = R.querySelectorAll("img")).length) {
            let e = 0;
            F(g, function(t) {
                let o = t.src;
                (X = new Image).onload = function() {
                    ++e == g.length && (a.classList.remove("vbox-loading"),
                    oe("animated"))
                }
                ,
                X.onerror = function() {
                    ++e == g.length && (a.classList.remove("vbox-loading"),
                    oe("animated"))
                }
                ,
                X.src = o
            })
        } else
            a.classList.remove("vbox-loading"),
            oe("animated")
    }
    function ie(e) {
        if (!y) {
            let t = .84 * r.settings.navSpeed;
            a.style.transition = "margin " + t + "ms ease-out, opacity " + t + "ms ease-out",
            A = v = e.pageY,
            D = Q = e.pageX,
            W = !0
        }
    }
    function ae(e) {
        if (W) {
            W = !1;
            let e = r
              , t = !1;
            (N = Q - D) < 0 && h && (e = j,
            t = !0),
            N > 0 && w && (e = H,
            t = !0),
            Math.abs(N) >= Z && t ? ve(e) : (a.style.marginLeft = 0,
            a.style.opacity = 1)
        }
    }
    function re(e) {
        if (W && !y) {
            Q = e.pageX,
            v = e.pageY,
            d = Q - D,
            c = v - A;
            let t = Math.abs(d);
            if (t > Math.abs(c) && t <= 180) {
                let o = 1.5 * (1 - t / 180);
                e.preventDefault(),
                a.style.marginLeft = d + "px",
                a.style.opacity = o
            }
        }
    }
    function le(e) {
        if (!e)
            return !1;
        T = e.dataset.gall,
        L = e.settings.numeration,
        f = e.settings.infinigall,
        o.innerHTML = "";
        let s = e.dataset.vbtype;
        e.settings.share && "iframe" !== s && "inline" !== s && "ajax" !== s && function(e) {
            if (navigator.canShare) {
                const t = {
                    url: e
                };
                o.insertAdjacentHTML("beforeend", '<div class="vbox-link-btn vbox-share-mobile">' + I + "</div>"),
                o.querySelector(".vbox-share-mobile").addEventListener("click", function(e) {
                    e.preventDefault(),
                    navigator.share(t)
                })
            }
            o.insertAdjacentHTML("beforeend", '<a target="_blank" href="' + e + '" download>' + B + "</a>"),
            o.insertAdjacentHTML("beforeend", '<div class="vbox-tooltip"><div class="vbox-link-btn vbox-share-copy"><span class="vbox-tooltip-text" id="myTooltip"></span>' + V + "</div ></div>"),
            o.querySelector(".vbox-share-copy").addEventListener("click", function(t) {
                t.preventDefault();
                let o = document.getElementById("myTooltip");
                navigator.clipboard.writeText(e).then(function() {
                    o.innerHTML = '<div class="vbox-tooltip-inner">Copied</div>'
                }, function() {
                    console.log("copy failed")
                })
            })
        }(e.href),
        m = document.querySelectorAll('.vbox-item[data-gall="' + T + '"]'),
        l = Array.prototype.indexOf.call(m, e),
        m.length < 2 && (f = !1,
        L = !1),
        j = m[l + 1],
        H = m[l - 1],
        !j && f && (j = m[0]),
        !H && f && (H = m[m.length - 1]),
        m.length >= 1 ? (p = l + 1,
        t.innerHTML = p + " / " + m.length) : p = 1,
        L ? t.classList.remove("vbox-hidden") : t.classList.add("vbox-hidden"),
        "" !== P ? n.classList.remove("vbox-hidden") : n.classList.add("vbox-hidden"),
        n.innerHTML = P,
        w = !1,
        h = !1,
        (j || f) && (h = !0),
        (l > 0 || f) && (w = !0),
        (w || h) && e.settings.navTouch ? (a.classList.add("vbox-grab"),
        a.addEventListener("touchstart", ie, !1),
        a.addEventListener("touchend", ae, !1),
        a.addEventListener("touchmove", re, !1),
        a.addEventListener("mousedown", ie, !1),
        a.addEventListener("mouseup", ae, !1),
        a.addEventListener("mouseout", ae, !1),
        a.addEventListener("mousemove", re, !1)) : (a.classList.remove("vbox-grab"),
        a.removeEventListener("touchstart", ie, !1),
        a.removeEventListener("touchend", ae, !1),
        a.removeEventListener("touchmove", re, !1),
        a.removeEventListener("mousedown", ie, !1),
        a.removeEventListener("mouseup", ae, !1),
        a.removeEventListener("mouseout", ae, !1),
        a.removeEventListener("mousemove", re, !1));
        let i = k.querySelector(".vbox-next")
          , r = k.querySelector(".vbox-prev");
        w ? r.classList.remove("vbox-hidden") : r.classList.add("vbox-hidden"),
        h ? i.classList.remove("vbox-hidden") : i.classList.add("vbox-hidden"),
        e.settings.navigation || (i.classList.add("vbox-hidden"),
        r.classList.add("vbox-hidden"))
    }
    function de(t) {
        e.style.backgroundColor = C,
        b.innerHTML = function(e) {
            if (!e)
                return "Loading...";
            let t = '<div class="sk-center ' + e[0] + '">'
              , o = 0;
            for (o = 0; o < e[2]; o++)
                t += '<div class="' + e[1] + '"></div>';
            return t += "</div>"
        }(Y[t.settings.spinner]),
        k.style.setProperty("--sk-color", t.settings.spinColor),
        u.classList.remove("vbox-hidden"),
        o.classList.remove("vbox-top", "vbox-bottom"),
        n.classList.remove("vbox-top", "vbox-bottom"),
        "top" == t.settings.titlePosition ? (n.classList.add("vbox-top"),
        o.classList.add("vbox-bottom")) : (n.classList.add("vbox-bottom"),
        o.classList.add("vbox-top"));
        let s = "bar" === t.settings.titleStyle ? "100%" : "auto"
          , i = "pill" === t.settings.titleStyle ? "5em" : "0"
          , a = "bar" === t.settings.shareStyle ? "100%" : "auto"
          , r = "pill" === t.settings.shareStyle ? "5em" : "0"
          , l = "transparent" === t.settings.titleStyle ? "transparent" : t.settings.toolsBackground
          , d = "transparent" === t.settings.shareStyle ? "transparent" : t.settings.toolsBackground;
        k.style.setProperty("--vbox-title-width", s),
        k.style.setProperty("--vbox-title-radius", i),
        k.style.setProperty("--vbox-share-width", a),
        k.style.setProperty("--vbox-share-radius", r),
        k.style.setProperty("--vbox-tools-color", t.settings.toolsColor),
        k.style.setProperty("--vbox-title-background", l),
        k.style.setProperty("--vbox-share-background", d)
    }
    function ce() {
        if (!r)
            return !1;
        switch (r.dataset.vbtype) {
        case "iframe":
            e = M,
            t = E,
            a.classList.add("vbox-loading"),
            x = '<div class="venoratio venoratio-' + t + '"><iframe src="' + e + '"></iframe></div>',
            a.classList.remove("vbox-loading"),
            oe("animated");
            break;
        case "inline":
            !function(e) {
                let t = document.querySelector(e);
                t && (a.classList.add("vbox-loading"),
                x = '<div class="vbox-inline">' + t.innerHTML + "</div>",
                a.classList.remove("vbox-loading"),
                oe("animated"))
            }(M);
            break;
        case "ajax":
            !function(e) {
                a.classList.add("vbox-loading");
                let t = new XMLHttpRequest;
                t.open("GET.html", e, !0),
                t.onload = function() {
                    x = '<div class="vbox-inline">' + t.response + "</div>",
                    se()
                }
                ,
                t.onerror = function() {
                    x = '<div class="vbox-inline"></div>',
                    a.classList.remove("vbox-loading"),
                    oe("animated")
                }
                ,
                t.send()
            }(M);
            break;
        case "video":
            ne(M, E, q);
            break;
        default:
            !function(e) {
                X.onload = function() {
                    x = '<div class="vbox-child"><img src="' + e + '"></div>',
                    a.classList.remove("vbox-loading"),
                    oe("animated")
                }
                ,
                X.src = e
            }(M)
        }
        var e, t
    }
    function ve(e) {
        if (!e || y || !document.body.classList.contains("vbox-open"))
            return !1;
        _(e),
        de(e);
        let t = .84 * r.settings.navSpeed;
        a.style.transition = "margin " + t + "ms ease-out, opacity " + t + "ms ease-out",
        e === H && a.classList.add("swipe-right"),
        e === j && a.classList.add("swipe-left"),
        u.classList.remove("vbox-hidden");
        let o = a.style.opacity;
        a.classList.add("vbox-animated", "vbox-loading"),
        le(e),
        U({
            duration: r.settings.navSpeed,
            timing: K,
            draw: function(e) {
                a.style.opacity = o - e / o,
                1 === e && (a.classList.remove("swipe-left", "swipe-right", "vbox-animated"),
                a.style.marginLeft = 0,
                a.style.transition = "",
                oe("loading"),
                y = !1,
                r.settings.onNavComplete && "function" == typeof r.settings.onNavComplete && r.settings.onNavComplete(r, p, j, H))
            }
        }),
        ce()
    }
    function ue(l) {
        return !(document.body.classList.contains("vbox-open") || !l) && (l.settings.onPreOpen && "function" == typeof l.settings.onPreOpen && l.settings.onPreOpen(l),
        !!l.settings.onPreOpen && (_(l),
        document.body.insertAdjacentHTML("beforeend", s),
        document.body.classList.add("vbox-open"),
        k = document.querySelector(".vbox-overlay"),
        e = k.querySelector(".vbox-backdrop"),
        i = k.querySelector(".vbox-container"),
        a = i.querySelector(".vbox-content"),
        t = k.querySelector(".vbox-num"),
        o = k.querySelector(".vbox-share"),
        n = k.querySelector(".vbox-title"),
        u = k.querySelector(".vbox-preloader"),
        b = u.querySelector(".vbox-preloader-inner"),
        k.style.opacity = 0,
        de(l),
        le(l),
        a.classList.add("vbox-animated", "vbox-loading"),
        U({
            duration: 200,
            timing: K,
            draw: function(e) {
                k.style.opacity = e,
                1 === e && (a.classList.remove("vbox-animated"),
                y = !1,
                oe("loading"),
                r.settings.onPostOpen && "function" == typeof r.settings.onPostOpen && r.settings.onPostOpen(r, p, j, H))
            }
        }),
        ce(),
        l.settings.navKeyboard && (document.body.addEventListener("keydown", te),
        document.body.addEventListener("keyup", () => {
            O && (clearTimeout(O),
            O = null)
        }
        )),
        document.querySelector(".vbox-prev").addEventListener("click", function() {
            ve(H)
        }),
        document.querySelector(".vbox-next").addEventListener("click", function() {
            ve(j)
        }),
        void k.addEventListener("click", function(e) {
            let t = document.querySelector(".vbox-close");
            t && (t.contains(e.target) || t === e.target || r.settings.overlayClose && e.target.classList.contains("vbox-overlay") || e.target.classList.contains("vbox-content") || e.target.classList.contains("vbox-backdrop") || e.target.classList.contains("vbox-close") || e.target.classList.contains("vbox-preloader") || e.target.classList.contains("vbox-container")) && G()
        })))
    }
    const be = function(e) {
        const t = {};
        let o = function(e, t) {
            let o = {};
            return F(e, function(t, n) {
                o[n] = e[n]
            }),
            F(t, function(e, n) {
                o[n] = t[n]
            }),
            o
        }($, e || {});
        return t.close = G,
        t.next = J,
        t.prev = ee,
        t.open = ue,
        t.settings = o,
        function(e, t) {
            t.onInit && "function" == typeof t.onInit && t.onInit(e);
            let o = t.jQuerySelectors || document.querySelectorAll(t.selector);
            if (s = '<div class="vbox-overlay"><div class="vbox-backdrop"></div><div class="vbox-preloader"><div class="vbox-preloader-inner"></div></div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-left-corner"><div class="vbox-num">0/0</div></div><div class="vbox-close"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" class="vbox-close-icon" viewBox="0 0 32 32"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg></div><a class="vbox-next"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M 21.1875 9.28125 L 19.78125 10.71875 L 24.0625 15 L 4 15 L 4 17 L 24.0625 17 L 19.78125 21.28125 L 21.1875 22.71875 L 27.90625 16 Z"/></svg></a><a class="vbox-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M 10.8125 9.28125 L 4.09375 16 L 10.8125 22.71875 L 12.21875 21.28125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 12.21875 10.71875 Z"/></svg></a><div class="vbox-share"></div></div>',
            F(o, function(e) {
                if (e.classList.contains("vbox-item"))
                    return !0;
                e.settings = t,
                e.classList.add("vbox-item"),
                e.addEventListener("click", function(t) {
                    return t.preventDefault(),
                    e.blur(),
                    ue(e),
                    !1
                })
            }),
            t.popup) {
                let e = document.querySelector(t.popup);
                e.settings = t,
                ue(e)
            }
        }(t, o),
        t
    };
    return "function" == typeof jQuery && jQuery.fn.extend({
        venobox: function(e) {
            const t = e || {};
            t.jQuerySelectors = this,
            new be({
                pluginoptions: t
            })
        }
    }),
    be
});

// smooth-scroll.js
(function() {
    var defaultOptions = {
        frameRate: 150,
        animationTime: 600,
        stepSize: 80,
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: true,
        arrowScroll: 50,
        fixedBackground: true,
        excluded: ''
    };
    var options = defaultOptions;
    var isExcluded = false;
    var isFrame = false;
    var direction = {
        x: 0,
        y: 0
    };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var deltaBufferTimer;
    var isMac = /^Mac/.test(navigator.platform);
    var key = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    };
    var arrowKeys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }
    function init() {
        if (initDone || !document.body)
            return;
        initDone = true;
        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;
        initTest();
        if (top != self) {
            isFrame = true;
        } else if (isOldSafari && scrollHeight > windowHeight && (body.offsetHeight <= windowHeight || html.offsetHeight <= windowHeight)) {
            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' + 'top:0; left:0; right:0; height:' + root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);
            var pendingRefresh;
            refreshSize = function() {
                if (pendingRefresh)
                    return;
                pendingRefresh = setTimeout(function() {
                    if (isExcluded)
                        return;
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500);
            }
            ;
            setTimeout(refreshSize, 10);
            addEvent('resize', refreshSize);
            var config = {
                attributes: true,
                childList: true,
                characterData: false
            };
            observer = new MutationObserver(refreshSize);
            observer.observe(body, config);
            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }
    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init);
    }
    var que = [];
    var pending = false;
    var lastScroll = Date.now();
    function scrollArray(elem, left, top) {
        directionCheck(left, top);
        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });
        if (pending) {
            return;
        }
        var scrollRoot = getScrollRoot();
        var isWindowScroll = (elem === scrollRoot || elem === document.body);
        if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
            elem.$scrollBehavior = elem.style.scrollBehavior;
            elem.style.scrollBehavior = 'auto';
        }
        var step = function(time) {
            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;
            for (var i = 0; i < que.length; i++) {
                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);
                var position = (finished) ? 1 : elapsed / options.animationTime;
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;
                scrollX += x;
                scrollY += y;
                item.lastX += x;
                item.lastY += y;
                if (finished) {
                    que.splice(i, 1);
                    i--;
                }
            }
            if (isWindowScroll) {
                window.scrollBy(scrollX, scrollY);
            } else {
                if (scrollX)
                    elem.scrollLeft += scrollX;
                if (scrollY)
                    elem.scrollTop += scrollY;
            }
            if (!left && !top) {
                que = [];
            }
            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
                if (elem.$scrollBehavior != null) {
                    elem.style.scrollBehavior = elem.$scrollBehavior;
                    elem.$scrollBehavior = null;
                }
            }
        };
        requestFrame(step, elem, 0);
        pending = true;
    }
    function wheel(event) {
        if (!initDone) {
            init();
        }
        var target = event.target;
        if (event.defaultPrevented || event.ctrlKey) {
            return true;
        }
        if (isNodeName(activeElement, 'embed') || (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) || isNodeName(activeElement, 'object') || target.shadowRoot) {
            return true;
        }
        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;
        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }
        var overflowing = overflowingAncestor(target);
        if (!overflowing) {
            if (isFrame && isChrome) {
                Object.defineProperty(event, "target", {
                    value: window.frameElement
                });
                return parent.wheel(event);
            }
            return true;
        }
        if (isTouchpad(deltaY)) {
            return true;
        }
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }
        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }
    function keydown(event) {
        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey || (event.shiftKey && event.keyCode !== key.spacebar);
        if (!document.body.contains(activeElement)) {
            activeElement = document.activeElement;
        }
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (event.defaultPrevented || inputNodeNames.test(target.nodeName) || isNodeName(target, 'input') && !buttonTypes.test(target.type) || isNodeName(activeElement, 'video') || isInsideYoutubeVideo(event) || target.isContentEditable || modifier) {
            return true;
        }
        if ((isNodeName(target, 'button') || isNodeName(target, 'input') && buttonTypes.test(target.type)) && event.keyCode === key.spacebar) {
            return true;
        }
        if (isNodeName(target, 'input') && target.type == 'radio' && arrowKeys[event.keyCode]) {
            return true;
        }
        var shift, x = 0, y = 0;
        var overflowing = overflowingAncestor(activeElement);
        if (!overflowing) {
            return (isFrame && isChrome) ? parent.keydown(event) : true;
        }
        var clientHeight = overflowing.clientHeight;
        if (overflowing == document.body) {
            clientHeight = window.innerHeight;
        }
        switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;
        case key.spacebar:
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;
        default:
            return true;
        }
        scrollArray(overflowing, x, y);
        event.preventDefault();
        scheduleClearCache();
    }
    function mousedown(event) {
        activeElement = event.target;
    }
    var uniqueID = (function() {
        var i = 0;
        return function(el) {
            return el.uniqueID || (el.uniqueID = i++);
        }
        ;
    }
    )();
    var cacheX = {};
    var cacheY = {};
    var clearCacheTimer;
    var smoothBehaviorForElement = {};
    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function() {
            cacheX = cacheY = smoothBehaviorForElement = {};
        }, 1 * 1000);
    }
    function setCache(elems, overflowing, x) {
        var cache = x ? cacheX : cacheY;
        for (var i = elems.length; i--; )
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }
    function getCache(el, x) {
        return (x ? cacheX : cacheY)[uniqueID(el)];
    }
    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = getCache(el, false);
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) || !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el);
            }
        } while ((el = el.parentElement));
    }
    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight);
    }
    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }
    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }
    function isScrollBehaviorSmooth(el) {
        var id = uniqueID(el);
        if (smoothBehaviorForElement[id] == null) {
            var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
            smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
        }
        return smoothBehaviorForElement[id];
    }
    function addEvent(type, fn, arg) {
        window.addEventListener(type, fn, arg || false);
    }
    function removeEvent(type, fn, arg) {
        window.removeEventListener(type, fn, arg || false);
    }
    function isNodeName(el, tag) {
        return el && (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }
    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }
    if (window.localStorage && localStorage.SS_deltaBuffer) {
        try {
            deltaBuffer = localStorage.SS_deltaBuffer.split(',');
        } catch (e) {}
    }
    function isTouchpad(deltaY) {
        if (!deltaY)
            return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY);
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function() {
            try {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
            } catch (e) {}
        }, 1000);
        var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY);
        var tp = !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
        if (deltaY < 50)
            return true;
        return tp;
    }
    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }
    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) && isDivisible(deltaBuffer[1], divisor) && isDivisible(deltaBuffer[2], divisor));
    }
    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList && elem.classList.contains('html5-video-controls'));
                if (isControl)
                    break;
            } while ((elem = elem.parentNode));
        }
        return isControl;
    }
    var requestFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback, element, delay) {
            window.setTimeout(callback, delay || (1000 / 60));
        }
        );
    }
    )();
    var MutationObserver = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
    var getScrollRoot = (function() {
        var SCROLL_ROOT = document.scrollingElement;
        return function() {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else
                    (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        }
        ;
    }
    )();
    function pulse_(x) {
        var val, start, expx;
        x = x * options.pulseScale;
        if (x < 1) {
            val = x - (1 - Math.exp(-x));
        } else {
            start = Math.exp(-1);
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }
    function pulse(x) {
        if (x >= 1)
            return 1;
        if (x <= 0)
            return 0;
        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }
    var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent);
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isIEWin7 = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
    var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
    var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function() {
                supportsPassive = true;
            }
        }));
    } catch (e) {}
    var wheelOpt = supportsPassive ? {
        passive: false
    } : false;
    var wheelEvent = 'onwheel'in document.createElement('div') ? 'wheel' : 'mousewheel';
    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel, wheelOpt);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }
    function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
            if (defaultOptions.hasOwnProperty(key))
                options[key] = optionsToSet[key];
    }
    SmoothScroll.destroy = cleanup;
    if (window.SmoothScrollOptions)
        SmoothScroll(window.SmoothScrollOptions);
    if (typeof define === 'function' && define.amd)
        define(function() {
            return SmoothScroll;
        });
    else if ('object' == typeof exports)
        module.exports = SmoothScroll;
    else
        window.SmoothScroll = SmoothScroll;
}
)();

// wow.min.js
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});

// book-ride.js
$(function() {
    var form = $('#book-taxi-ride');
    var formMessages = $('#form-messages');
    $(form).submit(function(event) {
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            dataType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).done(function(response) {
            if (response.success) {
                $(formMessages).removeClass('alert-danger');
                $(formMessages).addClass('alert-success');
                $(formMessages).text(response.message);
                // Clear form fields
                $(form).find('input[type="text"], input[type="number"], textarea').val('');
            } else {
                $(formMessages).removeClass('alert-success');
                $(formMessages).addClass('alert-danger');
                $(formMessages).text(response.message);
            }
        }).fail(function(xhr, status, error) {
            $(formMessages).removeClass('alert-success');
            $(formMessages).addClass('alert-danger');
            if (xhr.responseJSON && xhr.responseJSON.message) {
                $(formMessages).text(xhr.responseJSON.message);
            } else {
                $(formMessages).text('Oops! An error occurred and your booking could not be submitted.');
            }
        });
    });
});

// main.js
(function($) {
    "use strict";
    $(window).on("load", function() {
        $("body").addClass("loaded");
    });
    $(document).ready(function() {
        function stickyHeader() {
            var primaryHeader = $(".nav-menu-wrapper")
              , headerClone = primaryHeader.clone();
            $(".main-header").after('<div class="sticky-header"></div>');
            $(".sticky-header").html(headerClone);
            var headerSelector = document.querySelector(".sticky-header")
              , triggerPoint = $(".main-header").height()
              , yOffset = 0;
            $(window).on("scroll", function() {
                yOffset = $(window).scrollTop();
                if (yOffset >= triggerPoint) {
                    $(".sticky-header").addClass("sticky-fixed-top");
                    $("body.open-sidebox").removeClass("open-sidebox");
                } else {
                    $(".sticky-header").removeClass("sticky-fixed-top");
                }
            });
        }
        if ($(window).width() > 992) {
            stickyHeader();
        }
        function mobileMenu() {
            if ($(".header-menu-wrap").length) {
                $(".nav-menu-inner .burger-menu").on("click", function() {
                    $(this).toggleClass("menu-open");
                    $(".header-menu-wrap").slideToggle(300);
                });
            }
            $(".header-menu-wrap ul li:has(ul)").each(function() {
                $(this).append('<span class="dropdown-plus"></span>');
                $(this).addClass("dropdown_menu");
            });
            $(".header-menu-wrap .dropdown-plus").on("click", function() {
                $(this).prev("ul").slideToggle(300);
                $(this).toggleClass("dropdown-open");
                $(".header-menu-wrap ul li:has(ul)").toggleClass("dropdown-open");
            });
            $(".header-menu-wrap .dropdown_menu a").append("<span></span>");
        }
        mobileMenu();
        function responsiveClasses() {
            var body = $("body");
            if ($(window).width() < 992) {
                body.removeClass("viewport-lg");
                body.addClass("viewport-sm");
            } else {
                body.removeClass("viewport-sm");
                body.addClass("viewport-lg");
            }
        }
        $(window).on("resize", function() {
            responsiveClasses();
        }).resize();
        $(function() {
            $("#popup-search-box").removeClass("toggled");
            $("body").removeClass("open-search-box");
            $(".dl-search-icon").on("click", function(e) {
                e.stopPropagation();
                $("body").toggleClass("open-search-box");
                $("#popup-search").focus();
            });
            $("#popup-search-box input").on("click", function(e) {
                e.stopPropagation();
            });
            $(document).on("click", ".search-close, #searchbox-overlay", function(e) {
                e.preventDefault();
                $("body.open-search-box").removeClass("open-search-box");
            });
        });
        function sideBox() {
            $("body").removeClass("open-sidebox");
            $(document).on("click", ".dl-sidebox-icon", function(e) {
                e.preventDefault();
                $("body").toggleClass("open-sidebox");
            });
            $(document).on("click", "#sidebox-overlay", function(e) {
                e.preventDefault();
                $("body.open-sidebox").removeClass("open-sidebox");
            });
        }
        sideBox();
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationDuration = $this.data('duration');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay,
                    'animation-duration': $animationDuration
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        var mainSlider;
        var sliderOptions = {
            speed: 1000,
            autoplay: false,
            parallax: false,
            mousewheel: false,
            loop: true,
            effect: 'fade',
            a11y: false,
            pagination: {
                el: '.main-slider .slider-pagination',
                clickable: true,
                type: 'fraction',
            },
            navigation: {
                nextEl: '.main-slider .slider-button-next',
                prevEl: '.main-slider .slider-button-prev'
            }
        };
        sliderOptions.on = {
            slideChangeTransitionStart: function() {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find('[data-animation]');
                doAnimations(animatingElements);
            },
            resize: function() {
                this.update();
            }
        };
        mainSlider = new Swiper('.main-slider',sliderOptions);
        var mainSlider2;
        var sliderOptions2 = {
            speed: 1000,
            autoplay: false,
            parallax: false,
            mousewheel: false,
            loop: true,
            effect: 'fade',
            a11y: false,
            pagination: false,
            navigation: {
                nextEl: '.main-slider-2 .swiper-next',
                prevEl: '.main-slider-2 .swiper-prev'
            }
        };
        sliderOptions2.on = {
            slideChangeTransitionStart: function() {
                var swiper = this;
                var animatingElements = $(swiper.slides[swiper.activeIndex]).find('[data-animation]');
                doAnimations(animatingElements);
            },
            resize: function() {
                this.update();
            }
        };
        mainSlider2 = new Swiper('.main-slider-2',sliderOptions2);
        var swiperService = new Swiper(".service-carousel",{
            slidesPerView: "3",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-outside .swiper-next",
                prevEl: ".swiper-outside .swiper-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1
                }
            }
        });
        var swiperTestimonial = new Swiper(".testimonial-carousel",{
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".testi-pagination .swiper-pagination",
                clickable: true,
            },
            navigation: false,
        });
        var swiperTestimonial2 = new Swiper(".testimonial-carousel-2",{
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: {
                el: ".testi-pagination .swiper-pagination",
                clickable: true,
            },
            navigation: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25
                },
                767: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 1
                }
            }
        });
        var cursor = $(".dl-cursor")
          , linksCursor = $("a, .swiper-nav, .cursor-effect, .swiper-pagination > span, button, .menu-right-item > div")
          , crossCursor = $("#sidebox-overlay, #searchbox-overlay");
        $(window).on("mousemove", function(e) {
            cursor.css({
                transform: "translate(" + (e.clientX - 15) + "px," + (e.clientY - 15) + "px)",
                visibility: "inherit",
            });
        });
        $(window).on("mouseout", function() {
            cursor.css("visibility", "hidden");
        });
        linksCursor.each(function() {
            $(this).on("mouseleave", function() {
                cursor.removeClass("cursor-grow");
            });
            $(this).on("mouseover", function() {
                cursor.addClass("cursor-grow");
            });
        });
        crossCursor.each(function() {
            $(this).on("mouseleave", function() {
                cursor.removeClass("cross");
            });
            $(this).on("mouseover", function() {
                cursor.addClass("cross");
            });
        });
        var swiperTaxi = new Swiper(".taxi-carousel",{
            slidesPerView: "3",
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            autoplay: false,
            speed: 400,
            pagination: false,
            navigation: {
                nextEl: ".swiper-outside .swiper-next",
                prevEl: ".swiper-outside .swiper-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25
                },
                767: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 1
                }
            }
        });
        new VenoBox({
            selector: '.dl-video-popup, .dl-img-popup',
            bgcolor: 'transparent',
            numeration: true,
            infinigall: true,
            spinner: 'plane',
        });
        $('.date-picker').datetimepicker({
            timepicker: false,
            format: 'd/m/Y'
        });
        $('.time-picker').datetimepicker({
            datepicker: false,
            format: 'H:i',
            step: 5
        });
        $('select').niceSelect();
        var currentYear = new Date().getFullYear();
        $('#currentYear').append(currentYear);
        var scrollTop = $("#scroll-top");
        $(window).on("scroll", function() {
            var topPos = $(this).scrollTop();
            if (topPos > 100) {
                $("#scrollup").removeClass("hide");
                $("#scrollup").addClass("show");
            } else {
                $("#scrollup").removeClass("show");
                $("#scrollup").addClass("hide");
            }
        });
        $(scrollTop).on("click", function() {
            $("html, body").animate({
                scrollTop: 0,
            }, 200);
            return false;
        });
        if ($('.subscribe-form').length > 0) {
            $('.subscribe-form').ajaxChimp({
                language: 'en',
                callback: mailchimpCallback,
                url: "https://gmail.us4.list-manage.com/subscribe/post?u=540c52965f5180ae846e5e5a8&amp;id=4dbe9a9245&amp;f_id=0027a5ebf0"
            });
        }
        new WOW().init();
        $(scrollTop).on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        function mailchimpCallback(resp) {
            if (resp.result === 'success') {
                $('#subscribe-result').addClass('subs-result');
                $('.subscription-success').text(resp.msg).fadeIn();
                $('.subscription-error').fadeOut();
                setTimeout(function() {
                    $('#subscribe-result').removeClass('subs-result');
                    $('.subscription-success').fadeOut();
                }, 5000);
            } else if (resp.result === 'error') {
                $('#subscribe-result').addClass('subs-result');
                $('.subscription-error').text(resp.msg).fadeIn();
            }
        }
        $.ajaxChimp.translations.en = {
            'submit': 'Submitting...',
            0: 'We have sent you a confirmation email',
            1: 'Please enter your email',
            2: 'An email address must contain a single @',
            3: 'The domain portion of the email address is invalid (the portion after the @: )',
            4: 'The username portion of the email address is invalid (the portion before the @: )',
            5: 'This email address looks fake or invalid. Please enter a real email address'
        };
    });
}
)(jQuery);
