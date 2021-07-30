  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/swiper-bundle.css';

new Swiper('.reviews__slider--container', {

    observer: true,
    observeParents: true,
    slidesPerView: 1,

    pagination: {
      el: '.reviews__pagination',
    },
})