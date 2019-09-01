import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducers/index'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
