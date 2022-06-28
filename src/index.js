

// ========= header - scroll =========

window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
  const header = document.getElementById('header');
  const headerOffsetTrigger = header.offsetTop;
  const pageOffset = window.pageYOffset;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('js-no-transparency');
  } else {
    header.classList.remove('js-no-transparency');
  }
}

// ========= mobile menu =========
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    !expanded ? fixedModalOverflow() : closeModalOverflow();
    !expanded &&
      setActiveLink(document.querySelectorAll('.modal-menu__navigation-link'));
  });
})();

// Fixed window when modal opened
function fixedModalOverflow() {
  document.querySelector('body').style.overflow = 'hidden';
}

function closeModalOverflow() {
  document.querySelector('body').style.overflow = 'unset';
}

// Set active nav link
function setActiveLink(arr) {
  for (let index = 0; index < arr.length; index++) {
    const link = arr[index];

    if (link.href === window.location.href) {
      link.classList.add('active-nav-link');
    }
  }
}
// ========= modal window =========
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();






