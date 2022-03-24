import operate from '../logic/operate';

describe('operate results are correct', () => {
  test('5 + 3 = 8', () => {
    const obj = {
      numberOne: 5,
      numberTwo: 3,
      operation: '+',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('8');
  });

  test('5 - 3 = 2', () => {
    const obj = {
      numberOne: 5,
      numberTwo: 3,
      operation: '-',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('2');
  });

  test('12 ÷ 2 = 6', () => {
    const obj = {
      numberOne: 12,
      numberTwo: 2,
      operation: '÷',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('6');
  });

  test('5 x 5 = 25', () => {
    const obj = {
      numberOne: 5,
      numberTwo: 5,
      operation: 'x',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('25');
  });

  test('13 % 3 = 1', () => {
    const obj = {
      numberOne: 13,
      numberTwo: 3,
      operation: '%',
    };

    const result = operate(obj.numberOne, obj.numberTwo, obj.operation);

    expect(result).toBe('1');
  });
});
