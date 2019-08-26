export const convertStringToWordsArray = (string, setSplitedString) => {
    const regExp =  /[^a-zA-Z-]+/;
    setSplitedString(string.split(regExp));
};

export const getNthElement = (n, args, getResult) => {
    console.log(n, args);
    getResult(args.splice(n, 1)[0]);
};