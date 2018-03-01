import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import users from './userReducer.js'
import innovators from './innovatorReducer.js'
import events from './eventReducer.js'

const rootReducer = combineReducers({users, innovators, events, router})

export default rootReducer