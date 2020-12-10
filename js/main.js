var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
    loop: true,

    // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },

  effect: "coverflow",

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

//creating google-map api

 ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.751505, 37.565479],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 15
        });
    }