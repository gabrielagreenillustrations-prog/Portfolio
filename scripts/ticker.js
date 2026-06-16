/* ============================================================================
   TICKER — 3D prism rotation of the hero phrases (infinite loop).
   ⚠️ Do NOT change the rotation effect.
   Supports any number of phrases (N faces, 360/N degrees per step).
   Height adapts to the tallest phrase at its natural wrapped height.
   ============================================================================ */
(function(){
  var outer = document.getElementById('to');
  var stage = document.getElementById('tt');
  if(!outer || !stage) return;

  var faces  = Array.from(stage.querySelectorAll('.ticker-face'));
  var h1s    = faces.map(function(f){ return f.querySelector('h1'); });
  var N      = faces.length;
  var STEP   = 360 / N;          // degrees per face for an N-sided prism
  var HOLD   = 2000;             // ms between rotations
  var itemH  = 0;
  var tz     = 0;
  var idx    = 0;
  var timer  = null;
  var paused = false;

  function measure(){
    stage.style.transition = 'none';
    stage.style.transform  = 'none';
    faces.forEach(function(f){
      f.style.transform = 'none';
      f.style.position  = 'static'; // let h1 natural height push parent
    });
    outer.style.height = 'auto';
    void stage.offsetHeight;

    // Measure each h1 at its natural (wrapping) height — no shrinking
    var maxH = 0;
    h1s.forEach(function(h){
      if(!h) return;
      var hh = h.offsetHeight;
      if(hh > maxH) maxH = hh;
    });

    if(maxH < 10){ setTimeout(measure, 120); return; }
    itemH = Math.ceil(maxH);
    outer.style.height = itemH + 'px';

    // Restore absolute positioning for the prism
    faces.forEach(function(f){ f.style.position = 'absolute'; });

    // N-sided prism geometry: tz = apothem of regular N-gon with "radius" = itemH/2
    tz = (itemH / 2) / Math.tan(Math.PI / N);
    faces.forEach(function(f, i){
      f.style.transform = 'rotateX(' + (-(STEP * i)) + 'deg) translateZ(' + tz + 'px)';
    });

    void stage.offsetHeight;
    stage.style.transition = 'transform 1.1s cubic-bezier(.34,1.56,.4,1)';
    idx = 0;
    stage.style.transform = 'translateZ(' + (-tz) + 'px) rotateX(0deg)';

    if(timer) clearInterval(timer);
    timer = setInterval(next, HOLD);
  }

  function next(){
    if(paused) return;
    idx++;
    stage.style.transform = 'translateZ(' + (-tz) + 'px) rotateX(' + (idx * STEP) + 'deg)';
  }

  outer.addEventListener('mouseenter', function(){ paused = true; });
  outer.addEventListener('mouseleave', function(){ paused = false; });

  function init(){
    if(document.fonts && document.fonts.ready){
      document.fonts.ready.then(function(){ setTimeout(measure, 50); });
    } else {
      setTimeout(measure, 200);
    }
  }
  if(document.readyState === 'complete') init();
  else window.addEventListener('load', init);

  window.addEventListener('resize', function(){ setTimeout(measure, 150); });
})();
