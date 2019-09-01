import React from 'react';
import {splitValuesToTwoArrays} from '../utils'
//45 ;

export default () => {
    const unfilteredArray = [1, 25, 16, 10, 60, 0, 99, 5, 17, 4];
    const filteredFunc = (val) => val <= 15;
    const result = splitValuesToTwoArrays(unfilteredArray, filteredFunc);
    console.log(result);
    return(
        <div>
            <p>First array</p>
            {result[0]}
            <p>Second array</p>
            {result[1]}
        </div>
    )

}