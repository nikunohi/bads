console.log("imgswap.js loaded");
import cOne from 'url:../../images/b.svg';
import cTwo from 'url:../../images/b-2.svg';


setTimeout(function () {
    // document.querySelector('#blogo').style.color = "pink";

}, 3000);

document.querySelector('#blogo').onmouseenter = function () { 
    console.log('hover');
    document.querySelector('#blogo').src = cTwo;
};

document.querySelector('#blogo').onmouseleave = function () { 
    console.log('hover');
    document.querySelector('#blogo').src = cOne;
};