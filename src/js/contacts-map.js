// ========= contacts map modal window =========
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacts1-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacts1-close]'),
    modal: document.querySelector('[data-modal-contacts1]'),
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