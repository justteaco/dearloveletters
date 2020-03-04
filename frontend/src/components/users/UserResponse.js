// import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'

// class UserResponse extends React.Component {
//   state = {
//     owner: {},
//     comment: '',
//     timestamps: ''
//   }

//   async componentDidMount() {
//     const penpalId = this.props.match.params.id
//     try {
//       const res = await axios.get(`/api/penpals/${penpalId}`, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}` }
//       })
//       this.setState({ user: res.data, response: res.data.comments })
//     } catch (err) {
//       this.props.history.push('/notfound')
//     }
//   }

//   // handleSubmit = async e => {
//   //   e.preventDefault()
//   //   e.target.innerHTML = '<h2>Sending You Love</h2>'
//   //   const penpalId = this.props.match.params.id
//   //   try {
//   //     const res = await axios.post('/api/loveletters/comments')
//   //     this.submitMessage(res)
//   //   } catch (err) {
//   //     this.setState({ error: 'Invalid Credentials' })
//   //   }
//   // }
//   submitComment = (res) => {
//     const comment = res.data.comments.length
//     this.setState({ comment })
//   }

//   render() {
//     if (!this.state.user.username) return null
//     const { name, id } = this.state.user
//     console.log(this.state.user)
//     return (
//       <>
//         {this.state.users.map(user => (

//           <Link to={`/loveletters/${user.id}`} key={user.id}>

//             <div className="box">
//               <article className="media">
//                 <div className="info">
//                   <div classname="bio">
//                     <h3 className="title">{user.username}</h3>
//                     <h4>{user.city}</h4>
//                     <div className="loveletters">
//                       {user.loveletters.map((loveletter, i) => <p key={i}>{loveletter}</p>)}
//                     </div>
//                   </div>
//                 </div>
//               </article>
//               <div className="inbox">
//                 <form onSubmit={this.handleSubmit} className="messages">
//                   <input onChange={this.handleChange} name="comment" type="text" maxLength="200" />
//                   <button className="button is-link is-rounded" type="submit">send</button>
//                 </form>
//               </div>
//             </div>
//           </Link>
//         ))}

//       </>
//     )
//   }
// }


// export default UserResponse