const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the subtraction of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 4.9, 1.3)).to.equal(4);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 8.7, 2.1)).to.equal(4);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
