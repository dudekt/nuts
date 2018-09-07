// import Masonry from 'masonry-layout';
import Shuffle from 'shufflejs';

const Msnry = (elem) => {
  // new Masonry(elem, {
  //   itemSelector: '.grid-item',
  //   columnWidth: '.grid-sizer',
  //   percentPosition: true,
  //   gutter: 10,
  //   transitionDuration: 0,
  //   // horizontalOrder: true,
  // });

  new Shuffle(elem, {
    buffer: 10,
    itemSelector: '.grid-item',
    sizer: '.grid-sizer',
    useTransforms: false,
  });
};

export default Msnry;
