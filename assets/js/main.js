(function () {
  'use strict';

  window.trackEvent = function trackEvent(eventName, params) {
    if (typeof gtag === "function") {
      params = params || {};
      gtag("event", eventName, params);
    }
  };

  window.addEventListener('error', function(e) {
    if (e.target && (e.target.tagName === 'IMG' || e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT')) {
      return;
    }
    console.warn('TypeSkill: A non-critical error occurred. The page will continue to function.');
    e.preventDefault();
  });

  function safeGet(key, fallback) {
    try {
      var val = localStorage.getItem(key);
      return val !== null ? JSON.parse(val) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {}
  }

  window.safeGet = safeGet;
  window.safeSet = safeSet;

  var menuToggle = document.querySelector('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');

  if (menuToggle) {
    menuToggle.setAttribute('aria-controls', 'main-nav');
  }
  if (mainNav) {
    mainNav.id = 'main-nav';
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (item) {
        var isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
      }
    });
  });

  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.main-nav a');
  if (navLinks.length) {
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  (function() {
    if (localStorage.getItem('typeskill_cookie_consent')) return;
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.setAttribute('role', 'alert');
    banner.innerHTML =
      '<div style="max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">' +
      '<p style="margin:0;font-size:0.85rem;color:var(--text-secondary, #4B5563)">We use essential cookies for basic functionality. By continuing, you accept our <a href="cookie-policy.html" style="color:var(--primary, #2563EB);text-decoration:underline">Cookie Policy</a>.</p>' +
      '<button id="cookie-accept" class="btn btn-sm btn-primary" style="white-space:nowrap">Accept</button>' +
      '</div>';
    banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #E5E7EB;padding:12px 20px;z-index:9999;box-shadow:0 -4px 12px rgba(0,0,0,0.05);font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    document.body.appendChild(banner);
    document.getElementById('cookie-accept').addEventListener('click', function() {
      localStorage.setItem('typeskill_cookie_consent', 'true');
      banner.remove();
    });
  })();
})();
