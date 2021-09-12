/**
 * @file Scales for the curved timeline of bill history
 */
import { scaleLinear, scaleTime } from 'd3-scale';
import { SizeType, MarginType } from './types';

const random = (mag: number) => (Math.random() - 0.5) * 2 * mag;

type ScaleInput = (
  size: SizeType,
  margin: MarginType,
  nPeriods: number,
  timeFrame: [Date, Date],
  timeDomain: [Date, Date],
  rand?: [number, number],
) => (i: number) => [number, number];

/**
 * Sin scale based on the proportion of the data
 *
 * @param {SizeType} size
 * @param {MarginType} margin
 * @param {number} nPeriods number of periods in the sine curve
 * @param {[Date, Date]} timeFrame the start and end date of the timeline
 * @param {[number, number]} timeDomain the extent of bills being introduced
 * @param {[number, number]} rand magnitude of random position noise
 * @returns {(i: number) => [number, number]} i is a number in [0, 1] that is the proportion of the path, returns x,y pixel location
 */
const sinScale: ScaleInput = (
  size,
  margin,
  nPeriods,
  timeFrame,
  timeDomain,
  rand = [0, 0],
) => {
  const x = scaleLinear()
    .domain([-1, 1])
    .range([margin.left, size.width - margin.right]);

  const timeToPct = scaleTime().domain(timeFrame).range([0, 1]);
  const yDomain = [timeToPct(timeDomain[0]), timeToPct(timeDomain[1])];

  const y = scaleLinear()
    .domain(yDomain)
    .range([margin.top, size.height - margin.bottom]);

  return (i) => [
    x(Math.sin(i * nPeriods * 2 * Math.PI)) + random(rand[0]),
    y(i) + random(rand[1]),
  ];
};

type ScaleInputDate = (
  size: SizeType,
  margin: MarginType,
  nPeriods: number,
  timeFrame: [Date, Date],
  timeDomain: [Date, Date],
  rand?: [number, number],
) => (i: Date) => [number, number];

/**
 * Sin scale based as a timeline, based on dates
 *
 * @param {SizeType} size
 * @param {MarginType} margin
 * @param {number} nPeriods number of periods in the sine curve
 * @param {[Date, Date]} timeFrame the start and end date of the timeline
 * @param {[Date, Date]} timeDomain the extent of bills being introduced
 * @param {[number, number]} rand magnitude of random position noise
 * @returns {(i: number) => [number, number]} i is a number in [0, 1] that is the proportion of the path, returns x,y pixel location
 */
const sinScaleDate: ScaleInputDate = (
  size,
  margin,
  nPeriods,
  timeFrame,
  timeDomain,
  rand = [0, 0],
) => {
  const scale = sinScale(size, margin, nPeriods, timeFrame, timeDomain, rand);
  const dScale = scaleTime().domain(timeFrame).range([0, 1]);
  return (d) => scale(dScale(d));
};

export { sinScale, sinScaleDate };
