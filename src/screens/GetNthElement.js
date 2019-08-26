import React, {useState} from 'react';
import {Input, Button} from '../components'
import {getNthElement} from '../utils'

export default () => {
    const [stringValue, changeStringValue] = useState('');
    const [indexValue, setIndexValue] = useState(0);
    const [result, getResult] = useState(null);
    const getElement = () => {
        getNthElement(indexValue, stringValue.split(','), getResult);
    };
    return(
        <div>
            <Input
                onChange={(e) => changeStringValue(e.target.value)}
                name='getElement'
                type='text'
            />
            <Input
                onChange={(e) => setIndexValue(e.target.value)}
                name='indexValue'
                type='number'
            />
            <Button
                onClick={getElement}
            />
            {result && <div>
                {result}
            </div>}
        </div>
    )
}