import gcd from '../../numbers/gcd';


describe('gcd function', () => {
  it('should return GCD from 9 and 3', () => {
    const result = gcd(9, 3);
    const expected = 3;
    expect(result).toBe(expected);
  });

  it('should return 11 from 110 and 33', () => {
    expect(gcd(110, 33)).toBe(11);
  });

  it('should return 231 from gcd(4851, 3003)', () => {
    expect(gcd(4851, 3003)).toBe(231);
  })
});
