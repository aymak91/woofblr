import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    // window.signup = signup;
    // window.login = login;

    // ReactDOM.render(<h1>React works. F yea</h1>, root);
    ReactDOM.render(<Root store={store} />, root);
})