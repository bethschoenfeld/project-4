
import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'


import SplashPage from './components/SplashPage.js'


import UserPage from './components/user/UserPage.js'
import NewUserForm from './components/user/NewUserForm.js'
import EditUserForm from './components/user/EditUserForm.js'
import UserProfile from './components/user/UserProfile.js'

import InnovatorPage from './components/innovator/InnovatorPage.js'
import InnovatorProfile from './components/innovator/InnovatorProfile.js'

import EventPage from './components/event/EventPage.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={SplashPage}/>

        <Route exact path='/users' component={UserPage}/>
        <Route exact path='/users/new' component={NewUserForm}/>
        <Route exact path='/users/:userId/edit' component={EditUserForm}/>
        <Route exact path='/users/:userId/profile' component={UserProfile}/>

        <Route exact path='/innovators' component={InnovatorPage}/>
        <Route exact path='/innovators/:innovatorId/profile' component={InnovatorProfile}/>

        <Route exact path='/events' component={EventPage}/>
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root

