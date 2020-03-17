export const calculateTwoSumIndexes = (input, target) => {
    const originalInput = [...input];
    const secondIndex = recursionFunction(input,target, originalInput);
    return secondIndex;
}

const recursionFunction = (input, target, originalInput) => {
    const value = input.shift();
    const indexes = [];
    indexes.push(originalInput.indexOf(value));
    input.forEach((i) => {
        if (i + value === target) {
            indexes.push(originalInput.indexOf(i))
        }
    })

    if(indexes.length === 2) {
        return indexes;
    } else {
        const originalInputRecursion = [...originalInput];
        return recursionFunction(input, target, originalInputRecursion)
    }
}