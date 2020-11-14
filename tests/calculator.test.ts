import { expect } from 'chai';
import Calculator from '../src/ts/Calculator';

describe('calculate', function() {
  it('add', function() {
    let result = Calculator.Sum(5, 2);
    expect(result).equal(7);
  });

  it('substract', function() {
    let result = Calculator.Difference(5, 2);
    expect(result).equal(3);
  });
});
