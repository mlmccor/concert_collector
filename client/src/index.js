import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux';

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    // }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
  // any other store enhancers if any
// );


const store = createStore(
  rootReducer,applyMiddleware(thunk)
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
