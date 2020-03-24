export const caulcateLargestPalindrom = (inputRange) => {
    const largestNumber = (inputRange - 1) * (inputRange - 2);
    for(let x = largestNumber; x > 0; x--) {
        if(isPalindrom(x)) {
            for(let y = inputRange -1; y > 0; y--) {
                if (x % y === 0 && x / y < inputRange) {
                    return x;
                }
            }
        }
    }

}

const isPalindrom = (number) => {
    const string = number.toString();
    for(let i = 0 ; i < string.length; i++) {
        if(string[i] !== string[(string.length - 1) - i]) {
            return false;
        }
    }
    return true;
}