// import 'locomotive-scroll/dist/locomotive-scroll.css';
// import LocomotiveScroll from 'locomotive-scroll';
// const scroll = new LocomotiveScroll();
// console.log('scroll initialized');

import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});