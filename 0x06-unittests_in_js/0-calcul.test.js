const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when a = 1.4 and b = 2.6', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when a = 1.5 and b = 2.5', () => {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return 0 when a = 0.1 and b = 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -2 when a = -1.4 and b = -1.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -1.6), -2);
  });

  it('should return 1 when a = 1 and b = 0', () => {
    assert.strictEqual(calculateNumber(1, 0), 1);
  });
});
