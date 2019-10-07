import React from 'react';

//for us to access a certain piece of data from the store
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from "./actions";

function App() {
const counter = useSelector(state => state.counter);
const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information I Shouldn't see if im not logged in</h3> : ''}
      
    </div>
  );
}

export default App;
