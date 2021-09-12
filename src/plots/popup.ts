import { select } from 'd3-selection';

const makePopup = () => {
  const popupSize = { height: 200, width: 200 };

  const popup = select('body')
    .append('div')
    .style('position', 'absolute')
    .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)
    .style('top', `${window.innerHeight / 2 - popupSize.height / 2}px`)
    .style('height', '200px')
    .style('width', '200px')
    .html('hello')
    .style('background-color', 'red');

  document.addEventListener('scroll', () => {
    popup.style('display', 'none');
  });
};
