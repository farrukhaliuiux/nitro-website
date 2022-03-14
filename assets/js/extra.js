function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 0.3,
  });

  if (anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => {
      goToSection(i);
      const navColor = $(panel).attr("data-color");

      $("body").removeClass();
      $("body").addClass(navColor);
    },
  });

  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    onEnterBack: () => {
      goToSection(i);
    },
  });
});

// let sections = gsap.utils.toArray(".rows");
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".pinme",
//     pin: true,
//     scrub: 1,
//    // snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () => "+=" + document.querySelector(".pinme").offsetWidth
//   }
// });

// onEnter: (self) => {
//   const initialOffsetX = $(".car-container").offset().left;
//   console.log(
//     window.innerWidth -
//       $(".car-container").offset().left -
//       $(".car-container").height()
//   );
// },

//   if (window.innerWidth > 1200) {
//     gsap.to(".car-container", {
//       scrollTrigger: {
//         trigger: "#nitro-over-section",
//         start: "top bottom-=1",
//         endTrigger: "#nitro-over-section",
//         end: "top top",
//         pinSpacing: false,
//         pin: ".car-container",
//       },
//       ease: "Expo.easeOut",
//       duration: 1.5,
//       rotation: -90,
//       x: 500,
//     });
//   }

// =====================
// gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
  $(".rm-nav-items").on("click", function (e) {
    e.preventDefault();
    const clickedID = $(this).attr("id");
    const currentText = $(this).attr("data-text");
    $(".rm-nav-items").removeClass("rm-nav-active");
    $(this).addClass("rm-nav-active");
    $(`.${clickedID}_section`).fadeIn().siblings(".roadmap-content").hide();
    $(".qa-bg-text").text(currentText);
  });

  const sideNavToggler = (sectionId) => {
    $(".sec-list-items a").removeClass("list-link-active");
    $(`.sec-list-items a[href="${sectionId}"]`).addClass("list-link-active");
  };
  // cover area animations
  gsap.from(".banner-title", {
    scrollTrigger: {
      trigger: ".banner-title",
      start: "top bottom",
    },
    duration: 1,
    y: -150,
    opacity: 0,
  });

  gsap.from(".car-container img", {
    scrollTrigger: {
      trigger: ".car-container",
      start: "top bottom",
    },
    duration: 1,
    y: 150,
    opacity: 0,
  });

  gsap.to(".cover-play-btn", {
    scrollTrigger: {
      trigger: "#nitro-cover-section",
      start: "bottom bottom",
      end: "bottom bottom-=100",
      scrub: true,
    },
    ease: "power3.out",
    duration: 1,
    opacity: 0,
  });

  gsap.from("#nitro-over-section", {
    scrollTrigger: {
      trigger: "#nitro-over-section",
      start: "top bottom",
      end: "top top-=1",
      scrub: true,
      onEnter: () => {
        sideNavToggler("#nitro-over-section");
        $("body").addClass("scrolling");
        const carOffset = $(".car-container").offset().top;
        $(".car-container").css({
          top: carOffset,
          transform: `translate(500px, -100px) rotate(-90deg)`,
        });
      },
      onEnterBack: () => {
        sideNavToggler("#nitro-over-section");
        $(".car-container").css({
          top: "unset",
          transform: `translate(500px, -100px) rotate(-90deg)`,
        });
        console.log("09090");
      },
      onLeaveBack: () => {
        $("body").removeClass("scrolling");
        console.log("leave back");
        $(".car-container").css({
          top: "unset",
          transform: `translate(0px, 0) rotate(0)`,
        });
      },
    },
    ease: "none",
    duration: 1,
    opacity: 0,
  });

  // gsap.from("#nitro-feature-section", {
  //   scrollTrigger: {
  //     trigger: "#nitro-feature-section",
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: true,
  //     onEnter: () => {
  //       sideNavToggler("#nitro-feature-section");
  //       $(".car-container").css({
  //         top: "unset",
  //         transform: `translate(500px, -500%) rotate(-90deg) `,
  //       });
  //     },
  //     onEnterBack: () => {
  //       sideNavToggler("#nitro-feature-section");
  //     },
  //   },
  //   ease: "power3.out",
  //   duration: 1,
  //   opacity: 0,
  //   // rotation: 180,
  // });

  // gsap.from("#nitro-game-story-section", {
  //   scrollTrigger: {
  //     trigger: "#nitro-game-story-section",
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: true,
  //     onEnter: () => {
  //       sideNavToggler("#nitro-game-story-section");
  //     },
  //     onEnterBack: () => {
  //       sideNavToggler("#nitro-game-story-section");
  //     },
  //   },
  //   ease: "power3.out",
  //   duration: 1,
  //   opacity: 0,
  // });
  // gsap.from("#nitro-races-section", {
  //   scrollTrigger: {
  //     trigger: "#nitro-races-section",
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: true,
  //     onEnter: () => {
  //       sideNavToggler("#nitro-races-section");
  //     },
  //     onEnterBack: () => {
  //       sideNavToggler("#nitro-races-section");
  //     },
  //   },
  //   ease: "power3.out",
  //   duration: 1,
  //   opacity: 0,
  // });

  // if (window.innerWidth > 1200) {
  //   gsap.from("#nitro-game-preview-section", {
  //     scrollTrigger: {
  //       trigger: "#nitro-game-preview-section",
  //       start: "top bottom",
  //       end: "bottom center",
  //       scrub: true,
  //       onEnter: () => {
  //         $("body").addClass("dark-body");
  //         sideNavToggler("#nitro-game-preview-section");
  //         $(".inr-nitro-wrap").removeClass("dark-blue-navbar");
  //       },
  //       onEnterBack: () => {
  //         $("body").addClass("dark-body");
  //         sideNavToggler("#nitro-game-preview-section");
  //         $(".inr-nitro-wrap").removeClass("dark-blue-navbar");
  //       },
  //       onLeaveBack: () => {
  //         $("body").removeClass("dark-body");
  //         $(".inr-nitro-wrap").addClass("dark-blue-navbar");
  //       },
  //       onLeave: () => {
  //         $("body").removeClass("dark-body");
  //         $(".inr-nitro-wrap").addClass("dark-blue-navbar");
  //       },
  //     },
  //     ease: "power3.out",
  //     duration: 1,
  //   });
  //   gsap.from(".roadmap-section", {
  //     scrollTrigger: {
  //       trigger: ".roadmap-section",
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //       onEnter: () => {
  //         sideNavToggler("#nitro-play-earn-section");
  //         $("#nitro-play-earn-section .nitro-car").css({
  //           transform: `translate(-1000px, 1000px)`,
  //           opacity: "0",
  //         });
  //       },
  //       onEnterBack: () => {
  //         sideNavToggler("#nitro-play-earn-section");
  //       },
  //       onLeaveBack: () => {
  //         $("#nitro-play-earn-section .nitro-car").css({
  //           transform: `translate(0, 0)`,
  //           opacity: "1",
  //         });
  //       },
  //     },
  //     ease: "power3.out",
  //     duration: 1,
  //     opacity: 0,
  //   });
  //   // gsap.to("#nitro-play-earn-section .nitro-car", {
  //   //   scrollTrigger: {
  //   //     trigger: "#nitro-play-earn-section",
  //   //     start: "top top",
  //   //     end: "bottom top",
  //   //     onEnter: () => {
  //   //       sideNavToggler("#nitro-play-earn-section");
  //   //     },
  //   //     onEnterBack: () => {
  //   //       sideNavToggler("#nitro-play-earn-section");
  //   //     },
  //   //   },
  //   //   ease: "power3.out",
  //   //   duration: 1,
  //   //   x: -1000,
  //   //   y: 1000,
  //   //   opacity: 0,
  //   // });
  // }

  // gsap.from("#nitro-play-earn-section .game-content", {
  //   scrollTrigger: {
  //     trigger: "#nitro-play-earn-section",
  //     start: "top center",
  //     end: "center top",
  //     scrub: true,
  //     onEnter: () => {
  //       sideNavToggler("#nitro-play-earn-section");
  //     },
  //     onEnterBack: () => {
  //       sideNavToggler("#nitro-play-earn-section");
  //     },
  //   },
  //   ease: "power3.out",
  //   duration: 1,
  //   opacity: 0,
  // });
  // gsap.to(".sec-nav-listing", {
  //   scrollTrigger: {
  //     trigger: ".sec-nav-listing",
  //     start: "center center",
  //     endTrigger: "#nitro-play-earn-section",
  //     end: "top top",
  //     pin: true,
  //   },
  //   duration: 1,
  // });
});

// $(".js-video-button").modalVideo({
//   youtube: {
//     controls: 0,
//     nocookie: true,
//     autoPlay: true,
//   },
//   url: "https://www.youtube.com/watch?v=yj4CK0pgd0c",
// });
