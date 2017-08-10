//Routes

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'

import StudentsList from './students/StudentsList'
import StudentPage from './students/StudentPage'
import BatchesList from './batches/BatchesList'
import BatchPage from './batches/BatchPage'
import App from './App'
import SignIn from './users/components/SignIn'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BatchesList} />
        <Route path="/students/:studentId" component={StudentPage} />
        <Route path="/batches/" component={BatchesList} />
        <Route path="/batches/:batchId" component={BatchPage} />
        <Route path="/SignIn" component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
