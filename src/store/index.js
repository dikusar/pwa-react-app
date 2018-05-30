import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'

// custom middlewares
import api from '../middlewares/api'
import autocomplete from '../middlewares/autocomplete'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = applyMiddleware(thunk, autocomplete, api)
const store = createStore(rootReducer, {}, composeEnhancers(enhancer))


export default store