import React from 'react'


class Home extends React.Component {
  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.history.push(`/map/${this.state.search}`)
  }

  handleClick = (e) => {
    console.log(e.target.id)
    localStorage.setItem('feeling', e.target.id)
  }

  render() {
    return (
      <>
        <div className="hero-body">
          <form onSubmit={this.handleSubmit} className="search-bar">
            <div className="search">
              <input type="text" className="search-text" placeholder="how are you feeling?" onChange={this.handleChange} />
              <button type="submit" className="search-button">
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default Home