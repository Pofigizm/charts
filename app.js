import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import createLogger from 'redux-logger'

import App from './components/App'
import First from './components/First'
import Second from './components/Second'

const reducer = combineReducers({
  routing: routerReducer
})
const logger = applyMiddleware(createLogger({
  level: 'info',
  collapsed: true
}))

const store = createStore(reducer, {}, logger)
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="first" component={First}/>
          <Route path="second" component={Second}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('content')
)
