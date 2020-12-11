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

$(window).scroll(function(){
  $('.newsletter').bgscroll({
    direction: 'bottom', // направление bottom или top
    bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
    debug: false, // Режим отладки
    min:0, // минимальное положение (в %) на которое может смещаться фон
    max:100, // максимальное положение (в %) на которое может смещаться фон
      });
  
});    


// $('.parallax-window').parallax({
//   imageSrc: 'img/newsletter-bg.jpg',
//   speed: 0.6,
  
//   });