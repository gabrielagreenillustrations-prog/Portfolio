/* ============================================================================
   ROUTER & INTERACTIONS — SPA page switching, project detail rendering, mobile
   menu, and the contact form. Classic script; depends on globals from
   data/projects.js (PROJECTS, getImg). Loaded after it, before ticker.js.
   ============================================================================ */
function goPage(id) {
  document.querySelectorAll('.page').forEach(function(p){ p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(function(a){
    a.classList.toggle('active', a.dataset.page === id || (id === 'project' && a.dataset.page === 'home'));
  });
  window.scrollTo(0,0);
}

function goProject(id) {
  var p = PROJECTS[id];
  if(!p) return;
  var heroWrap = document.querySelector('#page-project .proj-hero');
  heroWrap.classList.toggle('proj-hero--contain', !!p.heroContain);
  var vid = getVid(id);
  var src = getImg(id);
  if (p.heroType === 'phone' && vid) {
    heroWrap.innerHTML = '<div class="proj-hero-phone-frame"><video src="' + vid + '" autoplay loop muted playsinline></video></div>';
  } else {
    heroWrap.innerHTML = vid
      ? '<video id="ph-vid" src="' + vid + '" autoplay loop muted playsinline></video>'
      : (src
        ? '<img id="ph-img" src="' + src + '" alt="' + p.title + '"/>'
        : '<div class="proj-hero-fill">' + p.title + '</div>');
  }
  document.getElementById('ph-eye').textContent   = p.eye;
  document.getElementById('ph-title').textContent = p.title;
  document.getElementById('ph-lead').textContent  = p.lead;
  document.getElementById('ph-meta').innerHTML = p.meta.map(function(m){
    return '<div class="proj-meta-item"><h4>' + m.l + '</h4><p>' + m.v + '</p></div>';
  }).join('');
  document.getElementById('ph-body').innerHTML = p.sections.map(function(s, i){
    if (s.layout === 'text-only') {
      var subHTML2 = s.sub ? '<span class="proj-section-sub">' + s.sub + '</span>' : '';
      return '<div class="proj-section proj-section--text-only"><div>'
        + '<h2 class="proj-section-title">' + s.title + '</h2>'
        + subHTML2
        + '<p class="proj-section-desc">' + s.desc + '</p>'
        + '</div></div>';
    }
    var sVid = s.vid ? getVid(s.vid) : null;
    var imgSrc = s.img ? getImg(s.img) : null;
    var imgHTML;
    if (sVid) {
      imgHTML = '<video src="' + sVid + '" autoplay loop muted playsinline></video>';
    } else if (imgSrc) {
      var imgStyle = s.style === 'phone' ? 'border-radius:0;width:100%;height:100%' : 'border-radius:0;width:100%;height:100%;object-fit:cover';
      imgHTML = '<img src="' + imgSrc + '" alt="' + s.title + '" style="' + imgStyle + '"/>';
    } else {
      imgHTML = '<div class="proj-section-img-fill">' + s.title + '</div>';
    }
    var cls = 'proj-section' + (s.flip ? ' rev' : '');
    var subHTML = s.sub ? '<span class="proj-section-sub">' + s.sub + '</span>' : '';
    var imgCls = 'proj-section-img' + (s.style === 'phone' ? ' proj-section-img--phone' : s.style === 'vid' ? ' proj-section-img--vid' : '');
    return '<div class="' + cls + '">'
      + '<div class="' + imgCls + '">' + imgHTML + '</div>'
      + '<div>'
      + '<h2 class="proj-section-title">' + s.title + '</h2>'
      + subHTML
      + '<p class="proj-section-desc">' + s.desc + '</p>'
      + '</div></div>';
  }).join('');
  goPage('project');
}

document.querySelectorAll('.pcard').forEach(function(c){
  var btn = c.querySelector('.pcard-btn');
  if(btn) btn.onclick = function(){ goProject(c.dataset.proj); };
});

document.getElementById('burger').onclick = function(){ document.getElementById('mob').classList.add('open'); };
function mobClose(){ document.getElementById('mob').classList.remove('open'); }

document.getElementById('cform').onsubmit = function(e){
  e.preventDefault();
  var b = this.querySelector('.cf-btn');
  b.textContent = 'Sending…'; b.disabled = true;
  var form = this;
  setTimeout(function(){
    document.getElementById('cf-ok').style.display = 'block';
    form.reset(); b.textContent = 'Send message →'; b.disabled = false;
  }, 1200);
};
