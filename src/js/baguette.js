import baguetteBox from 'baguettebox.js';

const BagietaConfig = () => {
  baguetteBox.run('.grid', {
    animation: 'fadeIn',
    noScrollbars: true,
    // buttons: false,
    captions: false,
    overlayBackgroundColor: 'rgba(255, 255, 255, 1)',
  });
};

export default BagietaConfig;
