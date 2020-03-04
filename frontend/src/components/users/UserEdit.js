import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import UserForm from './UserForm'
//import Select from 'react-select'
//import ImageUpload from '../ImageUpload'


class UserEdit extends React.Component {
  state = {
    data: {
      email: '',
      username: '',
      first_name: '',
      last_name: '',
      password: '',
      password_confirmation: '',
      location_city: '',
      profile_image: '',
      about_me: ''
    },
    errors: {}
  }


  async componentDidMount() {
    const PenpalId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/penpals/${PenpalId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ data: res.data })
    } catch (err) {
      console.log('something is wrong', err)
    }
  }


  handleChange = ({ target: { name, value, profile_image } }) => {
    const data = { ...this.state.data, [name]: value, [profile_image]: value }
    this.setState({ data })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.props.match.params.id)
    const penpalId = this.props.match.params.id
    try {
      await axios.put(`/api/penpals/${penpalId}`, this.state.data, {
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
      />
    )
  }
}


export default UserEdit