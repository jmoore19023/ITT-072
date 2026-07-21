/* ═══════════════════════════════════════════════════════
   JOHN MOORE PORTFOLIO — SHARED JS
   ═══════════════════════════════════════════════════════ */

// ── One-time corner sweep grid animation ─────────────────
(function initGrid() {
  const canvas = document.getElementById('heroGrid');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  const CELL = 48;
  const RISE = 7;          // max rise in px — slightly softer
  const DURATION = 5000;   // total sweep duration ms — slower and more cinematic
  const HOLD = 600;        // how long each cell stays raised
  const REPEAT_EVERY = 15000; // repeat every 15 seconds
  let W, H, cells = [], animating = false;

  function resize() {
    const hero = canvas.closest('.hero');
    W = canvas.width  = hero ? hero.offsetWidth  : window.innerWidth;
    H = canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    buildCells();
  }

  function buildCells() {
    cells = [];
    const cols = Math.ceil(W / CELL) + 1;
    const rows = Math.ceil(H / CELL) + 1;
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        // Distance from top-left corner drives timing
        const dist = Math.sqrt(col * col + row * row);
        cells.push({ col, row, dist, rise: 0, state: 'idle' });
      }
    }
    // Normalize dist to 0-1
    const maxDist = Math.max(...cells.map(c => c.dist));
    cells.forEach(c => c.normDist = c.dist / maxDist);
  }

  function getColors() {
    const dark = html.getAttribute('data-theme') === 'dark';
    return {
      fill:       dark ? 'rgba(34,211,238,0.03)' : 'rgba(34,211,238,0.04)',
      stroke:     dark ? 'rgba(34,211,238,0.08)' : 'rgba(34,211,238,0.07)',
      riseStroke: dark ? 'rgba(34,211,238,0.20)' : 'rgba(34,211,238,0.15)',
      riseFill:   dark ? 'rgba(34,211,238,0.06)' : 'rgba(34,211,238,0.05)',
    };
  }

  function draw(now) {
    ctx.clearRect(0, 0, W, H);
    const c = getColors();
    let stillMoving = false;

    cells.forEach(cell => {
      // Trigger time based on distance from top-left
      const triggerAt = cell.normDist * (DURATION - HOLD);
      const elapsed = now - startTime;

      if (elapsed >= triggerAt && cell.state === 'idle') {
        cell.state = 'rising';
        cell.riseStart = now;
      }
      if (cell.state === 'rising') {
        const progress = Math.min((now - cell.riseStart) / 180, 1);
        cell.rise = easeOut(progress) * RISE;
        if (progress >= 1) { cell.state = 'settling'; cell.settleStart = now; }
        stillMoving = true;
      }
      if (cell.state === 'settling') {
        const progress = Math.min((now - cell.settleStart) / 300, 1);
        cell.rise = RISE * (1 - easeIn(progress));
        if (progress >= 1) { cell.rise = 0; cell.state = 'done'; }
        stillMoving = true;
      }

      const x = cell.col * CELL + 0.5;
      const y = cell.row * CELL - cell.rise + 0.5;
      const w = CELL - 1;
      const h = CELL - 1;
      const raised = cell.rise > 0.5;

      ctx.fillStyle   = raised ? c.riseFill   : c.fill;
      ctx.strokeStyle = raised ? c.riseStroke : c.stroke;
      ctx.lineWidth   = 0.75;
      ctx.fillRect(x, y, w, h);
      ctx.strokeRect(x, y, w, h);
    });

    if (stillMoving) {
      requestAnimationFrame(draw);
    } else {
      // All done — schedule next run
      setTimeout(() => requestAnimationFrame(start), REPEAT_EVERY);
    }
  }

  function easeOut(t) { return 1 - Math.pow(1 - t, 2); }
  function easeIn(t)  { return t * t; }

  let startTime;
  function start(timestamp) {
    // Reset all cells before each run
    cells.forEach(c => { c.rise = 0; c.state = 'idle'; });
    startTime = timestamp;
    requestAnimationFrame(draw);
  }

  setTimeout(() => {
    resize();
    requestAnimationFrame(start);
  }, 200);

  window.addEventListener('resize', () => { resize(); });
})();

// ── Theme toggle ──────────────────────────────────────────
const html      = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const saved     = localStorage.getItem('jm-theme') || 'dark';
html.setAttribute('data-theme', saved);
updateThemeIcon(saved);

toggleBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('jm-theme', next);
  updateThemeIcon(next);
});
function updateThemeIcon(theme) {
  toggleBtn.textContent = theme === 'dark' ? '☀' : '☾';
}

// ── Hamburger nav ─────────────────────────────────────────
const navToggle  = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    primaryNav.classList.toggle('open');
  });
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Project rotator ───────────────────────────────────────
const slides     = document.querySelectorAll('.rotator-slide');
const dots       = document.querySelectorAll('.rotator-dot');
const prevBtn    = document.getElementById('rotatorPrev');
const nextBtn    = document.getElementById('rotatorNext');
const currentEl  = document.getElementById('rotatorCurrent');
const totalEl    = document.getElementById('rotatorTotal');

if (slides.length) {
  let current   = 0;
  let autoTimer = null;

  if (totalEl) totalEl.textContent = slides.length;

  function goTo(index, direction = 'right') {
    slides[current].classList.remove('active', 'slide-left');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (direction === 'left') slides[current].classList.add('slide-left');
    dots[current].classList.add('active');
    if (currentEl) currentEl.textContent = current + 1;
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1, 'right'), 8000);
  }
  function stopAuto() {
    if (autoTimer) clearInterval(autoTimer);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1, 'left'); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1, 'right'); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index);
      stopAuto();
      goTo(idx, idx > current ? 'right' : 'left');
      startAuto();
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { stopAuto(); goTo(current - 1, 'left'); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1, 'right'); startAuto(); }
  });

  startAuto();
}

// ── Expandable project cards ──────────────────────────────
let activeId   = null;
let activeCard = null;

window.toggleDetail = function(id, card) {
  if (activeId === id) { closeDetail(id); return; }
  if (activeId) closeDetail(activeId);
  const panel = document.getElementById('detail-' + id);
  if (!panel) return;
  panel.classList.add('open');
  card.classList.add('active');
  card.setAttribute('aria-expanded', 'true');
  activeId   = id;
  activeCard = card;
  setTimeout(() => panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
};

window.closeDetail = function(id) {
  const panel = document.getElementById('detail-' + id);
  if (panel) panel.classList.remove('open');
  if (activeCard) {
    activeCard.classList.remove('active');
    activeCard.setAttribute('aria-expanded', 'false');
  }
  activeId = null; activeCard = null;
};

// ── Contact form ──────────────────────────────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#10B981';
    btn.disabled = true;
  });
}