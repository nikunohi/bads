console.log("imgswap.js loaded");
import bOne from 'url:../../images/bads-letter-default.png';
import bTwo from 'url:../../images/bads-letter-hover.png';

setTimeout(function () {
    // document.querySelector('#blogo').style.color = "pink";

}, 3000);

document.querySelector('#blogo').onmouseenter = function () { 
    console.log('hover');
    document.querySelector('#blogo').src = bTwo;
};

document.querySelector('#blogo').onmouseleave = function () { 
    console.log('hover');
    document.querySelector('#blogo').src = bOne;
};