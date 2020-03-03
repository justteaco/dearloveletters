import React from 'react'
import axios from 'axios'
// import Select from 'react-select'
// import ImageUpload from '../ImageUpload'


class Register extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      loveletters: '',
      city: '',
      profile_image: ''
    },
    errors: {}
  }

  options = [
    { value: 'Happy', label: 'Happy' },
    { value: 'Sad', label: 'Sad' },
    { value: 'Angry', label: 'Angry' },
    { value: 'Confused', label: 'Confused' },
    { value: 'Beautiful', label: 'Beautiful' },
    { value: 'Joyful', label: 'Joyful' },
    { value: 'Present', label: 'Present' },
    { value: 'Distracted', label: 'Distracted' },
    { value: 'Embarrassed', label: 'EMabarrased' },
    { value: 'Sexy', label: 'Sexy' },
    { value: 'Distant', label: 'Distant' },
    { value: 'Lonley', label: 'Lonely' },
  ]

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleMultiChange = (selected) => {
    const loveletters = selected ? selected.map(item => item.value) : []
    const data = { ...this.state.data, loveletters }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log('submitting', this.state.data)
    try {
      await axios.post('/api/register', this.state.data)
      this.props.history.push('/login')
    } catch (err) {
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
    return (
      <section className="section cheese-image">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="title">Register</h2>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.username} ? : 'is-danger' : '' `}
                    name="username"
                    placeholder="Username"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.email} ? : 'is-danger' : '' `}
                    name="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.password} ? : 'is-danger' : '' `}
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className={`input ${this.state.errors.passwordConfirmation} ? : 'is-danger' : '' `}
                    name="passwordConfirmation"
                    type="password"
                    placeholder="Password Confirmation"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-warning is-fullwidth">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register