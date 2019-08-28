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

export const csvToArray = (csv, setResult) => {
    const firstLineEnd = csv.indexOf('\n');
    const titles = csv.slice(0, firstLineEnd).split(',');
    const stringLines = csv
        .slice(firstLineEnd + 1)
        .split('\n').reduce((prev, curr) => {
            const parsedObj = {};
            curr.split(',').forEach((val, i) => {
                parsedObj[titles[i]] = val;
            });
            return [...prev, parsedObj];
        }, []);
    console.log('titles', titles)
    console.log('strings', stringLines)
};