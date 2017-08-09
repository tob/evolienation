import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import StudentsList from './students/StudentsList'
import StudentPage from './students/StudentPage'

import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={StudentsList}>
        <IndexRoute component={StudentsList} />
        <Route path="/students/:studentId" component={StudentPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
