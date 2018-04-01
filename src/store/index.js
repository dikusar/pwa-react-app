import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
// import logger from '../middlewares/logger'
// import generateId from '../middlewares/generateId'
// import api from '../middlewares/api'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(thunk)
const store = createStore(rootReducer, {}, composeEnhancers(enhancer))
// const store = createStore({}, composeEnhancers(enhancer))
// window.store = store

export default store