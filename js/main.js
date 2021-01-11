$(document).ready(function () {
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
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

var menuButton = $(".menu-button");
menuButton.on('click', function() {
  
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');

});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    
  }
  
   function closeModal(event) {
     event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  
  $(document).on('keydown', function (d) {
    if (d.keyCode===27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
  }
  })  

  //обработка форм

  $(".form").each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please, specify your name",
      minlength: "Name should contain minimum 3 characters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Please, specify your phone number",
      minlength: "Please, enter the full number",
    },
    sub_mail: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    }, 
  },
      
});
});

  $(".phone-input").mask("+7 (000) 000-00-00");
});