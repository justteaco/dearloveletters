import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component {
  state = {
    data: null,
    searchFeeling: '',
    searchResult: null,
    loveletter: ''
  }

  handleChange = e => {
    this.setState({ searchFeeling: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('searchfeelings', this.state.searchFeeling)
    this.props.history.push('/loveletters')
  }


  render() {
    return (
      <>
        <section className="home-section">
          <div className="home-title"><h1 className="dear-love-title">Dear Love, </h1></div>
          <div className="hero-body">
            <div className="container columns">
              <form className="column is-half is-offset-one-quarter card" id="home-page" onSubmit={this.handleSubmit}>
                <input className="control is-expanded" id="search-bar" type="text" value={this.state.searchFeeling} onChange={this.handleChange} placeholder="how are you feeling?"></input>
                <button type="submit" id="search-button">journey</button>
              </form>
            </div>
          </div>
          <div className="express"> <h1 className="hows-your-heart"> how's your heart?</h1>
            <Link className=" button" to="/register">express yourself</Link>
          </div>
        </section>
        <br />
        <section className="about-loveletters">
          <p className="about-letters"> A sensory pen pal app connecting people through feelings +  healing.  Open Letters for people to read anonymously then can connect with
               someone if they want to keep in touch. A space to share emotions and tips on how to heal the body, mind, and soul </p>
        </section>





      </>
    )
  }
}

export default Home