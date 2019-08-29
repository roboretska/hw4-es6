import React, {useState, useEffect} from 'react';
import {createPromise, promisesInSeries} from '../utils'
//150;

export default () => {
    const promisesArr = [() => createPromise(7000), () => createPromise(8000), () => createPromise(10000)];
    const [result, setResult] = useState('');
    promisesInSeries(promisesArr, setResult);
    return(
        <div>
            Open console, please
        </div>
    )

}
