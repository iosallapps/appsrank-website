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

/* overscroll:start  status bar color + rubber-band stretch (same as vistoapps.com) */
(function () {
    var meta = document.querySelector('meta[name="theme-color"]');
    var root = document.documentElement;
    var top = meta ? meta.getAttribute("content") : "";
    var scrolled = meta ? meta.getAttribute("data-scrolled") || top : "";
    var last = top, pending = false, stretched = false;
    var apply = function () {
        pending = false;
        var y = window.scrollY;
        var theme = y > 8 ? scrolled : top;
        if (meta && theme !== last) { meta.setAttribute("content", theme); last = theme; }
        if (y < 0) { root.style.setProperty("--osy", String(-y)); stretched = true; }
        else if (stretched) { root.style.removeProperty("--osy"); stretched = false; }
    };
    window.addEventListener("scroll", function () {
        if (!pending) { pending = true; window.requestAnimationFrame(apply); }
    }, { passive: true });
    apply();
})();
/* overscroll:end */
