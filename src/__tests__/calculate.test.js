import calculate from '../logic/calculate';

describe('Testing the calculate function with some calculations to check if the results are mathematically correct.', () => {
  test('15 + 3 = 18', () => {
    const object = {
      total: 15,
      next: 3,
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('18');
  });
  test('15 x 3 = 45', () => {
    const object = {
      total: 15,
      next: 3,
      operation: 'x',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('45');
  });
  test('15 - 3 = 12', () => {
    const object = {
      total: 15,
      next: 3,
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('12');
  });
  test('15 % 3 = 0', () => {
    const object = {
      total: 15,
      next: 3,
      operation: '%',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('0');
  });
  test('15 ÷ 3 = 5', () => {
    const object = {
      total: 15,
      next: 3,
      operation: '÷',
    };
    const result = calculate(object, '=');
    expect(result.total).toBe('5');
  });
});
