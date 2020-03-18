import { calculatePlusMinusRatio } from './plus-minus';

describe('Plus Minus Ratio', () => {
    const inputData = [1, 1, 0 ,-1, -1];
    const outputData = [0.400000, 0.400000, 0.200000];

    const inputData2 = [1,2,3,4,0,0,0,0,0, -1];
    const outputData2 = [0.400000, 0.100000, 0.500000];

    it('shoud get the ratios of the positive, negative and zero numbers in array', () => {
        expect(calculatePlusMinusRatio(inputData)).toEqual(outputData);
    })

    it('shoud get the ratios of the positive, negative and zero numbers in array', () => {
        expect(calculatePlusMinusRatio(inputData2)).toEqual(outputData2);
    })
});