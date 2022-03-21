$(document).ready(function () {
  $("body").on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 100) {
      $("body").addClass("scrolling");
    } else {
      $("body").removeClass("scrolling");
    }
  });

  // Car detail Page Slider for More Cars
  const mncSwiper = new Swiper(".mncSwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
      }
    },
  });

  // Car Detail Page Car Demo
  $(".rr-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=adGCcU9N6RQ",
  });

  $(".cv-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=YgNDYh9uTcY",
  });

  $(".be-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=pH9bQEOqg2k",
  });

  $(".hq-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=9ufhmhCm8zc",
  });

  $(".mn-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=aQfLXE3kmZs",
  });

  $(".ab-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=kK18BnEdAVk",
  });

  $(".as-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=i2t4EBxPNRM",
  });

  $(".sw-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=oJFWh8kTKIw",
  });

  // Wambeen Storm
  $(".was-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=KTCAmjdwo7E",
  });

  // Altjira Air
  $(".ala-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=4MuFRO3-5bE",
  });

  // Slither Bunyip
  $(".slb-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=S-c0ocyhO9U",
  });

  // Karora Star
  $(".kas-video-button").modalVideo({
    youtube: {
      controls: 0,
      nocookie: true,
      autoPlay: true,
    },
    url: "https://www.youtube.com/watch?v=JV9zuT1B6VU",
  });

});