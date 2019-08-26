//7
import React, {useState, useEffect} from 'react';
import {Input, Button} from '../components';
import {numberToDigit} from '../utils';

export default () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState([]);
    console.log(result);
    useEffect(() => {
        numberToDigit(number, setResult);
    }, [number]);
    return(
        <div>
            <Input
                onChange={(e) => setNumber(e.target.value)}
                name='stringToWordsArray'
                type='number'
            />
            <div>{result.map((digit) => <p>{digit}</p>)}</div>
        </div>
    );
};