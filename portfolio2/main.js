/* ═══════════════════════════════════════════════════════
   JOHN MOORE PORTFOLIO — SHARED JS
   ═══════════════════════════════════════════════════════ */

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
    autoTimer = setInterval(() => goTo(current + 1, 'right'), 5000);
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