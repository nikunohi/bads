// console.log("imgswap.js loaded");
// import cOne from 'url:../../images/b.svg';
// import cTwo from 'url:../../images/b-2.svg';


// setTimeout(function () {
//     // document.querySelector('#blogo').style.color = "pink";

// }, 3000);

// document.querySelector('#blogo').onmouseenter = function () { 
//     console.log('hover');
//     document.querySelector('#blogo').src = cTwo;
// };

// document.querySelector('#blogo').onmouseleave = function () { 
//     console.log('hover');
//     document.querySelector('#blogo').src = cOne;
// };


console.log("imgswap.js loaded");

import cOne from 'url:../../images/b.svg';
import cTwo from 'url:../../images/b-2.svg';

window.addEventListener('DOMContentLoaded', () => {
  const blogo = document.querySelector('#blogo');
  if (!blogo) return console.warn('#blogo not found');

  blogo.src = cOne; // set default image

  blogo.addEventListener('mouseenter', () => blogo.src = cTwo);
  blogo.addEventListener('mouseleave', () => blogo.src = cOne);
});