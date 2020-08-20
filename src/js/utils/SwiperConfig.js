
export default class SwiperConfig {

  static getSwiperContainer() {
    return '.swiper-container';
  }

  static getSwiperParams() {
    return {
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
      }}
  }
}
