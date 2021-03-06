import { select, selectAll } from 'd3-selection';
import { Bill } from '../utility/types';

const makePopup = (data: Bill) => {
  const popupSize = { height: 600, width: 400 };

  // const popup = select('body')
  //   .selectAll('#tooltip')
  //   .data([data])
  //   .enter()
  //   .append('div')
  //   .attr('id', 'tooltip')
  //   .style('position', 'absolute')
  //   .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)
  //   .style(
  //     'top',
  //     `${window.innerHeight / 2 - popupSize.height / 2 + window.scrollY}px`,
  //   )
  //   .style('height', '200px')
  //   .style('width', '200px')
  //   .html('hello')
  //   .style('background-color', 'red');

  const makeText = (sel) => {
    const b = selectAll(sel);
    b.selectAll('*').remove();
    b.append('h2').text((d) => d.title);
    b.append('text').text((d) => d.authors);

    /**
     * Pop up formatting
     *
     */
    console.log(b.data());
  };

  const popup = select('body')
    .selectAll('#tooltip')
    .data([data])
    .join(
      (enter) => {
        enter
          .append('div')
          .attr('id', 'tooltip')
          .style('position', 'absolute')
          .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)
          .style(
            'top',
            `${
              window.innerHeight / 2 - popupSize.height / 2 + window.scrollY
            }px`,
          )
          .style('height', `${popupSize.height}px`)
          .style('width', `${popupSize.width}px`)
          .call(makeText)
          .style('display', 'block')
          .style('border', '1px solid black')
          .style('background-color', 'white')
          .style('padding', '10px');
      },
      (update) => {
        update
          .style('display', 'block')
          .style('left', `${window.innerWidth / 2 - popupSize.width / 2}px`)
          .style(
            'top',
            `${
              window.innerHeight / 2 - popupSize.height / 2 + window.scrollY
            }px`,
          )
          .call(makeText);
      },
    );

  document.addEventListener('scroll', () => {
    selectAll('#tooltip').style('display', 'none');
  });
};

export default makePopup;
