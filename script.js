document.documentElement.classList.add('js');
const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-menu-toggle]');
function onScroll(){ header?.classList.toggle('is-scrolled', window.scrollY > 10); }
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  toggle?.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const revealItems = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold:.12, rootMargin:'0px 0px -8% 0px' });
revealItems.forEach((el, index) => {
  if (!el.classList.contains('delay-1') && !el.classList.contains('delay-2')) {
    el.style.transitionDelay = `${Math.min((index % 3) * .055, .14)}s`;
  }
  io.observe(el);
});
