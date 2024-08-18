const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

const swiperProducts = new Swiper('.swiper.products-slider', {
  // Optional parameters
  loop: true,
  // slidesPerView: 1,
  // spaceBetween: 64,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination.products-slider__pagination',
    type: "fraction",
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});