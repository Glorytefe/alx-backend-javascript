// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return 5 when type is SUM and a = 2.4 and b = 2.6', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 2.6), 5);
    });

    it('should return 0 when type is SUM and a = -0.4 and b = 0.3', () => {
      assert.strictEqual(calculateNumber('SUM', -0.4, 0.3), 0);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return -1 when type is SUBTRACT and a = 1.4 and b = 2.5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.5), -1);
    });

    it('should return 2 when type is SUBTRACT and a = 2.8 and b = 1.1', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.8, 1.1), 2);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return 2 when type is DIVIDE and a = 4.4 and b = 2.2', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.4, 2.2), 2);
    });

    it('should return "Error" when type is DIVIDE and b rounds to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.5, 0.4), 'Error');
    });
  });

  describe('Invalid operation type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('INVALID', 2, 3);
      }, /Invalid operation type/);
    });
  });
});
