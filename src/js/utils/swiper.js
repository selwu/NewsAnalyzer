import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);
let swiper = new Swiper('.swiper-container', {
  init: false,
  slidesPerView: 'auto',
  spaceBetween: 8,
  centeredSlides: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 16,
    },
  }
});

export default swiper;
