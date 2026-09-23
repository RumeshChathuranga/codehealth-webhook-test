// math.test.js
const { add, subtract } = require('./math');

describe('Math Utility Tests', () => {
  
  // Test suite setup (optional)
  beforeEach(() => {
    // This runs before every individual test case
  });

  // Test case 1: Addition
  test('should correctly add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  // Test case 2: Subtraction
  test('should correctly subtract two numbers', () => {
    const result = subtract(10, 4);
    expect(result).toBe(6);
  });

});
