// ========= mobile menu =========
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const menuLinks = document.querySelector('.js-menu-links');

  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
    !expanded ? fixedModalOverflow() : closeModalOverflow();
    // !expanded && setActiveLink(document.querySelectorAll('.navigation-link'));
  };

  menuBtnRef.addEventListener('click', toggleMenu);
  menuLinks.addEventListener('click', toggleMenu);
})();

// Fixed window when modal opened

function fixedModalOverflow() {
  document.querySelector('body').style.overflow = 'hidden';
}

function closeModalOverflow() {
  document.querySelector('body').style.overflow = 'unset';
}
