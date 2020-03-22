import { caulcateLargestPalindrom } from './palindrom-product';

describe('Largest Palindrom Product', () => {
    const inputData = 100;
    const outputData = 9009;

    const secondInputData = 1000;
    const secondOutputData = 906609;

    it('get biggest palindrom number that is a product of two numbers smaller that the inputData', () => {
        expect(caulcateLargestPalindrom(inputData)).toBe(outputData);
    })

    it('get biggest palindrom number that is a product of two numbers smaller that the inputData', () => {
        expect(caulcateLargestPalindrom(secondInputData)).toBe(secondOutputData);
    })
});