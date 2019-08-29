import React, {useState,useEffect} from 'react';
import {Cells} from '../components'
import {addListener} from '../utils'

//95

export default () => {
    const handler = (e) => {
        console.info(`${e.target.innerHTML} has been pressed`);
    };
    const addEventListeners = () => {
        addListener(document.documentElement, 'click', handler, ['cells']);
        addListener(document.documentElement, 'click', handler)
    };
    useEffect(() => {
        addEventListeners();
    }, []);
    return(
        <div>
            <Cells text='1th cell'/>
            <Cells text='2th cell'/>
            <Cells text='3th cell'/>
            <Cells text='4th cell'/>
            <Cells text='5th cell'/>
            <p>Only one paragraph</p>
        </div>
    )
}