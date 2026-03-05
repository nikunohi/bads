// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll();


// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScroll from 'locomotive-scroll';
// let scroll;

// const MOBILE = 767;
// const TABLET = 1024;

// console.log('scroll initialized');

// function initScroll() {
//   scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     smartphone: {
//       smooth: true,
//       multiplier: 3,
//       breakpoint: 0 // Setting breakpoint to 0 ensures it applies to all mobile sizes
//     },
//     // Configuration for tablets
//     tablet: {
//       smooth: true,
//       breakpoint: 0
//     }
//   });
//   console.log(scroll);
//   console.log(typeof scroll.update);
//   console.log(typeof scroll.destroy);
// }



// initScroll();


// let previousWidth = window.innerWidth;


// window.addEventListener("resize", () => {
//   const currentWidth = window.innerWidth;

//   if (
//     (previousWidth > 1024 && currentWidth <= 1024) ||
//     (previousWidth <= 1024 && currentWidth > 1024)
//   ) {
//     scroll.destroy();
//     initScroll();
//   }

//   previousWidth = currentWidth;
// });
















let scroll;

const MOBILE = 767;
const TABLET = 1024;

function initScroll() {
  const container = document.querySelector('[data-scroll-container]');
  if (!container) return;

  scroll = new LocomotiveScroll({
    el: container,
    smooth: true,
    smartphone: {
      smooth: true,
      multiplier: 3,
      breakpoint: MOBILE
    },
    tablet: {
      smooth: true,
      breakpoint: TABLET
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initScroll();
});

let previousWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const currentWidth = window.innerWidth;

  if (
    (previousWidth > TABLET && currentWidth <= TABLET) ||
    (previousWidth <= TABLET && currentWidth > TABLET)
  ) {
    if (scroll && typeof scroll.destroy === "function") {
      scroll.destroy();
    }
    initScroll();
  }

  previousWidth = currentWidth;
});





