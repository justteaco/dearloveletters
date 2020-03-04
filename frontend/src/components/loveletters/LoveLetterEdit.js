import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import LoveLetterForm from '../loveletters/LoveLetterForm'



class LoveLetterEdit extends React.Component {
  state = {
    data: {
      title: '',
      image: '',
      love_letter: '',
      feelings: '',
    },
    errors: {}
  }


  async componentDidMount() {
    const LoveletterId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    try {
      const res = await axios.get(`/api/loveletters/${LoveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ data: res.data })
    } catch (err) {
      console.log('something is wrong', err)
    }
  }

  options = [
    { value: 'Happy', label: 'Happy' },
    { value: 'Sad', label: 'Sad' },
    { value: 'Anxious', label: 'Anxious' },
    { value: 'Lonley', label: 'Lonley' },
    { value: 'Excited', label: 'Excited' },
    { value: 'Joyful', label: 'Joyful' },
    { value: 'Loved', label: 'Loved' },
    { value: 'Depressed', label: 'Depressed' },
    { value: 'Grumpy', label: 'Grumpy' },
  ]

  handleMultiChange = (selected) => {
    const feelings = selected ? selected.map(item => item.value) : []
    const data = { ...this.state.data, feelings }
    this.setState({ data })
  }

  handleChange = ({ target: { name, value, image, title } }) => {
    const data = { ...this.state.data, [name]: value, [image]: value, [title]: value }
    this.setState({ data })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.props.match.params.id)
    const love_letterId = this.props.match.params.id
    try {
      await axios.put(`/api/loveletters/${love_letterId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/profile')
    } catch (err) {
      this.setState(err.response.data.errors)
    }

  }

  handleDelete = async () => {
    const loveletterId = this.props.match.params.id
    try {
      await axios.delete(`/api/loveletters/${loveletterId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/')
    } catch (err) {
      console.log(err.response)
    }
  }

  render() {
    if (!this.state.data.name) return null
    return (
      <LoveLetterForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        handleMultiChange={this.handleMultiChange}
        options={this.options}
        errors={this.state.errors}
      />
    )
  }
}


export default LoveLetterEdit