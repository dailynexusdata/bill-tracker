import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { nest } from 'd3-collection';
import { extent } from 'd3-array';
import { scaleBand, scaleTime } from 'd3-scale';

import { getPhotoUrl } from '../utility/images';
import makePopup from './popup';

import { Bill } from '../utility/types';

const billSize = {
  height: 350,
  width: 250,
};

const makeBill = (outside, container, data: Bill, show: boolean) => {
  const div = container
    .append('div')
    .style('height', `${billSize.height}px`)
    .style('width', `${billSize.width}px`);

  if (show) {
    div.style('border', '1px solid black').style('margin', '0 10px');

    div.append('h3').text(data.title);

    div.on('click', () => {
      makePopup(data);
    });
  }

  console.log(data);
};

const makeTable = (data: Array<Bill>) => {
  const container = select('#labby-as-bill-tracker-slider').attr(
    'class',
    'labby-as-senate-styling',
  );

  container.selectAll('*').remove();

  const size = {
    width: 500,
    height: 400,
    sideWidth: 30,
  };

  const main = container
    .append('div')
    // .style('width', `${size.width}px`)
    .style('height', `${size.height}px`)
    .style('border', '1px solid black')
    .style('display', 'flex');

  let pos = 0;

  const left = main
    .append('div')
    .style('height', `${size.height}px`)
    .style('width', `${size.sideWidth}px`)
    .style('background-color', '#d3d3d3')
    .style('cursor', 'pointer');
  const view = main
    .append('div')
    .style('height', `${size.height}px`)
    .style('width', `${size.width}px`)
    .style('overflow-x', 'hidden')
    .style('position', 'relative')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('justify-content', 'space-between');

  const inside = view
    .append('div')
    .style('position', 'absolute')
    .style('display', 'flex');
  const right = main
    .append('div')
    .style('height', `${size.height}px`)
    .style('width', `${size.sideWidth}px`)
    .style('background-color', '#d3d3d3')
    .style('cursor', 'pointer');

  left.on('click', () => {
    if (pos > 0) {
      pos -= 1;
      const fctr = pos + 1 / 2;
      view.property('scrollLeft', (billSize.width + 22) * fctr);
    }
  });

  right.on('click', () => {
    if (pos < data.length - 1) {
      pos += 1;
      const fctr = pos + 1 / 2;
      const curr = (billSize.width + 22) * fctr;
      view.property('scrollLeft', (billSize.width + 22) * fctr);
    }
  });

  [null, ...data, null].forEach((d, i) => {
    makeBill(view, inside, d, i !== 0 && i !== data.length + 1);
  });

  view.property('scrollLeft', billSize.width / 2 + 22);
};

export default makeTable;
