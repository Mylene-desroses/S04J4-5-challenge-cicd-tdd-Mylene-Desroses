import { decrementCounter } from '../src/counter.ts';
import { test, expect } from 'vitest';

test ('must decrease', () => {
  let num: number = 5
  const result = decrementCounter(num)
  expect(result).toEqual(4);
});
