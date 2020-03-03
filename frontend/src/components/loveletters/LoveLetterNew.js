import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import LoveLetterForm from './LoveLetterForm'

class LoveLetterNew extends React.Component {
  state = {
    data: {
      title: '',
      image: '',
      content: ''
    },
    errors: {}
  }


  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post('/loveletters', this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/loveletters/${data.id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <LoveLetterForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errors={this.state.errors}
          />
        </div>
      </section>
    )
  }
}

export default LoveLetterNew
