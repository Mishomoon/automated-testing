import { divide } from '../src/calculator.js';

describe('divide', () => {

    it('divides two numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('rejects a non-number first argument', () => {
    expect(() => divide("10", 2))
        .toThrow("Both arguments must be numbers");
});

it('rejects a non-number second argument', () => {
    expect(() => divide(10, "2"))
        .toThrow("Both arguments must be numbers");
});

it('rejects NaN as an argument', () => {
    expect(() => divide(NaN, 2))
        .toThrow("Arguments cannot be NaN");
});

it('rejects division by zero', () => {
    expect(() => divide(10, 0))
        .toThrow("Division by zero is not allowed");
});

});