var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    // when window width is <= 499px
    350: {
      slidesPerView: 1,
      spaceBetweenSlides: 30,
    },
    // when window width is <= 999px
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },

    800: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});
