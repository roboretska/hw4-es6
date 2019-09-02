import React from 'react';
import {calcultEloResults} from '../utils'
//75 ;

export default () => {
    const ratingList = [
        {
            rating: 1200,
            isWon: true,
            opponent: 3
        },
        {
            rating: 2400,
            isWon: false,
            opponent: 2
        },
        {
            rating: 2500,
            isWon: true,
            opponent: 1
        },
        {
            rating: 1200,
            isWon: false,
            opponent: 0
        }
    ];
    const result = calcultEloResults(ratingList, 10);
    console.log(result);
    return (
        <div>
            <div>
                <p>Previous ratings</p>
                {ratingList.map((player) => <p>{player.rating}</p>)}
            </div>
            <div>
                <p>New ratings</p>
                {result.map((rating) => <p>{rating}</p>)}
            </div>
        </div>
    );
}

