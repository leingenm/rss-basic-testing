import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 1, b: 2, action: Action.Add });
    expect(result).toBe(3);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 10, b: 3, action: Action.Subtract });
    expect(result).toBe(7);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 3, b: 5, action: Action.Multiply });
    expect(result).toBe(15);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 3, action: Action.Divide });
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(8);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 3, action: 'Sum' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: 'a', b: 'b', action: Action.Add });
    expect(result).toBeNull();
  });
});
