import { calculateTwoSumIndexes } from './two-sum';

describe('Two Sum Indexes', () => {
    const inputData = [2,7,9,12,13];
    const target = 9;
    const outputData = [0,1];

    it('get the indexes that sum up to the target value', () => {
        expect(calculateTwoSumIndexes(inputData, target)).toBe(outputData);
    })
});