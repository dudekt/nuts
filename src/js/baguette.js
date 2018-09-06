import baguetteBox from 'baguettebox.js';

const BagietaConfig = () => {
  baguetteBox.run('.grid', {
    buttons: false,
    captions: false,
    overlayBackgroundColor: 'rgba(0, 0, 0, 0.9)',
  });
};

export default BagietaConfig;
