  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';

new Swiper('.swiper-container', {

    observer: true,
    observeParents: true,
    spaceBetween: 20,
    slidesPerView: 4,

    navigation: {
        nextEl: '.classes__slider--next',
        prevEl: '.classes__slider--prev',
      },

      breakpoints:{
        992: {
          slidesPerView: 4
        },

        767: {
          slidesPerView:3,
        },

        480:{
          slidesPerView:2,
        },

        0:{
          slidesPerView:1,
        }
      }
})