// Quick Haulers — Consolidated JS
// Hamburger menu, desktop CTA, FAQ accordion

(function() {
  'use strict';

  // ── Desktop CTA visibility ──
  var cta = document.getElementById('nav-cta-desktop');
  if (cta) {
    if (window.innerWidth >= 768) cta.style.display = 'inline-block';
    window.addEventListener('resize', function() {
      cta.style.display = window.innerWidth >= 768 ? 'inline-block' : 'none';
    });
  }

  // ── Hamburger menu toggle ──
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
  }

  // ── FAQ accordion ──
  document.querySelectorAll('.faq-q').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = this.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) {
        i.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

// Global function for mobile menu close (used by onclick handlers)
function closeMobileMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}
