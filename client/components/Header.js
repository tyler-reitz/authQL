import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

import query from '../queries/User'
import mutation from '../mutations/Logout'

class Header extends Component {

  onLogoutClick = () => this.props.mutate({
    refetchQueries: [{ query }],
  })

  render() {
    const { 
      props: { data: { user, loading }},
      onLogoutClick,
    } = this

    return (
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo left" to="/">Home</Link>

        { !loading && user
          ? <ul className="right">
              <li> <a onClick={onLogoutClick}>Logout</a> </li>
              <li> <Link to="/dashboard">Dashboard</Link> </li>
            </ul>
          : <ul className="right">
              <li> <Link to="/dashboard">Dashboard</Link> </li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul> }

        </div>
      </nav>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
)

