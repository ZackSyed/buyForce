    
import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const configureStore = () => (
    createStore(
        applyMiddleware(...middlewares)
    )
);

export default configureStore; 