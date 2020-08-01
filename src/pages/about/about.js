import './about.css';
import { Swiper, Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 16,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

console.log('that\'s ok');
