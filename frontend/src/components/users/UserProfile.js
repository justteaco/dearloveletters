import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
  state = {
    data: null
  }

  async getData() {
    const currentPenpal = Auth.getUser()
    try {
      const res = await axios.get(`/api/penpals/${currentPenpal}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      console.log(res.data)
      this.setState({ data: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = ({ target: { name, value } }) => {
    const user = { ...this.state.user, [name]: value }
    this.setState({ user })
  }

  handleDelete = async () => {
    const penpalId = this.props.match.params.id
    try {
      await axios.delete(`/api/penpals/${penpalId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/penpal')
    } catch (err) {
      console.log(err.response)
    }
  }


  render() {
    if (!this.state.data) return null
    const { data } = this.state
    console.log(data)
    return (
      <section className="user-section">
        <div className="user-container">
          <div className="user-info fadeInLeft">
            <h2 className="username">{data.username}</h2>
            <br />
            <figure className="image-container">
              <img className="profile-image" src={data.profile_image} alt={data.username} />
            </figure>
            <h2 className="username">{data.location_city}</h2>
            <br />
            <h2 className="username">{data.first_name.last_name}</h2>
            <hr />
            <p>{data.location_city}</p>
          </div>
          <div className="user-image">
            <br />
            <br />
            <p>{data.about_me}</p>
            <br />
            <Link to={`/penpals/${data.id}/edit`} className="button is-rounded is-medium is-warning">
              Edit Profile
            </Link>
            <br />
          </div>
        </div>
      </section>
    )
  }
}

export default UserProfile