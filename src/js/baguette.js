import baguetteBox from 'baguettebox.js';

const gallery = baguetteBox.run('.grid');

const BagietaConfig = () => {
  baguetteBox.run('.grid', {
    animation: 'fadeIn',
    noScrollbars: true,
    captions: false,
    overlayBackgroundColor: 'rgba(255, 255, 255, 1)',
  });
};

export const clickInDot = (index) => {
  baguetteBox.show(index, gallery);
};

export const closeBaguette = (elem) => {
  const button = elem;
  button.onclick = function clicked() {
    baguetteBox.hide();
  };
};

export default BagietaConfig;
