export const calculatePlusMinusRatio = (numbers) => {
    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRatio = 0;

    const sixDigits = 1.000000;

    numbers.forEach(number=> {
        if (parseInt(number) === 0) {
            zeroRatio = zeroRatio + (1 / numbers.length);
        } else if (parseInt(number) < 0) {
            negativeRatio = negativeRatio + (1 / numbers.length);
        } else {
            positiveRatio = positiveRatio + (1 / numbers.length);
        }
    })

    return [ positiveRatio * sixDigits, negativeRatio * sixDigits, zeroRatio * sixDigits ];
}