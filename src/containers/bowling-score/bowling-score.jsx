export const calculateBowlingScore = (numbers)  => {
    let totalSum = 0;
    const frames = calculateFrames(numbers);
    frames.forEach((frame, index) => {
        if (frame.length === 2) {
            const isFrameStrike = isStrike(frame);
            let sum = frame.reduce((a,b) => a + b, 0)
            if (sum === 10 && frames[index + 1]) {
                sum = sum + frames[index + 1][0]; 
            } 
            if(isFrameStrike && frames[index + 1] && frames[index + 2]) {
                const tossToAdd = frames[index + 1][1] === 0 ? frames[index + 2][0] : frames[index + 1][1];
                sum = sum + tossToAdd;
            }
            totalSum +=sum;
        } else {
            let sum = frame.reduce((a,b) => a + b, 0)
            totalSum +=sum + frame[2];
        }
    })
    return totalSum;
}

export const isStrike = (frame) => {
    return frame[0] === 10
}
const isBigFrame = (frames) => {

}
export const calculateFrames = (tosses) => {
    const results = [];
    let frame = [];
    tosses.forEach((toss, index) => {
        if( index % 2 === 0) {
            frame.push(toss);
        } else {
            frame.push(toss);
            if(index === 19 && tosses[index +1]) {
                frame.push(tosses[index +1])
            }
            results.push(frame);
            frame = []
        };
    });
    return results;
}