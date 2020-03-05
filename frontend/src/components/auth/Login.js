import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
// import { Link } from 'react-router-dom'

class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data)
      Auth.setToken(res.data.token)
      this.props.history.push('/profile')
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    return (
      <section className="login-section">
        <div className="login-container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="login-title">login</h2>
              <div className="field">
                <label className="label">email</label>
                <div className="control">
                  <input
                    className={`input is-rounded ${this.state.error} 
                    ? : 'is-danger' : '' `}
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">password</label>
                <div className="control">
                  <input
                    className={`input is-rounded ${this.state.error} ? : 'is-danger' : '' `}
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.error && <small className="help is-danger">{this.state.error}</small>}
              </div>
              <button type="submit" className="button is-rounded"> login</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Login