import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class UserResponse extends React.Component {
  state = {
    loveletter: null,
    user: {},
    text: {},
    timestamps: ''
  }

  async componentDidMount() {
    const loveletterId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ loveletter: res.data, user: res.data, text: res.data.text })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    if (!this.state.user) return null
    const { loveletter } = this.state
    const { name, _id, image, avgRating, ratingsCount } = this.state.user
    console.log(this.state.user)
    return (
      <>
        <section className="hero is-fullheight-with-navbar">
          <div className="hero-body-index">
          </div>
          <h2 className="skill-header">Response : </h2>

          <Link to={`/loveletters/${loveletter.id}`} key={loveletter.id}>
            <div className="box">
              <h1>{loveletter.username}</h1>
              <article className="media">
                <img src={loveletter.image} alt={loveletter.name} />
                <div className="info">
                  <div className="bio">
                    {this.state.response.map((rev, i) => (
                      <h3 key={i} className="subtitle"> Comments: {rev.response}</h3>
                    ))
                    }
                  </div>
                </div>
              </article>
            </div>
          </Link>
        </section>
      </>
    )
  }
}

export default UserResponse