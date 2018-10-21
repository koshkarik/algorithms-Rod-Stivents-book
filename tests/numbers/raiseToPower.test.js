import raiseToPower from '../../numbers/raiseToPower';

describe('raise to power function', () => {
  it('should 7 ** 6 should return 2401', () => {
    const result = raiseToPower(7, 6);
    expect(result).toBe(117649);
  });

  it('should raiseToPower(2, 5) to equal 32', () => {
    expect(raiseToPower(2, 5)).toBe(32);
  });

  it('should raiseToPower(2, 1) to equal 2', () => {
    expect(raiseToPower(2, 1)).toBe(2);
  })
});
