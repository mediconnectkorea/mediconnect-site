document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.mobile-menu-toggle');
  const close = document.querySelector('.mobile-menu-close');
  const backdrop = document.querySelector('.mobile-menu-backdrop');
  const menu = document.querySelector('.menu');

  if (!nav || !toggle || !close || !backdrop || !menu) return;

  const setMenuOpen = (isOpen) => {
    nav.classList.toggle('menu-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    backdrop.hidden = !isOpen;
  };

  toggle.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('menu-open'));
  });
  close.addEventListener('click', () => setMenuOpen(false));
  backdrop.addEventListener('click', () => setMenuOpen(false));
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
});
