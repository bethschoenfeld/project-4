import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import users from './userReducer.js'

const rootReducer = combineReducers({users, router})

export default rootReducer