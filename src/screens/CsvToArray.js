import React, {useState, useEffect} from 'react';
import {csvToArray} from '../utils'
//4;

export default () => {
    const csv = "name,year,street,house,aaa\n" +
        "Sally Whittaker,2018,McCarren House,312,3.75\n" +
        "Belinda Jameson,2017,Cushing House,148,3.52\n" +
        "Jeff Smith,2018,Prescott House,17-D,3.20\n" +
        "Sandy Allen,2019,Oliver House,108,3.48";
    const [result, setResult] = useState([]);
    useEffect(() => {
        setResult(csvToArray(csv));
    }, [])
    return(
        <div>
            {result}
        </div>
    )

}
