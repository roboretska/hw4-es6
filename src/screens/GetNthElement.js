import React, {useState,useEffect} from 'react';
import {Input, Button} from '../components'
import {getNthElement} from '../utils'

export default () => {
    const [stringValue, changeStringValue] = useState('');
    const [indexValue, setIndexValue] = useState(null);
    const [result, getResult] = useState(null);
    const getElement = () => {
        getNthElement(indexValue, getResult, ...stringValue.split(','));
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
                text='Get nth element from arguments'
            />
            {result && <div>
                {result}
            </div>}
        </div>
    )
}