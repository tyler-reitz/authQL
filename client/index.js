import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import Dashboard from './components/Dashboard'
import withAuth from './components/withAuth'

const networkInterface = new createNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  }
})

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface,
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <Header />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignupForm} />
          <Route path="/dashboard" component={withAuth(Dashboard)} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
