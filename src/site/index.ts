/**
 * @author Alex
 * @since 9/11/2021
 */
import './styles.scss';

import { csv } from 'd3-fetch';
import { timeParse } from 'd3-time-format';
import { Bill } from '../utility/types';

import makeHistory from '../plots/history';
import makeTable from '../plots/table';
import makePeople from '../plots/people';
import makeSlider from '../plots/slider';

(async () => {
  const formatDateFull = timeParse('%m/%d/%Y');
  const formatDateAbbr = timeParse('%m/%d/%y');

  const bills: Array<Bill> = (await csv('src/data/test.csv', (d: any, i) => {
    const yna = d.yna.split(/\n/g).map((dd: string) => dd.split('-'));

    const output: Bill = {
      action: d.action,
      authors: d.authors.split(/,\n?/).map((d) => d.trim()),
      billType: d.billType.split(/\//g),
      introduced: formatDateFull(d.introduced)!,
      latestMotion: d.latestMotion,
      link: d.link,
      result: d.result.split(/;/g),
      studentSponsor: d.studentSponsor.split(/,\n/g),
      title: d.title,
      vote: {
        desc: d.vote.split('\n')[0],
        date: formatDateAbbr(d.vote.split(': ')[1])!,
      },
      yna,
      id: i,
    };

    return output;
  })) as any;

  const resize = () => {
    // makeHistory(bills);
    makeTable(bills);
    makePeople(bills);
    makeSlider(bills);
  };

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
})();
