// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll();


import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';


console.log('scroll initialized');
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

const scrollmobile = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  // Configuration for mobile devices
  mobile: {
    smooth: true,
    breakpoint: 0, // Setting breakpoint to 0 ensures it applies to all mobile sizes
  },
  // Configuration for tablets
  tablet: {
    smooth: true,
    breakpoint: 0,
  },
});