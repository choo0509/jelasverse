/* ── Burger menu ──────────────────────────────────── */
const burger = document.getElementById('burger');
const navMob = document.getElementById('navMob');
burger.addEventListener('click', () => {
  const o = burger.classList.toggle('open');
  navMob.classList.toggle('open', o);
  burger.setAttribute('aria-expanded', o);
  navMob.setAttribute('aria-hidden', !o);
});
navMob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open');
  navMob.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  navMob.setAttribute('aria-hidden', 'true');
}));

/* ── Hero card transform ─────────────────────────── */
const heroStf  = document.getElementById('heroStf');
const heroCard = document.getElementById('heroCard');
heroStf.addEventListener('click', () => {
  heroCard.innerHTML = `
    <div class="hfc-label" style="color:var(--sage-dark)">BENTUK LAIN — Peta Konsep</div>
    <div style="text-align:center;padding:8px 0">
      <div style="display:inline-block;background:var(--brown);color:#fff;font-size:12px;font-weight:700;padding:5px 14px;border-radius:999px;margin-bottom:6px">PERJANJIAN MALAYSIA</div>
      <div style="font-size:11px;color:var(--ink4);margin-bottom:6px">ditandatangani</div>
      <div style="display:flex;justify-content:center;gap:24px">
        <div style="text-align:center">
          <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink4)">Bila?</div>
          <div style="color:var(--terra);font-size:16px">↓</div>
          <div style="font-size:13px;font-weight:700;color:var(--brown);background:var(--linen);padding:3px 10px;border-radius:999px">9 Julai 1963</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ink4)">Di mana?</div>
          <div style="color:var(--terra);font-size:16px">↓</div>
          <div style="font-size:13px;font-weight:700;color:var(--brown);background:var(--linen);padding:3px 10px;border-radius:999px">London</div>
        </div>
      </div>
    </div>
    <div style="text-align:center;font-size:12px;font-weight:600;color:var(--sage-dark);margin-top:8px;padding:6px;background:var(--sage-light);border-radius:var(--r8)">Same idea. Different shape.</div>`;
});

/* ── Demo widget tabs ─────────────────────────────── */
const tabB = document.getElementById('dtb-before');
const tabA = document.getElementById('dtb-after');
const paneB = document.getElementById('dp-before');
const paneA = document.getElementById('dp-after');
function showTab(t) {
  const b = t === 'before';
  tabB.classList.toggle('on', b);  tabA.classList.toggle('on', !b);
  tabB.setAttribute('aria-selected', b); tabA.setAttribute('aria-selected', !b);
  paneB.classList.toggle('on', b); paneA.classList.toggle('on', !b);
}
tabB.addEventListener('click', () => showTab('before'));
tabA.addEventListener('click', () => showTab('after'));
document.getElementById('demoStf').addEventListener('click', () => showTab('after'));

/* ── Scroll reveal ────────────────────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.07, rootMargin: '0px 0px -24px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ── Progress bars ────────────────────────────────── */
const pio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-to]').forEach(b => { b.style.width = b.dataset.to + '%'; });
      pio.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.bc5').forEach(el => pio.observe(el));

/* ── Smooth scroll ────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});