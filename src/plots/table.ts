import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';

import { getPhotoUrl } from '../utility/images';

import { Bill } from '../utility/types';

const makeTable = (data: Array<Bill>) => {
  const container = select('#labby-as-bill-tracker-bill-table').attr(
    'class',
    'labby-as-senate-styling',
  );

  console.log(data);

  const table = container.append('table').style('border-collapse', 'collapse');

  const cols = [
    'title',
    'authors',
    'introduced',
    'vote',
    'yna',
    // 'billType',
    'latestMotion',
  ];

  const ths = table
    .append('thead')
    .append('tr')
    .selectAll('th')
    .data(cols)
    .enter()
    .append('th')
    .text((d) => d)
    .style('text-align', 'left')
    .style('padding', '5px')
    .style('border-bottom', '2px solid #d3d3d3');

  const trs = table
    .append('tbody')
    .selectAll('tr')
    .data(data)
    .enter()
    .append('tr')
    .style('cursor', 'pointer')
    .on('mouseenter', (event) => {
      select(event.target).style('background-color', '#d3d3d3aa');
    })
    .on('mouseleave', (event) => {
      trs.filter((_, i) => i % 2 === 1).style('background-color', '#d3d3d310');
      trs.filter((_, i) => i % 2 === 0).style('background-color', 'white');
    })
    .on('click', (event, d) => {
      alert(
        `${d.title}\n\n` + 'instead of this pop up it could link to the bill',
      );
    });

  trs.filter((_, i) => i % 2 === 1).style('background-color', '#d3d3d310');

  const tds = trs
    .selectAll('td')
    .data((d) =>
      cols.map((c) => {
        if (c === 'introduced') {
          return {
            col: 'date',
            vals: { introduced: d.introduced, vote: d.vote.date },
          };
        }
        return { col: c, val: d[c] };
      }),
    )
    .enter()
    .append('td')
    // .style('border-top', '1px solid #d3d3d322')
    .style('padding', '5px');

  const formatTime = timeFormat('%b. %d');
  const dateLineBreak =
    '<hr style="border: 0.5px solid #d3d3d388; margin: 1px"/>';

  tds
    .filter((d) => !['authors', 'vote'].includes(d.col))
    .html((d) => {
      if (d.col === 'date') {
        return (
          (d.vals?.introduced
            ? `Introduced ${formatTime(d.vals.introduced)}`
            : '') +
          (d.vals.vote
            ? `${dateLineBreak}Voted on ${formatTime(d.vals.vote)}`
            : '')
        );
      }
      if (d.col === 'vote') {
        return d.val.desc;
      }
      if (d.col === 'yna') {
        return d.val.join('\n');
      }
      if (d.col === 'billType') {
        return d.val.join(',\n');
      }
      return d.val;
    });

  const imageSize = 50;

  tds
    .filter((d) => d.col === 'authors')
    .append('div')
    .style('display', 'flex')
    .style('justify-content', 'center')
    .selectAll('img')
    .data((d) => d.val)
    .enter()
    .append('img')
    .style('margin', '3px')
    .attr('src', (d) => getPhotoUrl(d))
    .style('width', `${imageSize}px`)
    .style('height', `${imageSize}px`)
    .style('border-radius', '50%');

  const colors = {
    CONSENT: '#00ff00',
    OBJECTION: '#ff0000',
  };

  tds
    .filter((d) => d.col === 'vote' && d.val.desc !== '')
    .append('div')
    .style('display', 'flex')
    .append('p')
    .style('padding', '7px 5px')
    .style('background-color', (d) => `${colors[d.val.desc]}33`)
    .style('border-radius', '20px')
    .style('font-size', '10pt')
    .text((d) => {
      console.log(d);
      return d.val.desc;
    });
};

export default makeTable;
