(function () {
  // An image whose file is not in place yet degrades to a labelled block
  // rather than a broken-image icon.
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    var swap = function () {
      if (img.dataset.swapped) return;
      img.dataset.swapped = '1';
      var ph = document.createElement('div');
      ph.className = 'media-missing';
      ph.textContent = img.getAttribute('data-fallback');
      img.replaceWith(ph);
    };
    img.addEventListener('error', swap);
    if (img.complete && img.naturalWidth === 0) swap();
  });

  // Click-to-play: the YouTube embed is only created on demand, so the page
  // costs nothing until someone actually wants the film. Without JS the inner
  // anchor still opens the video on YouTube.
  document.querySelectorAll('.watch-frame[data-yt]').forEach(function (frame) {
    frame.addEventListener('click', function (e) {
      e.preventDefault();
      var id = frame.getAttribute('data-yt');
      if (!id || frame.dataset.playing) return;
      frame.dataset.playing = '1';
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = frame.getAttribute('data-title') || 'Video player';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.setAttribute('allowfullscreen', '');
      frame.innerHTML = '';
      frame.appendChild(iframe);
    });
  });

  // Work-card hover captions
  document.querySelectorAll('[data-card]').forEach(function (card) {
    var cap = card.querySelector('[data-cap]');
    if (!cap) return;
    var show = function () { cap.style.opacity = '1'; cap.style.transform = 'translateY(0)'; };
    var hide = function () { cap.style.opacity = '0'; cap.style.transform = 'translateY(8px)'; };
    card.addEventListener('mouseenter', show);
    card.addEventListener('mouseleave', hide);
    card.addEventListener('focusin', show);
    card.addEventListener('focusout', hide);
  });

  // Scroll reveals
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  els.forEach(function (el) {
    el.style.transition = 'none';
    if (el.getAttribute('data-reveal') === 'rule') {
      el.style.transformOrigin = 'left center';
      el.style.transform = 'scaleX(0)';
    } else {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    }
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var kind = el.getAttribute('data-reveal');
      var delay = el.getAttribute('data-delay') || '0';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.transition = kind === 'rule'
            ? 'transform 400ms ease-out'
            : 'opacity 500ms ease-out, transform 500ms ease-out';
          el.style.transitionDelay = delay + 'ms';
          if (kind === 'rule') {
            el.style.transform = 'scaleX(1)';
          } else {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      });
      io.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -4% 0px' });

  els.forEach(function (el) { io.observe(el); });
})();
