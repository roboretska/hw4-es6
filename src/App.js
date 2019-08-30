import React from 'react';
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import Screens from './screens'
import './App.css';

//92
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className='navigation-menu'>
                <Link to='/stringToArraysOfWords'>String to array of words</Link>
                <Link to='/getElement'>Get Nth element</Link>
                <Link to='/numberToDigits'>Convert number to digits</Link>
                <Link to='/csv'>Convert CSV to array of objects</Link>
                <Link to='/listenerWithDelegation'>Listener with delegation</Link>
                <Link to='/getArraysUnion'>Get arrays union</Link>
                <Link to='/promises'>Array of promises in series</Link>
                <Link to='/callbackIteration'>Callback iteration</Link>
            </div>
            <Route exact path='/' render={() => <Redirect to='/stringToArraysOfWords'/>}/>
            <Route path='/stringToArraysOfWords' component={Screens.StringIntoArraysOfWords}/>
            <Route path='/getElement' component={Screens.GetNthElement}/>
            <Route path='/numberToDigits' component={Screens.NumberToDigits}/>
            <Route path='/csv' component={Screens.CsvToArray}/>
            <Route path='/listenerWithDelegation' component={Screens.ListenerWithDelegation}/>
            <Route path='/getArraysUnion' component={Screens.GetArraysUnion}/>
            <Route path='/promises' component={Screens.PromisesInSeries}/>
            <Route path='/callbackIteration' component={Screens.CallbackIterations}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
