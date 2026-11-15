// AppsRank site: mobile menu and header background on scroll.
(function () {
  'use strict';
  var header = document.querySelector('header');
  var btn = document.querySelector('.mobile-menu-btn');
  var nav = document.querySelector('.nav-links');
  function onScroll() { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (!btn || !nav) return;
  function setOpen(open) { nav.classList.toggle('active', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('active')); });
  document.addEventListener('click', function (e) { if (!btn.contains(e.target) && !nav.contains(e.target)) setOpen(false); });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
})();
