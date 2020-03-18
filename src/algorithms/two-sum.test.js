import { calculateTwoSumIndexes } from './two-sum';

describe('Two Sum Indexes', () => {
    const inputData = [2,7,9,12,13];
    const target = 9;
    const outputData = [0,1];

    const inputData2 = [4,1,4,2,23];
    const target2 = 3;
    const outputData2 = [1,3];

    it('get the indexes that sum up to the target value', () => {
        expect(calculateTwoSumIndexes(inputData, target)).toEqual(outputData);
    })

    it('get the indexes that sum up to the target value 2', () => {
        expect(calculateTwoSumIndexes(inputData2, target2)).toEqual(outputData2);
    })
});