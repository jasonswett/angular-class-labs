function addTwoNumbers(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }

  return a + b;
}

describe('addTwoNumbers', function() {
  it('adds two numbers', function() {
    expect(addTwoNumbers(4, 5)).toEqual(9);
  });

  describe('first number is not a number', function() {
    it('returns false', function() {
      expect(addTwoNumbers('some string', 5)).toBe(false);
    });
  });

  describe('second number is not a number', function() {
    it('returns false', function() {
      expect(addTwoNumbers(4, 'some string')).toBe(false);
    });
  });
});
