(function () {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const chip = document.getElementById('cursor-chip');
  if (!chip) return;

  // Chip follows the real cursor (instant — no lerp needed)
  document.addEventListener('mousemove', e => {
    chip.style.left = e.clientX + 'px';
    chip.style.top  = e.clientY + 'px';
  });

  // ── Chip label map ────────────────────────────────────────────────────
  const SELECTOR = 'a, button, input, textarea, select, [data-cursor], [role="button"], .pcard';

  function getLabel(el) {
    if (el.dataset.cursor) return el.dataset.cursor;
    if (el.closest('.pcard'))                                        return 'view';
    if (el.closest('[download]') || el.matches('[download]'))        return 'download';
    if (el.closest('a[href^="mailto"]'))                             return 'email';
    if (el.closest('a[target="_blank"]'))                            return '↗';
    if (el.closest('.nav-cta'))                                      return 'hire me';
    if (el.matches('[type="submit"], .cf-btn') || el.closest('[type="submit"], .cf-btn')) return 'send';
    if (el.matches('input, textarea'))                               return 'type';
    return null; // generic → no chip
  }

  function show(label) {
    chip.textContent = label;
    chip.classList.add('is-visible');
  }

  function hide() {
    chip.classList.remove('is-visible');
  }

  document.addEventListener('mouseover', e => {
    const target = e.target.closest(SELECTOR);
    if (!target) return;
    const label = getLabel(target);
    if (label) show(label);
  });

  document.addEventListener('mouseout', e => {
    const target = e.target.closest(SELECTOR);
    if (target && !target.contains(e.relatedTarget)) hide();
  });
})();
