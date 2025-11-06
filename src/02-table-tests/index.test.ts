import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: -5, action: Action.Add, expected: -2 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: -5, b: 2, action: Action.Subtract, expected: -7 },
  { a: -2, b: 5, action: Action.Subtract, expected: -7 },
  { a: -2, b: -5, action: Action.Subtract, expected: 3 },
  { a: 2, b: 5, action: Action.Multiply, expected: 10 },
  { a: -2, b: -5, action: Action.Multiply, expected: 10 },
  { a: -2, b: 3, action: Action.Multiply, expected: -6 },
  { a: 4, b: 0.5, action: Action.Multiply, expected: 2 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: -6, b: 3, action: Action.Divide, expected: -2 },
  { a: 6, b: -3, action: Action.Divide, expected: -2 },
  { a: -6, b: -3, action: Action.Divide, expected: 2 },
  { a: 4, b: 0.5, action: Action.Divide, expected: 8 },
  { a: 4, b: 0.5, action: Action.Exponentiate, expected: 2 },
  { a: 4, b: 2, action: Action.Exponentiate, expected: 16 },
  { a: 4, b: -1, action: Action.Exponentiate, expected: 0.25 },
  { a: -4, b: -1, action: Action.Exponentiate, expected: -0.25 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '$a $action $b = $expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
