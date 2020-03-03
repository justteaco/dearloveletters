import React from 'react'
import axios from 'axios'
import UserForm from './UserForm'
import Auth from '../../lib/auth'
//import Select from 'react-select'
//import ImageUpload from '../ImageUpload'


class UserEdit extends React.Component {
  
  state = {
    data: {
      name: '',
      username: '',
      profile_image: '',
      location: ''
    },
    errors: {}
  }

  options = [
    { value: 'Happy', label: 'Happy' },
    { value: 'Sad', label: 'Sad' },
    { value: 'Angry', label: 'Angry' },
    { value: 'Confused', label: 'Confused' },
    { value: 'Beautiful', label: 'Beautiful' },
    { value: 'Joyful', label: 'Joyful' },
    { value: 'Present', label: 'Present' },
    { value: 'Distracted', label: 'Distracted' },
    { value: 'Embarassed', label: 'Embarassed' },
    { value: 'Sexy', label: 'Sexy' },
    { value: 'Distant', label: 'Distant' },
    { value: 'Lonley', label: 'Lonley' },
  
  ]

  async componentDidMount() {
    const UserId = this.props.match.params.id

    try {
      const res = await axios.get(`/api/penpals/${UserId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ data: res.data })
    } catch (err) {
      console.log('something is wrong', err)
    }
  }

  // handleMultiChange = (selected) => {
  //   const feelings = selected ? selected.map(item => item.value) : []
  //   const data = { ...this.state.data, feelings, loveletter }
  //   this.setState({ data })
  // }

  handleChange = ({ target: { name, value, profile_pic,  } }) => {
    const data = { ...this.state.data, [name]: value, [profile_pic]: value }
    this.setState({ data })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.props.match.params.id)
    const userId = this.props.match.params.id
    try {
      await axios.put(`/api/penpals/${userId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/profile')
    } catch (err) {
      this.setState(err.response.data.errors)
    }

  }

  handleDelete = async () => {
    const penpalId = this.props.match.params.id
    try {
      await axios.delete(`/api/penpals/${penpalId}`, {
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
      <UserForm
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        errors={this.state.errors}
        options={this.options}
        handleMultiChange={this.handleMultiChange}
      />
    )
  }
}


export default UserEdit