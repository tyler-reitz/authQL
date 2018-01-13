import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/User'

export default (WrappedComponent) => {
  class WithAuth extends Component {
    componentWillUpdate(nextProps) {
      console.log(this.props.data.user, nextProps.data.user)
      const { 
        data: { loading, user },
        history
      } = nextProps

      if (!loading && !user) {
        history.push('/login')
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  } 

  return graphql(query)(WithAuth)
}

