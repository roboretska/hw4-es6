import React, {useState} from 'react';
import {getUnion} from '../utils'
import {Button} from '../components'

//110

export default () => {

    const first = [1, 5, 6 ,7, 8, 9, 0, 11];
    const second = [1, 3, 4, 6 ,9 ,10, 17];
    const [result, setResult] = useState([]);
    return(
        <div>
            <p>First array</p>
            {first.map((elem) => `${elem}    `)}
            <p>Second array</p>
            {second.map((elem) => `${elem}    `)}
            <Button text='Get arrays union' onClick={() => getUnion(first, second, setResult)}/>
            {result.length ? <p>Result array</p> : null}
            {result.length ? result.map((elem) => `${elem}    `) : null}
        </div>
    )
}