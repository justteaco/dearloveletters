import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
// import UserEdit from '../users/UserEdit'

class UserShow extends React.Component {
  state = {
    user: {},
    username: '',
    profile_pic: '',
    city: '',
    loveletters: [],
  }

  async getData() {
    const penpalId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/penpals/${penpalId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ user: res.data, loveletters: res.data.loveletters })
      // this.setState({ user: res.data, loveletters: res.data.loveletters })

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

  handleSubmit = async e => {
    e.preventDefault()
    e.target.innerHTML = '<h2>response submitted/h2>'
    const penpalId = this.props.match.params.id
    try {
      const res = await axios.post(`/api/penpals/${penpalId}/like`, this.state.user, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.getData()
      this.countLikes(res)
      const rev = await axios.post(`/api/penpals/${penpalId}/likes`, this.state.user, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.submitResponse(rev)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  handleResponseSubmit = async e => {
    e.preventDefault()
    const penpalId = this.props.match.params.id
    try {
      const rev = await axios.post(`/api/penpals/${penpalId}/like`, this.state.user)
      this.submitResponse(rev)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  countLikes = (res) => {
    const likesCount = res.data.like.length
    this.setState({ likesCount })
  }

  submitResponse = (rev, res) => {
    const response = rev.data.respnse.length
    const likesCount = res.data.like.length
    this.setState({ response, likesCount })
  }

  submitResponse = async () => {
    const response = this.props.match.params.id
    response.push(response)
    console.log('checking')
    // this.setState({ user })
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




  hasLikes = () => this.state.user.avgLike > 0

  render() {
    const { name, city, image, avgLike, _id, } = this.state.user
    const { likesCount, loveletters } = this.state
    if (!this.state.user) return null
    return (
      <section className="user-section">
        <div className="profilelayer">

        </div>
        <div className="user-container">
          <div className="user-info fadeInLeft">
            <div className="userInfo">
              <hr />
              <h2 className="username">{name}</h2>
              <hr />
              <div className="star-likes">
                {likesCount ?
                  <><h2>{avgLike} ★</h2><p>{likesCount} love </p></>
                  :
                  <p>no love found</p>}
              </div>
              <Link to={`/penpals/${_id}/response`}>
                <div className="allrepsonses">
                  <p>Read Response</p>
                </div>
              </Link>
              <p>{city}</p>
            </div>
          </div>
          <div className="user-image">
            <figure className="image-container">
              <img className="penpal-image" src={image} alt={name} />
            </figure>
            <br />
          </div>
          <div className="loveletters-fadeInRight">
            <div className="usersLoveLetter">
              <h2 className="title">Love Letters</h2>
              {loveletters.map((loveletter, i) => <p key={i}>- {loveletter}</p>)}
            </div>
            <div className="likes">
              <form onSubmit={this.handleSubmit} className="response-form">
                <h2 className="title">show some love</h2>
                <div className="like">
                  <input onChange={this.handleChange} type="radio" id="star5" name="rating" value="5" />
                  <label htmlFor="star5" title="text">love</label>
                </div>
                <br />
                <textarea className="textarea is-primary" onChange={this.handleChange} placeholder="enter your repsonse" name="review" type="text" maxLength="6000" />
                <br />
                <button className="button is-info" type="submit">submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow