/**
 * Bill Timeline
 */
import { select } from 'd3-selection';
import { range, extent } from 'd3-array';
import { line } from 'd3-shape';

import { SizeType, MarginType, Bill } from '../utility/types';
import { sinScaleDate, sinScale } from '../utility/scale';

const getPhotoUrl = (person: { name: string }) => {
  const name = person.name.toLowerCase().replace(' ', '_');
  return `dist/photos/${name}.jpg`;
};

const makePlot = (data: Bill[]) => {
  const container = select('#labby-as-bill-tracker-bill-history')
    .style('position', 'relative')
    .attr('class', 'labby-as-senate-styling');
  container.selectAll('*').remove();

  container.append('h1').text('Bills this year');

  const size: SizeType = {
    height: 2000,
    width: Math.min(window.innerWidth - 40, 600),
  };

  const billSize: SizeType = {
    height: 205,
    width: 125,
  };

  const margin: MarginType = {
    left: billSize.width / 2,
    top: billSize.height,
    right: billSize.width / 2,
    bottom: billSize.height,
  };

  const svg = container
    .append('svg')
    .attr('height', size.height)
    .attr('width', size.width);

  const timeFrame: [Date, Date] = [
    new Date(2021, 9 - 1, 19),
    new Date(2022, 6 - 1, 20),
  ];
  const dateParams: [SizeType, MarginType, number, [Date, Date]] = [
    size,
    margin,
    1,
    timeFrame,
  ];

  const dateDomain = extent(data, (d: Bill) => d.introduced) as [Date, Date];

  const scaleDate = sinScaleDate(...dateParams, dateDomain);
  const scaleDateRandom = sinScaleDate(...dateParams, dateDomain, [80, 20]);
  const scale = sinScale(size, margin, 1, timeFrame, dateDomain);

  const locs = [
    new Date(2021, 8, 25),
    new Date(2021, 9, 7),
    new Date(2022, 1, 20),
    new Date(2022, 6 - 1, 20),
  ];

  const firstDays = [
    { quarter: 'Fall', date: new Date(2021, 9 - 1, 19) },
    { quarter: 'Winter', date: new Date(2022, 1 - 1, 3) },
    { quarter: 'Spring', date: new Date(2022, 3 - 1, 28) },
  ];

  //   svg
  //     .selectAll('lines')
  //     .data(firstDays)
  //     .enter()
  //     .append('circle')
  //     .attr('cx', (d) => scaleDate(d.date)[0])
  //     .attr('cy', (d) => scaleDate(d.date)[1])
  //     .attr('r', 3)
  //     .attr('fill', 'red');
  const lineSize = 65;

  svg
    .selectAll('lines')
    .data(firstDays)
    .enter()
    .append('line')
    .attr('x1', (d) => scaleDate(d.date)[0])
    .attr(
      'x2',
      (d, i) => scaleDate(d.date)[0] + (i === 2 ? 1 : -1) * (lineSize - 5),
    )
    .attr('y1', (d) => scaleDate(d.date)[1])
    .attr('y2', (d) => scaleDate(d.date)[1])
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .style('stroke-dasharray', '3, 3');

  svg
    .selectAll('lines')
    .data(firstDays)
    .enter()
    .append('text')
    .text((d) => `Start of ${d.quarter} Quarter`)
    .attr('x', (d, i) => scaleDate(d.date)[0] + (i === 2 ? 1 : -1) * lineSize)
    .attr('y', (d) => scaleDate(d.date)[1])
    .attr('text-anchor', (_, i) => (i === 2 ? 'start' : 'end'))
    .attr('alignment-baseline', 'middle');
  svg
    .selectAll('p')
    .data([range(0, 1 + 0.001, 0.001)])
    .enter()
    .append('path')
    .attr(
      'd',
      line<number>()
        .x((d) => scale(d)[0])
        .y((d) => scale(d)[1]),
    )
    .attr('fill', 'none')
    .attr('stroke', '#FFF0DB')
    .attr('stroke-width', 10);

  const bills = container
    .selectAll('lines')
    .data(data)
    .enter()
    .append('div')
    .style('position', 'absolute')
    .style(
      'left',
      (d) => `${scaleDateRandom(d.introduced)[0] - billSize.width / 2}px`,
    )
    .style(
      'top',
      (d) => `${scaleDateRandom(d.introduced)[1] - billSize.height / 2}px`,
    )
    .style('width', `${billSize.width}px`)
    .style('height', `${billSize.height}px`)
    .style('border', '1px solid black')
    .style('background-color', '#FFF0DB')
    .style('padding', '5px')
    .style('display', 'flex')
    .style('flex-direction', 'column')
    .style('justify-content', 'space-between');

  bills.append('p').text((d) => d.title);

  const billsImage = bills.append('div');

  billsImage.append('p').text((d) => `By: ${d.authors[0]}`);

  billsImage
    .append('img')
    .attr('src', (d) => getPhotoUrl({ name: d.authors[0] }))
    .style('width', '50px')
    .style('border-radius', '50px');

  bills.on('mouseenter', async function () {
    const bill = select(this);

    bill.raise();

    const className = 'labby-as-bill-tracker-history-bill-animation-on';
    if (bill.attr('class')?.includes(className)) {
      return;
    }

    // playing animation
    bill.attr('class', className);

    const max = 30;
    const dy = 1;
    const timeSleep = 1 / 8;
    const startY = +bill.style('top').slice(0, -2);

    let y = 0;
    let up = true;
    let count = 0;

    while (count < (2 * max) / dy) {
      if (y >= max) {
        up = false;
      } else if (y <= -max) {
        up = true;
      }

      if (up) {
        y += dy;
      } else {
        y -= dy;
      }
      bill.style('top', `${startY + y}px`);

      // eslint-disable-next-line no-await-in-loop
      await new Promise<void>((res) => {
        setTimeout(() => {
          res();
        }, timeSleep);
      });

      count += 1;
    }

    // reset
    bill.style('top', `${startY}px`);
    bill.attr('class', null);
  });
};

export default makePlot;
