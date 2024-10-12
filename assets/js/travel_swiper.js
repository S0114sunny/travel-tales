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
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2
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
  pagination: {
    el: '.swiper-pagination-popular-two',
    bulletClass: 'swiper-pagination-bullet', // 自定義分頁指示器的class名
    bulletActiveClass: 'swiper-pagination-bullet-active', // 自定義活動分頁指示器的class名
  }
});



const swiperComment= new Swiper(".swiperComment", {
  slidesPerView: 1.25,
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
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  },
});