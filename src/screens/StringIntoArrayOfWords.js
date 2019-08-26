//103

import React, {useState} from 'react';
import {Input, Button} from '../components'
import {convertStringToWordsArray} from '../utils'

export default () => {
    const [stringValue, changeStringValue] = useState('');
    const [splittedString, setSplittedString] = useState([]);
    const convertStringToArray = () => {
        convertStringToWordsArray(stringValue, setSplittedString);
    };
    return(
        <div>
            <Input
                onChange={(e) => changeStringValue(e.target.value)}
                name='stringToWordsArray'
            />
            <Button
                onClick={convertStringToArray}
                text='Convert string into array of splitted words'
            />
            <div>
                {splittedString.map((word) => <p>{word}</p>)}
            </div>
        </div>
    )
}

