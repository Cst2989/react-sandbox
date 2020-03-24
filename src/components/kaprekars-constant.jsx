const KAPREKAR_CONSTANT = 6174;

export const calculateNumberOfStepsBeforeKaprekarsConstantIsReached = (input) => {
    const inputArray = input.toString().split("");
    let steps = 1;
    const result = calculateSteps(inputArray, steps);
    return result;
}

const calculateSteps = (values, steps) => {
    const ascending = values.sort((a,b) => parseInt(a) > parseInt(b) ? 1 : -1).reduce((a,b) => a+b, '');
    const descending = values.sort((a,b) => parseInt(a) > parseInt(b) ? -1 : 1).reduce((a,b) => a+b, '');


    // need to add zeroes
    let difference = parseInt(descending) - parseInt(ascending);
    if ( difference < 10) {
        difference = difference.toString() + '000';
    }
    if ( difference < 100) {
        difference = difference.toString() + '00';
    }
    if ( difference < 1000) {
        difference = difference.toString() + '0';
    }
    if ( parseInt(difference) !== KAPREKAR_CONSTANT) {
        steps++;
        return calculateSteps(difference.toString().split(""), steps);
    } else {
        return steps;
    }

    
}