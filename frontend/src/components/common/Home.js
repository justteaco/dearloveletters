import React from 'react'
import { Wave } from 'react-animated-text';
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
          <div className="home-title"><Wave text="Dear Love," effect="stretch" effectChange={1.2} effectDelay={10.6} /></div>
          <div className="hero-body">
            <div className="container columns">
              <form className="column is-half is-offset-one-quarter card" id="home-page" onSubmit={this.handleSubmit}>
                <input className="control is-expanded is-fullwidth is-rounded" id="search-bar" type="text" value={this.state.searchFeeling} onChange={this.handleChange} placeholder="how are you feeling?"></input>
                <button type="submit " id="button is-small is-fullwidth">journey</button>
              </form>
            </div>
          </div>
          <div className="express"> <h1 className="hows-your-heart"> how's your heart?</h1>
            <Link className="button is-rounded " to="/register">express yourself</Link>
          </div>
        </section>
        <br />
        <section className="about-loveletters">
          <p className="about-letters"> Dear Love Letters is a virtual pen pal app connecting people through feelings +  healing.  Open Letters for people to read anonymously then can connect with
               someone if they want to keep in touch. A space to share emotions and tips on how to heal the body, mind, and soul </p>
        </section>





      </>
    )
  }
}

export default Home