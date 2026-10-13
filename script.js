const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '✕' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) { menuToggle.textContent = '☰'; menuToggle.setAttribute('aria-label', 'Open navigation'); }
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get('name') || '').trim();
  const vehicle = String(data.get('vehicle') || '').trim();
  const issue = String(data.get('issue') || '').trim();
  const location = String(data.get('location') || '').trim();
  const message = `Hi Ducar Multiservice, I'd like to request vehicle service.\nName: ${name}\nVehicle: ${vehicle}\nIssue: ${issue}${location ? `\nLocation: ${location}` : ''}`;
  window.open(`https://wa.me/16234551677?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
