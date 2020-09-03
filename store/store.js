import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './reducers'
const initialState = {}
const middleware = [thunk]

console.log(process.env.API_KEY)

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store
