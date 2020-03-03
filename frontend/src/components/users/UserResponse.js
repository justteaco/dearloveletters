import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class UserResponse extends React.Component {
  state = {
    user: {},
    response: '',
    timestamps: ''
  }

  async componentDidMount() {
    const penpalId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/penpals/${penpalId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ user: res.data, response: res.data.comments })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    e.target.innerHTML = '<h2>Response submitted</h2>'
    const penpalId = this.props.match.params.id
    try {
      const res = await axios.post('/api/responses/')
      this.submitMessage(res)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }
  submitResponse = (res) => {
    const response = res.data.comments.length
    this.setState({ response })
  }

  render() {
    if (!this.state.user.name) return null
    const { name, _id, } = this.state.user
    console.log(this.state.user)
    return (
      <>
        {this.state.users.map(user => (
          <Link to={`/loveletter/${user._id}`} key={user._id}>
            {console.log(user)}
            <div className="box">
              <article className="media">
                <div className="info">
                  <div className="bio">
                    <h3 className="title">{user.name}</h3>
                    <h4>{user.location}</h4>
                  </div>
                  <div className="loveletters">
                    {user.loveletters.map((loveletter, i) => <p key={i}>{loveletter}</p>)}
                  </div>
                </div>
              </article>
              <div className="inbox">
                <form onSubmit={this.handleSubmit} className="messages">
                  <input onChange={this.handleChange} name="review" type="text" maxLength="200" />
                  <button className="button is-link is-rounded" type="submit">Send</button>
                </form>
              </div>
            </div>
          </Link> 
      </>
    )
  }
}

export default UserResponse