import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import promises from './middlewares/promises';
import * as reducers from './reducers';

const initialState = {
    issues: [],
    repository: '',
    counter: 0
};

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(promises, createLogger())(createStore);
const store = createStoreWithMiddleware(reducer, initialState);

export default store;