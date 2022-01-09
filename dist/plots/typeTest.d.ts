declare type Hex = `#${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
interface Vals {
    fill: 'red' | 'green' | 'blue' | Hex;
    'text-anchor': 'start' | 'middle' | 'end';
}
declare type Setter = <Values extends keyof Vals>(a: Values, b: Vals[Values]) => void;
declare const setAttr: Setter;
export default setAttr;
