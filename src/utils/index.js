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

export const addListener = (elem, event, handleFunc, delegationTags = null) => {
    debugger;
    const handler = delegationTags && delegationTags.length
        ? (e) => {
        const isMatch = delegationTags.find((elemClass) =>
            e.target.className.match(elemClass)
        );
            isMatch ? handleFunc.call(e.target, e) : console.info('Not that elem')}
        : () => console.info('without delegation');
    elem.addEventListener(event, handler);
};

export const getUnion = (firstArr, secondArr, setResult) => {
    setResult(Array.from(new Set([...firstArr, ...secondArr])).sort());
};

export const createPromise = (delay) => {
    return new Promise(((resolve) => {
        console.log(`New promise with delay ${delay} is processing`);
        setTimeout(resolve, delay);
    }))
};

export const promisesInSeries = (arr) => {
    return arr.reduce((current, next, ) => current.then(next), Promise.resolve());
};

export const callCallbackNTimes = (n, callback) => {
    const func = (i = 0) => {
        callback(i);
        i < n && func(++i);
    };
    return func()
};

export const splitValuesToTwoArrays = (arr, filterFunc) => {
    return arr.reduce((acc, currValue) => {
        const isRight = filterFunc(currValue) ? 0 : 1;
        acc[isRight].push(currValue);
        return acc;
    }, [[], []])
};

export const  calcultEloResults = (players, k = 16) => {
    debugger;
   const expectedRating = (selfCurrRating, opponentCurrRating) =>
       1 / (1 + 10 ** ((opponentCurrRating - selfCurrRating) / 400));
   const newPlayersRating = (selfCurrRating, expectedSelfRation, currScore) =>
       //current score: 1 if win, 0 if lose, 0.5
       Math.round(selfCurrRating + k * (currScore - expectedSelfRation));
   return players.map((player, i, arr) => {
        const expectedPlayerRating = expectedRating(player.rating, arr[player.opponent].rating);
        return newPlayersRating(player.rating, expectedPlayerRating, player.isWon);
    })
};
