var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
     navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      880: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1000:{
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200:{
        slidesPerView: 5,
        spaceBetween: 10,
      }
    },
  });
  var swiper = new Swiper(".SwiperVideo", {
    slidesPerView: 1,
    spaceBetween: 5,
  //    navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      800: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });