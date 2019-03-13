import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; 

import App from './components/App';
import Signup from './components/auth/Signup';
import reducers from './reducers'
import Welcome from './components/Welcome';
import Feature from './components/Feature';

const store = createStore(
    reducers,
    {auth: { authenticated: localStorage.getItem('token') }},
    applyMiddleware(reduxThunk)
);

ReactDOM.render (
    <Provider store={store}>
    <BrowserRouter>
        <App>
            <Route path="/" exact component={ Welcome } />
            <Route path="/signup" exact component={ Signup } />
            <Route path="/feature" exact component={ Feature } />
        </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

