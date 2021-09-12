import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';
import { nest } from 'd3-collection';
import { extent } from 'd3-array';
import { scaleBand, scaleTime } from 'd3-scale';

import { getPhotoUrl } from '../utility/images';

import { Bill } from '../utility/types';

const makeBill = (data: Bill) => {};

const makeTable = (data: Array<Bill>) => {
  const container = select('#labby-as-bill-tracker-slider').attr(
    'class',
    'labby-as-senate-styling',
  );
};

export default makeTable;
