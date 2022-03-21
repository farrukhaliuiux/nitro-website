$(document).ready(function () {
  // $("body").on("scroll", function () {
  //   var scroll = $(this).scrollTop();
  //   console.log(scroll);
  //   if (scroll >= 20) {
  //     $("body").addClass("scrolling");
  //   } else {
  //     $("body").removeClass("scrolling");
  //   }
  // });
  const statsRotatorTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    epeatDelay: 2,
  });

  statsRotatorTimeline
    .to(".stats-rotator-inner-wrapper", {
      duration: 2,
      y: -20,
      delay: 1,
      ease: "none",
    })
    .to(".stats-rotator-inner-wrapper", {
      duration: 2,
      y: -40,
      delay: 1,
      ease: "none",
    })
    .to(".stats-rotator-inner-wrapper", {
      duration: 1,
      y: -40,
      delay: 1,
      ease: "none",
    });

  $(".rm-nav-items").on("click", function (e) {
    e.preventDefault();
    const clickedID = $(this).attr("id");
    const currentText = $(this).attr("data-text");
    $(".rm-nav-items").removeClass("rm-nav-active");
    $(this).addClass("rm-nav-active");
    $(`.${clickedID}_section`)
      .css("display", "flex")
      .fadeIn()
      .siblings(".roadmap-content")
      .hide();
    $(".qa-bg-text").text(currentText);
  });

  const swiperInit = () => {
    if (window.innerWidth >= 768) {
      var menu = [
        "undefined",
        "Story",
        "Features",
        "Arena",
        "Game",
        "Races",
        "Earn",
        "roadmap",
        "news",
        "undefined",
        "undefined",
        "undefined",
      ];
      var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 20,
        mousewheel: {
          // enabled: true,
          // sensitivity: 0.1,
          // thresholdDelta: 5,
          invert: false,
        },
        hashNavigation: {
          watchState: true,
        },
        mousewheelForceToAxis: true,
        freeMode: false,
        mousewheelForceToAxis: false,
        mousewheelSensitivity: 0.5,
        freeModeMomentum: true,
        freeModeMomentumRatio: 10,
        freeModeMinimumVelocity: 0.01,
        freeModeSticky: false,

        speed: 1300,
        keyboard: true,
        sensitivity: 0.3,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}" data-name="${menu[
              index
            ].toLowerCase()}" >${menu[index]}</span>`;
          },
        },
        on: {
          init: () => {
            if (window.innerWidth >= 768) {
              homepageRedirectHandler();
            }
          },
        },
      });

      swiper.on("slideChangeTransitionEnd", () => {});
      swiper.on("slideNextTransitionStart", () => {
        slideChangeHandler();
      });
      swiper.on("slidePrevTransitionStart", () => {
        slideChangeHandler();
      });
    }
  };

  const homepageRedirectHandler = () => {
    const currentURL = window.location.pathname;
    const currentHash = window.location.hash;
    if (currentHash !== "") {
      if (currentURL === "/" || currentURL === "/index.html") {
        setTimeout(() => {
          $(
            `.swiper-pagination-bullet[data-name="${
              currentHash.split("#")[1]
            }"]`
          ).click();
        }, 100);
      }
    }
  };

  if (window.innerWidth >= 768) {
    // when clicks on homepage links
    $(".nitro-navbar .nitro-section-btn").on("click", function (e) {
      e.preventDefault();
      const clickedDataSectionName = $(this).attr("data-section-name");
      $(
        `.swiper-pagination-bullet[data-name="${clickedDataSectionName}"]`
      ).click();
    });
  }

  const sectionTitleTween = (sectionID) => {
    const sectionContentTimeLine = gsap.timeline();
    sectionContentTimeLine.from(
      `#${sectionID} .nitro-section-title, #${sectionID} .nitro-section-desc, #${sectionID} h5, #${sectionID} .features-listing li, #${sectionID} .market-listing, #${sectionID} .nitro-earn-box h4, #${sectionID} .roadmap-navbar, #${sectionID} .roadmap-content-wrapper, #${sectionID} .roadmap-car, #${sectionID} .comm-content`,
      {
        y: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        // ease: "back",
      },
      "+=0.5"
    );
  };

  const imgRevealTween = () => {
    const videoThumbnailThings = gsap.from(".img-reveal-overlay", {
      skewX: 30,
      xPercent: "-100",
      scale: 3,
      duration: 1,
      delay: 0.6,
    });
    gsap.from(".img-reveal-wrapper img", {
      scale: 1.6,
      duration: 1,
      delay: 0.6,
    });
    gsap.from(".video-thumbnail-widgets", {
      scale: 1.8,
      rotation: 15,
      duration: 1,
      opacity: 0,
      delay: 0.6,
    });
  };

  // const initialTweens = () => {
  //   gsap.from(".banner-title", {
  //     duration: 1,
  //     y: -150,
  //     opacity: 0,
  //   });

  //   gsap.from(".car-container img", {
  //     duration: 1,
  //     y: 150,
  //     opacity: 0,
  //   });
  // };

  const carTimeLineHandler = () => {
    const carTimeLine = gsap.timeline();
    carTimeLine.to(".car-container", {
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
    carTimeLine.to(
      ".car-container",
      {
        rotation: 0,
        x: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.3"
    );
  };

  const carRotateTween = () => {
    let xCoord = 38;
    if (window.innerWidth >= 1440 && window.innerWidth <= 1680) {
      xCoord = 42.5;
    } else if (window.innerWidth > 1680 && window.innerWidth <= 1739) {
      xCoord = 43;
    } else if (window.innerWidth > 1740) {
      xCoord = 44;
    }
    gsap.to(".car-container", {
      x: `${xCoord}vw`,
      y: "100vh",
      rotation: -90,
      duration: 1,
      ease: "power3.out",
    });
  };

  // const carVerticalTween = () => {
  //   gsap.to(".car-container", {
  //     y: "10vh",
  //     duration: 0.7,
  //     ease: "power3.out",
  //   });
  // };

  // const playBtnHideTween = () => {
  //   gsap.to(".cover-play-btn", {
  //     ease: "power3.out",
  //     duration: 0.2,
  //     opacity: 0,
  //   });
  // };

  // const playBtnShowTween = () => {
  //   gsap.to(".cover-play-btn", {
  //     ease: "power3.out",
  //     duration: 0.2,
  //     opacity: 1,
  //   });
  // };

  const paginationHideTween = () => {
    gsap.to(".swiper-pagination-wrapper", {
      ease: "none",
      duration: 0.2,
      opacity: 0,
      visibility: "hidden",
    });
  };

  const paginationShowTween = () => {
    gsap.to(".swiper-pagination-wrapper", {
      ease: "none",
      duration: 0.2,
      opacity: 1,
      delay: 0.5,
      visibility: "visible",
    });
  };

  const sideNavToggler = (sectionId) => {
    $(".sec-list-items a").removeClass("list-link-active");
    $(`.sec-list-items a[href="${sectionId}"]`).addClass("list-link-active");
  };

  const nitroCarMoveAwayTween = () => {
    gsap.to("#nitro-play-earn-section .nitro-car", {
      ease: "power3.out",
      duration: 2,
      x: -1500,
      y: 1500,
      opacity: 0,
    });
  };

  const nitroCarMoveBackTween = () => {
    gsap.to("#nitro-play-earn-section .nitro-car", {
      ease: "power3.out",
      duration: 0.8,
      x: 0,
      y: 0,
      opacity: 1,
    });
  };

  // GSAP Tweens

  if (window.innerWidth < 768) {
    gsap.from("#nitro-over-section", {
      scrollTrigger: {
        trigger: "#nitro-over-section",
        start: "top center-=300",
        end: "top top-=1",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-over-section");
          $(".sec-nav-listing").css("opacity", "1");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-over-section");
        },
        onLeaveBack: () => {
          $(".sec-nav-listing").css("opacity", "0");
        },
      },
    });
    gsap.from("#nitro-feature-section", {
      scrollTrigger: {
        trigger: "#nitro-feature-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-feature-section");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-feature-section");
        },
      },
    });
    gsap.from("#nitro-game-story-section", {
      scrollTrigger: {
        trigger: "#nitro-game-story-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-game-story-section");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-game-story-section");
        },
      },
    });
    gsap.from("#nitro-game-preview-section", {
      scrollTrigger: {
        trigger: "#nitro-game-preview-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-game-preview-section");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-game-preview-section");
        },
      },
    });
    gsap.from("#nitro-races-section", {
      scrollTrigger: {
        trigger: "#nitro-races-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-races-section");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-races-section");
        },
      },
    });
    gsap.from("#nitro-play-earn-section", {
      scrollTrigger: {
        trigger: "#nitro-play-earn-section",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        onEnter: () => {
          sideNavToggler("#nitro-play-earn-section");
        },
        onEnterBack: () => {
          sideNavToggler("#nitro-play-earn-section");
          $(".sec-nav-listing").css("opacity", "1");
        },
        onLeave: () => {
          $(".sec-nav-listing").css("opacity", "0");
        },
      },
    });
  }

  const tweensHandler = (activeSectionID) => {
    switch (activeSectionID) {
      case "nitro-cover-section":
        // carTimeLineHandler();
        // playBtnShowTween();
        paginationHideTween();
        $("body").removeClass("scrolling");
        $(".inr-nitro-wrap").removeClass("dark-blue-navbar");
        $(".inr-nitro-wrap").addClass("cover-area-visible");
        break;
      case "nitro-over-section":
        // carRotateTween();
        // playBtnHideTween();
        paginationShowTween();
        sectionTitleTween(activeSectionID);
        $("body").addClass("scrolling");
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        $(".inr-nitro-wrap").removeClass("cover-area-visible");
        break;
      case "nitro-feature-section":
        // carVerticalTween();
        sectionTitleTween(activeSectionID);
        break;
      case "nitro-game-story-section":
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        sectionTitleTween(activeSectionID);
        imgRevealTween();
        break;
      case "nitro-races-section":
        sectionTitleTween(activeSectionID);
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        imgRevealTween();
        break;
      case "nitro-game-preview-section":
        $(".inr-nitro-wrap").removeClass("dark-blue-navbar");
        sectionTitleTween(activeSectionID);
        break;
      // case "nitro-roadmap-section":
      //   paginationHideTween();
      //   nitroCarMoveAwayTween();
      //   sectionTitleTween(activeSectionID);
      //   break;
      case "nitro-investor-section":
        paginationHideTween();
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        break;
      case "nitro-play-earn-section":
        paginationShowTween();
        nitroCarMoveBackTween();
        sectionTitleTween(activeSectionID);
        break;
      case "nitro-news-updates-section":
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        paginationHideTween();
        break;
      case "nitro-community-section":
        $(".inr-nitro-wrap").addClass("dark-blue-navbar");
        sectionTitleTween(activeSectionID);
        break;
      case "nitro-footer":
        $(".inr-nitro-wrap").removeClass("dark-blue-navbar");
        sectionTitleTween(activeSectionID);
        break;

      default:
        break;
    }
  };

  const slideChangeHandler = () => {
    const activeSectionID = $(
      ".swiper-slide-active section.nitro-section"
    ).attr("id");
    tweensHandler(activeSectionID);
    // console.log(activeSectionID);
  };

  swiperInit();
  // initialTweens();

  $(window).on("resize", swiperInit);

  // More Nitro Car Cards Slider

  // var roadmapSwiper = new Swiper(".swiper-container-inner", {
  //   pagination: {
  //     el: ".swiper-pagination-inner",
  //   },
  //   paginationClickable: true,
  //   direction: "vertical",
  //   spaceBetween: 50,
  //   nested: true,
  //   mousewheel: {
  //     invert: false,
  //   },
  //   effect: "fade",
  //   fadeEffect: {
  //     crossFade: true,
  //   },
  //   mousewheelForceToAxis: true,
  //   freeMode: false,
  //   mousewheelForceToAxis: false,
  //   mousewheelSensitivity: 0.5,
  //   freeModeMomentum: true,
  //   freeModeMomentumRatio: 10,
  //   freeModeMinimumVelocity: 0.01,
  //   freeModeSticky: false,
  // });

  // New Hero Slider Section

  var heroCarouselThumbsTrack = new Swiper(".heroCarouselThumbsTrack", {
    spaceBetween: 16,
    slidesPerView: "auto",
    // freeMode: true,
    // centeredSlides: true,
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 6.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  });
  var heroHorizontalCarousel = new Swiper(".heroHorizontalCarousel", {
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: heroCarouselThumbsTrack,
    },
    pagination: {
      el: ".nitroPrime-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: heroCarouselThumbsTrack,
        },
      },
    },
  });

  heroHorizontalCarousel.on("slideChangeTransitionEnd", function () {
    const isLightSlideActive = $(".light-slide").hasClass(
      "swiper-slide-active"
    );

    if (isLightSlideActive) {
      $(".heroCarouselThumbsTrack").addClass("light-active");
      $(".inr-nitro-wrap").addClass("light-slide-visible");
    } else {
      $(".inr-nitro-wrap").removeClass("light-slide-visible");
      $(".heroCarouselThumbsTrack").removeClass("light-active");
    }
  });
});

$(".js-video-button").modalVideo({
  youtube: {
    controls: 0,
    nocookie: true,
    autoPlay: true,
  },
  url: "https://www.youtube.com/watch?v=yj4CK0pgd0c",
});
