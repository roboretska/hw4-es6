export const convertStringToWordsArray = (string, setSplitedString) => {
    const regExp =  /[^a-zA-Z-]+/;
    setSplitedString(string.split(regExp));
};

export const getNthElement = (n, getResult, ...args) => {
    console.log(n, args);
    getResult(args.splice(n, 1)[0]);
};

export const numberToDigit = (num, setResult) => {
    setResult([...`${num}`]
        .map(digit => parseInt(digit))
        .filter((digit) => !isNaN(digit)));
};