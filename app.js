(function () {
  // Assemble the email address at runtime so it isn't sitting in the page text for scrapers.
  var u = 'evawlek.mailliw'.split('').reverse().join('') , d = 'moc.liamg'.split('').reverse().join('');
  document.querySelectorAll('.em').forEach(function (a) {
    var s = a.getAttribute('data-s') || 'Website enquiry';
    if (a.tagName === 'A' && a.getAttribute('href') === '#contact' && a.classList.contains('small')) return; // nav button scrolls to contact
    a.setAttribute('href', 'mailto:' + u + '@' + d + '?subject=' + encodeURIComponent(s));
  });
  // Fade-in on scroll
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.12 });
  els.forEach(function (e) { io.observe(e); });
})();
