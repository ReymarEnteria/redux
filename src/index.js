import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'



//redux store -> globalized state
//hold all the date or state of the app

const store = createStore(allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* 
//action 
//it describes what you want to do
//ex. increment
const increment = () => {
    return {
        type: 'INCREMENT'
    };
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}


//reducer
//describes how your actions state transform into the next state
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

let store = createStore(counter);

// display it in the console
store.subscribe(() => console.log(store.getState()));


//dispatch
//where we can execute that action
store.dispatch(increment());
 */

ReactDOM.render(
    //we need to do this so that the whole app can access to the store
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
