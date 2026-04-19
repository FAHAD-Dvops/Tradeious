/* ============================================
   Tradeious Global — Shared Components
   Navigation & Footer injected via JS
   ============================================ */

/**
 * Determines the current page from the URL pathname.
 * @returns {string} Current page identifier
 */
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.endsWith('about.html') || path.endsWith('/about')) return 'about';
  if (path.endsWith('fmcgious.html') || path.endsWith('/fmcgious')) return 'fmcgious';
  if (path.endsWith('tyre-baba.html') || path.endsWith('/tyre-baba')) return 'tyre-baba';
  if (path.endsWith('contact.html') || path.endsWith('/contact')) return 'contact';
  if (path.endsWith('inquiry.html') || path.endsWith('/inquiry')) return 'inquiry';
  return 'home';
}

/**
 * Generates CSS classes for a navigation link.
 * @param {string} page - The page this link targets
 * @param {string} activePage - The currently active page
 * @returns {string} CSS class string
 */
function navLinkClasses(page, activePage) {
  const base = 'font-serif font-bold text-lg transition-colors duration-300';
  if (page === activePage) {
    return `${base} text-[#004A99] dark:text-[#abc7ff] border-b-2 border-[#004A99] pb-1`;
  }
  return `${base} text-[#263143] dark:text-[#cfdaf2] hover:text-[#004A99]`;
}

/**
 * Renders the shared navigation bar.
 */
function renderNavigation() {
  const activePage = getCurrentPage();
  const navContainer = document.getElementById('site-nav');
  if (!navContainer) return;

  const links = [
    { page: 'home', label: 'Home', href: 'index.html' },
    { page: 'about', label: 'About', href: 'about.html' },
    { page: 'fmcgious', label: 'FMCGIOUS', href: 'fmcgious.html' },
    { page: 'tyre-baba', label: 'Tyre Baba', href: 'tyre-baba.html' },
    { page: 'contact', label: 'Contact', href: 'contact.html' },
  ];

  const desktopLinks = links.map(l =>
    `<a class="${navLinkClasses(l.page, activePage)}" href="${l.href}">${l.label}</a>`
  ).join('\n');

  const mobileLinks = links.map(l =>
    `<a class="block font-serif font-bold text-lg text-[#263143] dark:text-[#cfdaf2] hover:text-[#004A99] transition-colors" href="${l.href}">${l.label}</a>`
  ).join('\n');

  navContainer.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-[#ffffff]/80 dark:bg-[#111c2d]/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div class="flex justify-between items-center max-w-7xl mx-auto px-8 py-4">
        <a href="index.html" class="flex items-center gap-3 no-underline group">
          <img src="assets/images/logo.png" alt="Tradeious Logo" class="h-14 w-auto drop-shadow-sm group-hover:scale-105 transition-transform" />
          <div class="flex flex-col">
            <span class="text-xl font-black text-[#111c2d] dark:text-[#f9f9ff] tracking-tighter font-serif leading-none">Tradeious</span>
            <span class="text-[8px] uppercase tracking-[0.3em] font-bold text-[#004A99] opacity-70">Global Trading</span>
          </div>
        </a>
        <div class="hidden md:flex gap-8 items-center">
          ${desktopLinks}
          <a href="inquiry.html" class="bg-gradient-to-br from-[#00346f] to-[#004a99] text-white px-6 py-2 rounded-md font-bold scale-95 active:scale-90 transition-transform no-underline inline-block">Inquiry</a>
        </div>
        <button class="md:hidden text-[#111c2d] dark:text-[#f9f9ff]" onclick="toggleMobileMenu()">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-[#ffffff]/95 dark:bg-[#111c2d]/95 backdrop-blur-xl px-8 pb-6 space-y-4">
        ${mobileLinks}
        <a href="inquiry.html" class="block bg-gradient-to-br from-[#00346f] to-[#004a99] text-white px-6 py-2 rounded-md font-bold text-center no-underline">Inquiry</a>
      </div>
    </nav>
  `;
}

/**
 * Toggles the mobile navigation menu.
 */
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

/**
 * Renders the shared footer.
 */
function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-[#f0f3ff] dark:bg-[#263143] w-full mt-20">
      <div class="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <img src="assets/images/logo.png" alt="Tradeious Logo" class="h-12 w-auto grayscale contrast-125" />
            <div class="text-xl font-bold text-[#111c2d] dark:text-[#f9f9ff] font-serif uppercase tracking-tighter">Tradeious</div>
          </div>
          <p class="text-[#263143] dark:text-[#cfdaf2] text-sm leading-relaxed mb-6">
            A global leader in diversified trade, logistics, and industrial supply management.
          </p>
          <div class="flex gap-4">
            <span class="material-symbols-outlined text-[#004A99] opacity-80 hover:opacity-100 cursor-pointer">language</span>
            <span class="material-symbols-outlined text-[#004A99] opacity-80 hover:opacity-100 cursor-pointer">share</span>
            <span class="material-symbols-outlined text-[#004A99] opacity-80 hover:opacity-100 cursor-pointer">email</span>
          </div>
        </div>
        <div>
          <h5 class="font-serif font-bold text-[#004A99] mb-4">Core Divisions</h5>
          <ul class="space-y-3">
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="fmcgious.html">FMCGIOUS</a></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="tyre-baba.html">Tyre Baba</a></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="about.html">About Us</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-serif font-bold text-[#004A99] mb-4">Corporate</h5>
          <ul class="space-y-3">
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="about.html">Corporate Governance</a></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="contact.html">Privacy Policy</a></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all" href="contact.html">Annual Reports</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-serif font-bold text-[#004A99] mb-4">Contact Us</h5>
          <ul class="space-y-3">
            <li><div class="text-[#263143] dark:text-[#cfdaf2] text-xs leading-relaxed max-w-[150px]">TAREEQ AL MAJD TR., Office No. 10N, Khan Saheb Building, Al Majaz Area, Sharjah, UAE</div></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all font-bold" href="mailto:SALE@TRADEIOUS.COM">SALE@TRADEIOUS.COM</a></li>
            <li><a class="text-[#263143] dark:text-[#cfdaf2] hover:underline decoration-2 transition-all font-bold" href="tel:0097157421472">00971 5 742 1472</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-8 py-6 border-t border-[#c2c6d3]/20 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
        <p>© ${new Date().getFullYear()} Tradeious Global Trading Group. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="contact.html" class="hover:text-primary transition-colors">Terms of Trade</a>
          <a href="contact.html" class="hover:text-primary transition-colors">Compliance</a>
          <a href="index.html" class="hover:text-primary transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  `;
}

/* --- Initialize on DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderFooter();
});
