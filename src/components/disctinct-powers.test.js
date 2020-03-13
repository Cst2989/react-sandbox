import { calculateDistinctPowers } from './distinct-powers';

describe('Distinct Powers', () => {
    const a = [2,5];
    const b = [2,5];
    const outputData = [4,8,9,16,25,27,32,64,81,125,243,256,625,1024,3125];

    it('get the distinct series in numerical order of all a at power b combinations', () => {
        expect(calculateDistinctPowers(a, b)).toBe(outputData);
    })
});