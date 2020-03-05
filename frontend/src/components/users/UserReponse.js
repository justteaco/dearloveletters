// import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'

// class UserReview extends React.Component {
//   state = {
//     loveletter: null,
//     text: {}
//   }

//   async componentDidMount() {
//     const loveletterId = this.props.match.params.id
//     try {
//       const res = await axios.get(`/api/loveletters/${loveletterId}`, {
//         headers: { Authorization: `Bearer ${Auth.getToken()}` }
//       })
//       this.setState({ loveletter: res.data })
//     } catch (err) {
//       this.props.history.push('/notfound')
//     }
//   }

//   render() {
//     if (!this.state.loveletter) return null
//     const { loveletter } = this.state
//     console.log(this.state.user)
//     return (
//       <>
//         <section className="hero is-fullheight-with-navbar">
//           <div className="hero-body-index">
//           </div>
//           <h2 className="skill-header">REVIEWS : </h2>

//           <Link to={`/loveletters/${_id}`} key={_id}>
//             <div className="box">
//               <h1>{loveletter.username}</h1>
//               <article className="media">
//                 <img src={loveletter.image} alt={loveletter.name} />
//                 <div className="info">
//                   <div className="bio">

//                     {this.state.response.map((rev, i) => (
//                       <h3 key={i} className="subtitle"> Comments: {rev.response}</h3>
//                     ))
//                     }
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </Link>
//         </section>
//       </>
//     )
//   }
// }

// export default UserResponse