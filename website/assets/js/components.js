// assets/js/components.js

export const TopBar = 
  <div class="bg-amber-500 text-white text-sm">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-2 px-4">
      <p class="font-medium">
        Reliable Taxi Service & Transport Solutions! Best Taxi Services in Delhi.
      </p>
      <a href="https://www.arshdeeptravels.com"
         class="inline-flex items-center gap-1 hover:underline">
        <i class="fa fa-globe"></i>
        <span>Our Network</span>
      </a>
    </div>
  </div>
;

export const Header = 
  <header class="shadow">
    <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between py-3 px-4">
      <a href="index.html" class="flex items-center gap-3">
        <img src="assets/img/logo-1.png" alt="Logo"
             class="h-16 md:h-20 object-contain" />
      </a>
      <div class="hidden lg:flex gap-8 text-sm">
        <div class="flex items-center gap-2">
          <i class="las la-phone-volume text-amber-500 text-xl"></i>
          <div>
            <span class="block text-xs">Call us now</span>
            <a href="tel:918586870492" class="font-semibold">+91 85868 70492</a>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <i class="las la-envelope-open text-amber-500 text-xl"></i>
          <div>
            <span class="block text-xs">Email now</span>
            <a href="mailto:dstravel14@gmail.com" class="font-semibold">
              dstravel14@gmail.com
            </a>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <i class="las la-map-marked-alt text-amber-500 text-xl"></i>
          <div class="text-xs">
            <span class="block font-semibold">Location</span>
            <span>3rd Floor, N-92, Narayan Nagar, Laxmi Nagar, New Delhi</span>
          </div>
        </div>
      </div>
      <button id="mobile-menu-btn"
              class="lg:hidden inline-flex flex-col gap-1">
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
        <span class="w-6 h-0.5 bg-gray-800"></span>
      </button>
    </div>
    <nav class="border-t">
      <div class="max-w-6xl mx-auto flex items-center justify-between px-4">
        <ul id="main-nav"
            class="hidden lg:flex gap-6 text-sm font-medium">
          <li><a href="index.html" class="py-3 inline-block">Home</a></li>
          <li><a href="about.html" class="py-3 inline-block">About Us</a></li>
          <li><a href="tour-packages.html" class="py-3 inline-block">Tour Packages</a></li>
          <li><a href="services.html" class="py-3 inline-block">Services</a></li>
          <li><a href="contact.html" class="py-3 inline-block">Contact</a></li>
        </ul>
        <a href="#booking"
           class="hidden lg:inline-flex items-center gap-2 bg-amber-500 text-white text-sm px-4 py-2 rounded">
          <i class="las la-bus"></i>
          <span>Book a Taxi</span>
        </a>
      </div>
      <ul id="mobile-nav"
          class="lg:hidden hidden flex-col border-t text-sm font-medium px-4 pb-3">
        <li><a href="index.html" class="block py-2">Home</a></li>
        <li><a href="about.html" class="block py-2">About Us</a></li>
        <li><a href="tour-packages.html" class="block py-2">Tour Packages</a></li>
        <li><a href="services.html" class="block py-2">Services</a></li>
        <li><a href="contact.html" class="block py-2">Contact</a></li>
      </ul>
    </nav>
  </header>
;

export const HeroHome = 
  <section class="bg-[url('assets/img/tourmanali.webp')] bg-cover bg-center relative">
    <div class="bg-black/60">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 px-4">
        <div class="text-white space-y-4 md:w-1/2">
          <p class="text-sm uppercase tracking-wide">
            Your trustable, safe and affordable partner
          </p>
          <h1 class="text-3xl md:text-4xl font-bold leading-snug">
            Book Your Taxi Now At Affordable Price!
          </h1>
          <p class="text-sm md:text-base max-w-xl">
            Travel securely with professional drivers and well‑maintained cars across Delhi and popular outstation routes.
          </p>
          <div class="flex flex-wrap gap-3">
            <a href="#booking"
               class="bg-amber-500 px-5 py-2 rounded text-sm font-semibold">
              Book Now
            </a>
            <a href="tel:918586870492"
               class="border border-white px-5 py-2 rounded text-sm font-semibold">
              Call Now
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="assets/img/car-1.webp" alt="Car"
               class="w-full max-w-md mx-auto drop-shadow-xl" />
        </div>
      </div>
    </div>
  </section>
;

export const Footer = 
  <footer class="bg-slate-900 text-gray-300 mt-12">
    <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 py-10 px-4">
      <div>
        <img src="assets/img/logo-1.png"
             alt="Logo"
             class="h-20 bg-white p-2 rounded mb-4" />
        <p class="text-sm">
          We provide taxi, outstation and tour packages from Delhi at affordable prices.
        </p>
      </div>
      <div>
        <h3 class="text-white font-semibold mb-3">Contact</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <span class="block font-medium">Phone</span>
            <a href="tel:918586870492" class="hover:text-amber-400">
              +91 85868 70492
            </a>
          </li>
          <li>
            <span class="block font-medium">Email</span>
            <a href="mailto:dstravel14@gmail.com" class="hover:text-amber-400">
              dstravel14@gmail.com
            </a>
          </li>
          <li>
            <span class="block font-medium">Address</span>
            <span>3rd Floor, N‑92, Narayan Nagar, Laxmi Nagar, New Delhi</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-white font-semibold mb-3">Quick Links</h3>
        <ul class="space-y-1 text-sm">
          <li><a href="index.html" class="hover:text-amber-400">Home</a></li>
          <li><a href="about.html" class="hover:text-amber-400">About Us</a></li>
          <li><a href="services.html" class="hover:text-amber-400">Services</a></li>
          <li><a href="tour-packages.html" class="hover:text-amber-400">Tour Packages</a></li>
          <li><a href="contact.html" class="hover:text-amber-400">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3 class="text-white font-semibold mb-3">Book by Call</h3>
        <p class="text-sm mb-3">
          24x7 taxi booking support for airport, local and outstation rides.
        </p>
        <a href="tel:918586870492"
           class="inline-flex items-center gap-2 bg-amber-500 text-white text-sm px-4 py-2 rounded">
          <i class="las la-phone-volume text-lg"></i>
          <span>Call for Taxi</span>
        </a>
      </div>
    </div>
    <div class="border-t border-slate-800">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 py-3 px-4">
        <p>© ${new Date().getFullYear()} Arsh Deep Travels. All rights reserved.</p>
        <p>Car Rental in Delhi, Airport Taxi, Outstation Cabs.</p>
      </div>
    </div>
  </footer>
;
