import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import mutation from '../mutations/Signup'
import query from '../queries/User' 
import AuthForm from './AuthForm'

class LoginForm extends Component {

  state = { errors: [] }

  componentWillUpdate({ data: { user: nextUser } }) {
    const { data: { user }, history } = this.props
  
    if (!user && nextUser) {
      history.push('/dashboard')
    }
  }

  handleLogin = async ({ email, password }) => {
    const { mutate } = this.props

    await mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch(({ graphQLErrors }) => { 
      const errors = graphQLErrors.map(({ message }) => message)
      this.setState({ errors })
    })
  }

  render() {
    const { state: { errors }, handleLogin } = this

    return (
      <div>
        <h3>Signup</h3>
        <AuthForm handleSubmit={handleLogin} />
        {errors.map(e => 
          <div key={e} style={{ color: 'red' }}>
            {e}
          </div>)
        }
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(LoginForm)
)
