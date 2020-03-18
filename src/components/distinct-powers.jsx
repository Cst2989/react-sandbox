export const calculateDistinctPowers = (baseNumberRange, powerNumberRange) => {
    const results = [];
    for(let x=baseNumberRange[0]; x<= powerNumberRange[1]; x++) {
        for(let y=powerNumberRange[0]; y<= powerNumberRange[1]; y++) {
            let number = Math.pow(x, y);
            if(results.indexOf(number) === -1) {
                results.push(number);
            }
        }
    }
    return results.sort((a,b) => a < b ? -1 : 1)
}