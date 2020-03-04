import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'
//import UserResponse from '../../src/components/users/'
class LoveLetterShow extends React.Component {
  state = {
    loveletter: null,
    feelings: null,
    // comments: '',
    likes: []

  }

  async componentDidMount() {
    const loveletterId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ loveletter: res.data })
      // console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  handleDelete = async () => {
    const loveletterId = this.props.match.params.id
    try {
      await axios.delete(`/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/loveletters')
    } catch (err) {
      // this.props.history.push('/notfound')
    }
  }

  //isOwner = () => Auth.getPayload().sub === this.state.loveletter.owner.id

  render() {
    if (!this.state.loveletter) return null
    console.log(this.state.loveletter)
    const { loveletter } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{loveletter.title}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={loveletter.image} alt={loveletter.title} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Dear Love, </h4>
              <p>{loveletter.love_letter}</p>
              <hr />
              <h4 className="title is-4">how i feel:</h4>
              <p>{loveletter.feelings}</p>


              {/* {this.isOwner() && */}
              <>
                <Link to={`/loveletters/${loveletter._id}/edit`} className="button is-warning">
                  edit letter
                  </Link>
              </>
              {/* } */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default LoveLetterShow


