import React, {useState, useEffect} from 'react';
import {createPromise, promisesInSeries, callCallbackNTimes} from '../utils'
//150;

export default () => {
    const promisesArr = [() => createPromise(7000), () => createPromise(8000), () => createPromise(10000)];
    const [result, setResult] = useState('');
    promisesInSeries(promisesArr, setResult);
    let i = '';
    callCallbackNTimes(5, (n) => i += `$ {n}th iteration `);
    console.log('i', i);
    return(
        <div>
            Open console, please
        </div>
    )

}
