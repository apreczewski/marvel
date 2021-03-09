import { formatNumber } from './format';

interface ElementData {
  value: number;
}

export const sumArray = (array: []) => {
  let sum = 0;

  array.forEach((value: string) => {
    sum += formatNumber(value);
  })

  return sum;
}

