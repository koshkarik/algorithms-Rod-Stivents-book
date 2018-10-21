// GCD of two natural numbers
// Euclidean algorithm

const gcd = (num1, num2) => num2 === 0 ? num1 : gcd(num2, num1 % num2);

export default gcd;
