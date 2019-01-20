import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk' 
import { Provider } from 'react-redux';
import wikipedia from './reducers/index';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(wikipedia, applyMiddleware(thunkMiddleware));
console.log(store.getState());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
