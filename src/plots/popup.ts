import { select, selectAll } from 'd3-selection';
import { Bill } from '../utility/types';

const makePopup = (data: Bill) => {
  const popupPadding = {left: 10, right: 10}
  const popupSize = { height: 600, width: Math.min(600, window.innerWidth-40)-popupPadding.left-popupPadding.right};
  // Math.min(600, window.innerWidth - 40)
  console.log(popupSize)

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
    b.append('text').text((d) => (d.authors).join(' and ')); 
    // b.append('body').text((d) => d.link); 
    // add bill description 
    
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
          .style('padding', `0 ${popupPadding.right}px 0 ${popupPadding.left}px`);
      },
      (update) => {
        update
          .style('display', 'block')
          .style(
            'top',
            `${
              window.innerHeight / 2 - popupSize.height / 2 + window.scrollY
            }px`,
          )
          .call(makeText);
      },
    );
    select('#tooltip')
    .style('height', `${popupSize.height}px`)
    .style('width', `${popupSize.width}px`)
    .style('left', `${window.innerWidth / 2 - popupSize.width / 2 - popupPadding.left}px`)
    
  document.addEventListener('scroll', () => {
    selectAll('#tooltip').style('display', 'none');
  });
};

export default makePopup;
