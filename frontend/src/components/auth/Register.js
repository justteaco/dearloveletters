import React from 'react'
import axios from 'axios'
// import Select from 'react-select'
// import ImageUpload from '../ImageUpload'


class Register extends React.Component {
  state = {
    data: {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      location_city: ''

    },
    errors: {}
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleMultiChange = (selected) => {
    // const loveletters = selected ? selected.map(item => item.value) : []
    const data = { ...this.state.data }
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
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter card">
              <h2 className="title">register</h2>
              <div className="field">
                <label className="label">ysername</label>
                <div className="control">
                  <input
                    className='input'
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  />
                </div>

              </div>
              <div className="field">
                <label className="label">email</label>
                <div className="control">
                  <input
                    className='input'
                    placeholder="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="field">
                  <label className="label">location</label>
                  <div className="control">
                    <input
                      className='input'
                      placeholder="location"
                      name="location_city"
                      onChange={this.handleChange}
                    />
                  </div>

                </div>
                <div className="field">
                  <label className="label">password</label>
                  <div className="control">
                    <input
                      className='input'
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>


                </div>
                <div className="field">
                  <label className="label">password confirmation</label>
                  <div className="control">
                    <input
                      className='input'
                      name="password_confirmation"
                      type="password"
                      placeholder="Password Confirmation"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-warning is-fullwidth">register</button>
                  </div>
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