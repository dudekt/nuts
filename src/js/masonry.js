import Masonry from 'masonry-layout';

const Msnry = (elem) => {
  new Masonry(elem, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: 10,
    transitionDuration: 0,
  });
};

export default Msnry;
