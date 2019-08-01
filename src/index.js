import Root from './root.jsx';
import React from 'react';
import configureStore from './store.js';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';

document.addEventListener("DOMContentLoaded", () => {

    let store = configureStore();
    // TESTING START
    // TESTING END 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
registerServiceWorker();
