import lib from './lib.js';
import fizzBuzz from './fizzbuzz.js';

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        const result = lib.absolute(1);
        expect(result).toBe(1);
    });
    it('should return a negative number if input is negative', () => {
        const result = lib.absolute(-1);
        expect(result).toBe(1);
    });
    it('should return positive number if input is zero', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('fizzbuzz', () => {
    it('should return an exception if input is not a number', () => {
        const args = [null, undefined, false, true, isNaN, '', 'a', {}, []];

        args.forEach((element) => {
            expect(() => {
                fizzBuzz(element).toThrow();
            });
        });
    });
});
