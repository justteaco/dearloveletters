import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  state = {
    user: {},
    loveletters: [],
    response: '',
    location: ''

  }

  async getData() {
    const currentpenpals = Auth.getUser()
    try {
      const res = await axios.get(`/api/penpals/${currentpenpals}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ user: res.data, loveletters: res.data.loveletters })
      this.responses(res)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = ({ target: { name, value } }) => {
    const user = { ...this.state.user, [name]: value }
    this.setState({ user })
  }

  getResponses = (res) => {
    const response = res.data.comments.length
    this.setState({ response })
  }

  handleDelete = async () => {
    const penpalId = this.props.match.params.id
    try {
      await axios.delete(`/api/penpals/${penpalId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/penpals')
    } catch (err) {
      console.log(err.response)
    }
  }


  render() {
    const { name, location, profile_pic, _id, } = this.state.user
    if (!this.state.user) return null
    console.log(this.state.loveletters)
    return (
      <section className="user-section">
        <div className="profilelayer">
        </div>
        <div className="user-container">
          <div className="user-info fadeInLeft">
            <h2 className="username">{name}</h2>
            <hr />

            <Link to={`/penpals/${_id}/response`}>
              <div className="allResponses">
                <p>Read Response</p>
              </div>
              <br />
              <hr />
            </Link>
            <p>{location}</p>

          </div>
          <div className="user-image">
            <figure className="image-container">
              <img className="penpals-image" src={profile_pic} alt={name} />
            </figure>
            <br />
            <Link to={`/penpals/${_id}/edit`} className="button is-rounded is-medium is-warning">
              Edit Profile
            </Link>
          </div>
          <div className="love-letters fadeInRight">
            <div className="profileLoveLetters">
              <h2 className="title">Love Letters</h2>
              {this.state.loveletters.map((loveletter, i) => <p key={i}>{loveletter}</p>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserProfile
