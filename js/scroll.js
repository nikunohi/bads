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