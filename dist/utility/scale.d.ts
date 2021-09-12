import { SizeType, MarginType } from './types';
declare type ScaleInput = (size: SizeType, margin: MarginType, nPeriods: number, timeFrame: [Date, Date], timeDomain: [Date, Date], rand?: [number, number]) => (i: number) => [number, number];
declare const sinScale: ScaleInput;
declare type ScaleInputDate = (size: SizeType, margin: MarginType, nPeriods: number, timeFrame: [Date, Date], timeDomain: [Date, Date], rand?: [number, number]) => (i: Date) => [number, number];
declare const sinScaleDate: ScaleInputDate;
export { sinScale, sinScaleDate };
