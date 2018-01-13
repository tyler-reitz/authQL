import React, { Component } from 'react'

class AuthForm extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    const { 
      state: { email, password },
      props: { handleSubmit },
    } = this

    return (
      <div className="row">
        <form 
          onSubmit={e => {
            e.preventDefault()
            handleSubmit({ email, password })
          }} 
          className="col s4"
        >
          <div className="input-field">
            <input
              placeholder="Email"
              value={email}
              onChange={({target:{value:email}}) => 
                  this.setState({ email  })
              }
            />
          </div>
          <div className="input-field">
            <input 
              placeholder="email"
              value={password}
              onChange={({target:{value:password}}) => 
                  this.setState({ password  })
              }
            />
          </div>
          <button>Submit</button>
        </form> 
      </div>
    )
  }
}

export default AuthForm
