const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 12,
  pagination: {
    el: '.swiper-pagination-custom',
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

const swiperPopular = new Swiper('.swiper-popular', {
  slidesPerView: 1.25,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination-popular',
    clickable: true, 
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2.5
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  },
  navigation: {
    nextEl: '.swiper-popular-next',
    prevEl: '.swiper-popular-prev',
  }
});
const swiperPopular2 = new Swiper('.swiperPopular2', {
  slidesPerView: 1,
  nested: true,
  loop: true, 
  pagination: {
    el: '.swiper-pagination-popular-two',
    clickable: true,
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  },
  autoplay: { // 自動播放
    delay: 3000, // 延遲3秒更換圖片
    disableOnInteraction: false, 
    pauseOnMouseEnter: true, // 滑鼠點選到圖片停住
  }
});



const swiperComment = new Swiper(".swiperComment", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination-popular',
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  },
  navigation: {
    nextEl: '.swiper-popular-next',
    prevEl: '.swiper-popular-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 1
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 2
    },
    1400: {
      slidesPerView: 3
    }
  },
});