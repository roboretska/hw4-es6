import React from 'react';
import {callCallbackNTimes} from '../utils'
//127 ;

export default () => {
    let i = '';
    callCallbackNTimes(5, (n) => i += n);
    return(
        <div>
            <p>Iteration result</p>
            {i}
        </div>
    )

}