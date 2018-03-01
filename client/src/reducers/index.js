import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import users from './userReducer.js'
import innovators from './innovatorReducer.js'

const rootReducer = combineReducers({users, innovators, router})

export default rootReducer