(() => {
  {
  const refs = {
    IceCreamBtn: document.querySelector('[ice-cream-btn]'),
    IceCreamOverlay: document.querySelector('[ice-cream-overlay]'),
    IceCreamBtnRotate: document.querySelector('[ice-cream-btn-rotate]'),
    IceCreamCardActive: document.querySelector('[ice-cream-card-activation]'),
  };

  refs.IceCreamBtn.addEventListener('click', toggleOverlay);

  function toggleOverlay() {
    refs.IceCreamOverlay.classList.toggle('overlay-shown');
    refs.IceCreamBtnRotate.classList.toggle('btn-icon-rotetion');
    refs.IceCreamCardActive.classList.toggle('card-is-active');
    }
  }

  {
    const refs = {
      IceCoffeeBtn: document.querySelector('[ice-coffee-btn]'),
      IceCoffeeOverlay: document.querySelector('[ice-coffee-overlay]'),
      IceCoffeeBtnRotate: document.querySelector('[ice-coffee-btn-rotate]'),
      IceCoffeeCardActive: document.querySelector('[ice-coffee-card-activation]'),
    };

    refs.IceCoffeeBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.IceCoffeeOverlay.classList.toggle('overlay-shown');
      refs.IceCoffeeBtnRotate.classList.toggle('btn-icon-rotetion');
      refs.IceCoffeeCardActive.classList.toggle('card-is-active');
    }
  }

  {
    const refs = {
      MilkshakesBtn: document.querySelector('[milkshakes-btn]'),
      MilkshakesOverlay: document.querySelector('[milkshakes-overlay]'),
      MilkshakesBtnRotate: document.querySelector('[milkshakes-btn-rotate]'),
      MilkshakesCardActive: document.querySelector('[milkshakes-card-activation]'),
    };

    refs.MilkshakesBtn.addEventListener('click', toggleOverlay);

    function toggleOverlay() {
      refs.MilkshakesOverlay.classList.toggle('overlay-shown');
      refs.MilkshakesBtnRotate.classList.toggle('btn-icon-rotetion');
      refs.MilkshakesCardActive.classList.toggle('card-is-active');
    }
  }
}
)();