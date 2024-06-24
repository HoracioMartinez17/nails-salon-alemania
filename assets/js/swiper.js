/*=============== SWIPER JS GALLERY ===============*/


  const swiper = new Swiper(".gallery-cards-1", {
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
        pauseOnMouseEnter: "true",
      },
    breakpoints: {
        // when window width is >= 320px
        320: {
          grid: {
            rows: 1,
            fill: "fill",
        },
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 480px
        480: {
          grid: {
            rows: 1,
            fill: "fill",
        },
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    grid: {
        rows: 2,
        fill: "row",
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "bullets",
    },
  });