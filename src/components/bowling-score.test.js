import { calculateBowlingScore } from './bowling-score';
import { calculateFrames } from './bowling-score';

describe('Bowling score', () => {
    const firstData = [1, 1,1, 1, 1, 1,1, 1,1, 1,1, 1, 1, 1,1, 1,1, 1,1, 1];
    const spareData = [9, 1,1, 1, 1, 1,1, 1,1, 1,1, 1, 1, 1,1, 1,1, 1,1, 1]
    const strikeData = [10, 0,1, 1, 1, 1,1, 1,1, 1,1, 1, 1, 1,1, 1,1, 1,1, 1];
    const perfectGame = [10, 0, 10, 0, 10, 0,10, 0,10, 0,10, 0, 10, 0,10, 0,10, 0,10, 10, 10];
    const framesData = [9,1,3,4];
    const realGame = [5, 4, 8, 2, 10, 0, 10, 0, 1, 0, 9, 1, 0, 10, 10, 0, 6, 4, 7, 3, 10];

    it('should do normal sum without strikes or spares', () => {
        expect(calculateBowlingScore(firstData)).toBe(20);
    })
    it('should calculate correct sum if we have a spare in a frame', () => {
        expect(calculateBowlingScore(spareData)).toBe(29);
    })
    it('should calculate correct frames', () => {
        expect(calculateFrames(framesData)).toEqual([[9,1] , [3,4]]);
    })
    it('should calculate correct strike', () => {
        expect(calculateBowlingScore(strikeData)).toEqual(30);
    });
    it('should calculate perfect Score', () => {
        expect(calculateBowlingScore(perfectGame)).toEqual(300);
    })
    fit('should calculate real Game Score', () => {
        expect(calculateBowlingScore(realGame)).toEqual(149);
    })

    it('should calculate correct frames for odd tosses', () => {
        const frames = calculateFrames(perfectGame);
        expect(frames[frames.length - 1].length).toBe(3);
    })
});