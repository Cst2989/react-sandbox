import { calculateNumberOfStepsBeforeKaprekarsConstantIsReached } from './kaprekars-constant';

describe('Kaprekar Constant', () => {
    // Kaprekar Constant = 6174
    const inputData1 = 2111; // sort digits descending and then ascending -> subtranct those numbers. Repeat until Kaprekar Constant is reached
    const outputData1 = 5;
    const inputData2 = 9831;
    const outputData2 = 7;

    it('get the number of steps the input number takes before reaching Kaprekar Constant', () => {
        expect(calculateNumberOfStepsBeforeKaprekarsConstantIsReached(inputData1)).toBe(outputData1);
    })

    it('get the number of steps the input number takes before reaching Kaprekar Constant', () => {
        expect(calculateNumberOfStepsBeforeKaprekarsConstantIsReached(inputData2)).toBe(outputData2);
    })
});