var hotelSwider = new Swiper('.hotel-slider', {
  // Optional parameters
    loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  effect: "coverflow",

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
    loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});