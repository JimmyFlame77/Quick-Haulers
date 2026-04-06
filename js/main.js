// Quick Haulers — Consolidated JS
// Hamburger menu, desktop CTA, FAQ accordion, scroll animations

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

  // ── Fade-in on scroll ──
  var fadeTargets = document.querySelectorAll('section, .price-card, .svc-card, .post-card, .faq-item, .how-step');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeTargets.forEach(function(el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }
})();

// Global function for mobile menu close (used by onclick handlers)
function closeMobileMenu() {
  var mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.remove('open');
}
