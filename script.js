const header=document.querySelector('[data-header]');
const nav=document.querySelector('[data-nav]');
const toggle=document.querySelector('[data-menu-toggle]');
function onScroll(){header?.classList.toggle('is-scrolled', window.scrollY>12)}
window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.classList.toggle('is-open', open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');toggle?.classList.remove('is-open');toggle?.setAttribute('aria-expanded','false')}));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=el.classList.contains('delay-1')||el.classList.contains('delay-2')?'':`${Math.min(i%4*.06,.18)}s`;io.observe(el)});
document.querySelectorAll('form [required]').forEach(field=>{field.addEventListener('invalid',()=>{field.setCustomValidity('Por favor completa este campo para preparar el contacto.')});field.addEventListener('input',()=>field.setCustomValidity(''));field.addEventListener('change',()=>field.setCustomValidity(''))});
