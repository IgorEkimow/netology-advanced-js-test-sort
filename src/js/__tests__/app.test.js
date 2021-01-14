import { expect } from '@jest/globals';
import sortingCharacters from '../app';

const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const sortedCharacters = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('Should to be sorting characters by toEqual', () => {
  const result = sortingCharacters(characters);
  expect(result).toEqual(sortedCharacters);
});

test('Should not sorting characters by toBe', () => {
  const result = sortingCharacters(characters);
  expect(result).not.toBe(sortedCharacters);
});
