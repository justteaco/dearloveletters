import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
import { headers } from './../../lib/headers'

class LoveLetterShow extends React.Component {
  state = {
    loveletter: null,
    text: {}
  }

  async getData() {
    const loveletterId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      // console.log(res.data, 'data')
      this.setState({ loveletter: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = e => {
    const comment = { ...this.state.comment, [e.target.name]: e.target.value }
    this.setState({ text: comment })
    // console.log(comment)
  }


  handleSubmit = async e => {
    e.preventDefault()
    e.target.innerHTML = '<h2>response submitted</h2>'

    const loveletterId = this.state.loveletter.id
    const comment = this.state.text
    console.log(comment)
    try {
      await axios.post(
        `/api/loveletters/${loveletterId}/comments/`,
        comment,
        headers)
    } catch (err) {
      console.log(err.data)
    }
  }

  // countLikes = (res) => {
  //   const likesCount = res.data.like.length
  //   this.setState({ likesCount })
  // }

  submitResponse = (rev, res) => {
    const response = rev.data.reponse.length
    const likesCount = res.data.like.length
    this.setState({ response, likesCount })
  }


  handleDelete = async () => {
    const loveletterId = this.props.match.params.id
    try {
      await axios.delete(`/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/loveletters')
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  // hasLikes = () => this.state.user.avgLike > 0

  isOwner = () => Auth.getPayload().sub === this.state.loveletter.owner.id

  render() {
    console.log(this.state.text)
    // const { username, image, title, love_letter, id, city } = this.state.loveletter
    const { loveletter } = this.state
    if (!this.state.loveletter) return null
    return (
      <section className="loveletter-section">
        <div className="container">
          <h2 className="title">{loveletter.title}</h2>
          <p>{loveletter.location}</p>
          <h2 className="username">{loveletter.username}</h2>
          <div className="columns">
            <div className="column is-half">
              <figure className="image is-round">
                {/* <img src={loveletter.image} alt={loveletter.title} /> */}
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Dear Love, </h4>
              <p>{loveletter.love_letter}</p>
              <hr />
              <h4 className="title is-4">how i feel:</h4>
              <p>{loveletter.feelings}</p>
            </div>
          </div>
          <div className="rating">
            <form onSubmit={this.handleSubmit} className="rating-form">
              <h2 className="title">show me some love</h2>
              <br />
              <textarea className="textarea is-primary" onChange={this.handleChange} placeholder="hey you" name="text" type="text" maxLength="600" />
              <br />
              <button className="button is-info" type="submit">submit</button>
            </form>
          </div>
        </div >
      </section >
    )
  }
}


export default LoveLetterShow



