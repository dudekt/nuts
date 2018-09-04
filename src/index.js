// Import styles
import 'sass/styles.scss';

import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

/**
 * Will find #root element and set HTML to "Hello World!".
 */
// const editDom = () => {
//   const root = document.getElementById('root'); // Get root element
//   root.innerHTML = 'Hello World!'; // Set html of the root element
// };

const elem = document.querySelector('.grid');

// const msnry = new Masonry(elem, {
//   columnWidth: '.grid-sizer',
//   gutter: 10,
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   // transitionDuration: '0.2s',
// });

let msnry = undefined;

imagesLoaded(elem, () => {
  elem.classList.remove('none');
  msnry = new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 10,
    transitionDuration: 0,
  });

  const animation = ['animated', 'zoomIn'];
  const item = document.querySelectorAll('.grid-item');
  for (let i = 0; i < item.length; i++) {
    const a = 55;
    item[i].classList.add(...animation);
    item[i].style.transitionDuration = '500ms';
    item[i].style.animationDelay = `${a * i}ms`;
    // item[i].style.animationDirection = `reverse`;
    item[i].style.zIndex = `-${i}`;
  }
});




// item.classList.add('animated');
// item.classList.add('zoomIn');
// item.classList.add(...animation);

// const cbox = document.querySelectorAll(".box");



console.log('Hello world', item);

// editDom(); // Call editDom
