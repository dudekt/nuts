import imagesLoaded from 'imagesloaded';

import 'sass/styles.scss';

import Msnry from './js/masonry';
import BagietaConfig, { clickInDot, closeBaguette } from './js/baguette';

const elem = document.querySelector('.grid');

imagesLoaded(elem, () => {
  elem.classList.remove('none');
  Msnry(elem);

  // const animation = ['animated', 'zoomIn'];
  const item = document.querySelectorAll('.grid-item');
  // for (let i = 0; i < item.length; i += 1) {
  //   const duaration = 55;
  //   // item[i].classList.add(...animation);
  //   // item[i].style.transitionDuration = '250ms';
  //   // item[i].style.animationDelay = `${duaration * i}ms`;
  //   // item[i].style.animationDuration = '250ms';
  // }

  const aside = document.querySelector('.dots');

  for (let i = 0; i < item.length; i += 1) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dot.id = i;
    aside.appendChild(dot);

    document.getElementById(i).onclick = function clicked() {
      clickInDot(i);

      this.classList.add('chuj');
    };
  }

  const hideBagieta = document.querySelector('.show-thumbnails');

  closeBaguette(hideBagieta);

  BagietaConfig();
});
