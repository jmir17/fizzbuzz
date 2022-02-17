import { fizzBuzz } from '../src/FizzBuzz';

describe('FizzBuzz Tests', () => {
    it('should return a 1 when seding 1', () => {
        expect(fizzBuzz(1)).toBe("1");
    });
    it('should return a Fizz when seding 3', () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    it('should return a Buzz when seding 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
    it('should return a FizzBuzz when seding 15', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
});
