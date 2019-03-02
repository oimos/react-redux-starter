import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import Calc from './containers/Calc';
import ApiContent from './containers/ApiContent';

// Reducer
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  // @ts-ignore
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = document.getElementById('app');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <Calc />
      <ApiContent />
    </Provider>,
    root,
  );
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('text'),
// );


// import { store } from './store';

// import {
//   defaultAction,
//   incrementAction,
//   decrementAction,
//   dummyApiCallAction,
// } from './action';

// const increment = document.getElementById('increment');
// const decrement = document.getElementById('decrement');
// const reset = document.getElementById('reset');
// const dummyApiCall = document.getElementById('dummyApiCall');
// const text = document.getElementById('text');
// const apiText = document.getElementById('apiText');

// document.addEventListener('DOMContentLoaded', () => store.dispatch(defaultAction()));
// increment.addEventListener('click', () => store.dispatch(incrementAction()));
// decrement.addEventListener('click', () => store.dispatch(decrementAction()));
// reset.addEventListener('click', () => store.dispatch(defaultAction()));
// dummyApiCall.addEventListener('click', () => store.dispatch(dummyApiCallAction()));

// store.subscribe(() => {
//   text.textContent = store.getState().numberState.amount;

//   const { fruits } = store.getState().dataState;
//   if (fruits) {
//     let dom = '';
//     for (let i = 0; i < fruits.length; i++) {
//       dom += `<p>${fruits[i].item}: ${fruits[i].price}, ${fruits[i].number} `;
//     }
//     apiText.innerHTML = dom;
//   }
// });
