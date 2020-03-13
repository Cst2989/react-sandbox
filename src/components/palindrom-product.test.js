import { caulcateLargestPalindrom } from './palindrom-product';

describe('Largest Palindrom Product', () => {
    const inputData = 100;
    const outputData = 9009;

    it('get biggest palindrom number that is a product of two numbers smaller that the inputData', () => {
        expect(caulcateLargestPalindrom(inputData)).toBe(outputData);
    })
});