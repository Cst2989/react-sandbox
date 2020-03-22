import { calculateDistinctPowers } from './distinct-powers';

describe('Distinct Powers', () => {
    const a = [2,5];
    const b = [2,5];
    const outputData = [4,8,9,16,25,27,32,64,81,125,243,256,625,1024,3125];

    const a2 = [1,2];
    const b2 = [1,2];
    const outputData2 = [1, 2, 4];

    it('get the distinct series in numerical order of all a at power b combinations', () => {
        expect(calculateDistinctPowers(a, b)).toEqual(outputData);
    })

    it('get the distinct series in numerical order of all a at power b combinations second trye', () => {
        expect(calculateDistinctPowers(a2, b2)).toEqual(outputData2);
    })
});