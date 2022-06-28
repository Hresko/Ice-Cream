// ========= mobile menu modal window =========
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-menu-close]'),
    modal: document.querySelector('[data-modal-menu]'),
    body: document.querySelector('#body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-menu-is-open');
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
