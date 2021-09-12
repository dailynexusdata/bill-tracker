import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { nest } from 'd3-collection';
import { extent } from 'd3-array';
import { scaleBand, scaleTime } from 'd3-scale';

import { getPhotoUrl } from '../utility/images';

import { Bill } from '../utility/types';

const makeTable = (data: Array<Bill>) => {
  const container = select('#labby-as-bill-tracker-people-table').attr(
    'class',
    'labby-as-senate-styling',
  );

  const expanded = data
    .map((d) =>
      d.authors.map((_, i) => ({
        ...d,
        author: d.authors[i].replace(/\n/g, '').trim(),
      })),
    )
    .reduce((a, b) => [...a, ...b]);

  const nested = nest()
    .key((d) => d.author)
    .entries(expanded);

  const table = container.append('table');

  const body = table.append('tbody');

  const trs = body
    .selectAll('tr')
    .data(nested)
    .enter()
    .append('tr')
    .selectAll('td')
    .data((d) => [
      { which: 'name', val: d.key },
      { which: 'img', val: d.key },
      { which: 'bills', val: d.values },
    ])
    .enter()
    .append('td');

  trs
    .filter((d) => !['bills', 'img'].includes(d.which))
    .html((d) => {
      if (d.which === 'name') {
        return d.val;
      }
    });
  const imageSize = 50;

  trs
    .filter((d) => d.which === 'img')
    .append('div')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .selectAll('img')
    .data((d) => [d.val])
    .enter()
    .append('img')
    .attr('src', (d) => getPhotoUrl(d))
    .style('width', `${imageSize}px`)
    .style('height', `${imageSize}px`)
    .style('border-radius', '50%');

  const size = {
    height: 60,
    width: 200,
  };

  const svgs = trs
    .filter((d) => d.which === 'bills')
    .selectAll('svg')
    .data((d) => [d])
    .enter()
    .append('svg')
    .attr('height', size.height)
    .attr('width', size.width);

  const squareSize = 8;

  const margin = {
    top: 5,
    bottom: 5,
    right: 5,
    left: 5,
  };

  const x = scaleTime()
    .domain(
      extent(
        data
          //   .map((d) => [d.introduced, d.vote.date])
          .map((d) => [d.introduced])
          .reduce((a, b) => [...a, ...b]),
      ),
    )
    .range([margin.left, size.width - margin.right]);

  console.log(x.domain(), x.range());
  const y = scaleBand()
    .domain(['Authored', 'Second Author'])
    .range([size.height - margin.bottom, margin.top]);

  svgs
    .selectAll('squares')
    .data((d) => d.val)
    .enter()
    .append('rect')
    .attr('x', (d) => {
      console.log(d);
      return x(d.introduced) - squareSize / 2;
    })
    .attr('y', (d) => {
      if (d.author === d.authors[0]) {
        return y('Authored');
      }
      if (d.authors.length >= 2 && d.author === d.authors[1]) {
        return y('Second Author');
      }
    })
    .attr('width', squareSize)
    .attr('height', squareSize);
};

export default makeTable;
