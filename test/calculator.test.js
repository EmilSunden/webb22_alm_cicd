const assert = require('assert');
const Calculator = require('../src/calculator');
// Calculator
describe('Calculator', function () {
  let calc;
  beforeEach(function () {
    calc = new Calculator();
    this.retries(2);
  });
  describe('getResult()', function () {
    it('should return 0 when the calculator is created', function () {
      assert.equal(calc.getResult(), 0);
    });
  });

  describe('add', function () {
    it('should return -1 when add -1 + 0', function () {
      assert.equal(calc.add(-1, 0), -1);
    });
    it('should return -2 when add -1 -1', function () {
      assert.equal(calc.add(-1, -1), -2);
    });
    it('should return 0 when -1 + 1', function () {
      assert.equal(calc.add(-1, 1), 0);
    });
  });

  describe('multiply', function () {
    it('should return 1 when multiplying 1 * 1', function () {
      assert.equal(calc.multiply(1, 1), 1);
    });
    it('should return 0 when multiplying 1 * 0', function () {
      assert.equal(calc.multiply(1, 0), 0);
    });
    it('should return 0 when multiplying 0 * 1', function () {
      assert.equal(calc.multiply(0, 1), 0);
    });
    it('should return 4 when multiplying 2 * 2', function () {
      assert.equal(calc.multiply(2, 2), 4);
    });
    it('should return -4 when multiplying -2 * 2', function () {
      assert.equal(calc.multiply(-2, 2), -4);
    });
    it('should return 4 when multiplying -2 * -2', function () {
      assert.equal(calc.multiply(-2, -2), 4);
    });
  });

  describe('divide', function () {
    it('should return 2 when 4 / 2 ', function () {
      assert.equal(calc.divide(4, 2), 2);
    });
  });

  describe('subtract', function () {
    it('should return 2 when 4 - 2 ', function () {
      assert.equal(calc.subtract(4, 2), 2);
    });
  });
});
