import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import getToken from '../middlewares/getToken'

const logger = createLogger({
    collapsed: true
})

const enchancer = composeWithDevTools(applyMiddleware(getToken, thunk, logger));

const store = createStore(reducer, enchancer)

window.store = store

export default store
