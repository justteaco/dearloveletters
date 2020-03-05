import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  state = {
    navbarOpen: false,
    searchResult: null
  }

  toggleNavBar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  handleClick = (e) => {
    localStorage.setItem('loveletter', e.target.innerHTML)
  }

  handleLogout = () => {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-light">
        <div className="container">
          <div className="navbar-brand">
            <a href="/#" className="navbar-link has-text-grey is-arrowless" onClick={this.toggleNavBar}>home</a>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-grey is-arrowless" onClick={this.toggleNavBar}>love letters</a>
                {
                  navbarOpen &&
                  <div className="navbar-dropdown">
                    <Link className="navbar-item" to="/loveletters/" onClick={this.handleClick}>my own</Link>
                    {Auth.isAuthenticated() && <Link className="navbar-item" to="/loveletters/new">new love</Link>}
                  </div>
                }
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link has-text-grey is-arrowless" onClick={this.toggleNavBar}>profile</a>
                {
                  navbarOpen &&
                  <div className="navbar-dropdown">
                    {Auth.isAuthenticated() && <Link className="navbar-item " to="/profile">about me</Link>}
                    {Auth.isAuthenticated() && <Link className="navbar-item" to="/response">reponses</Link>}
                  </div>
                }
              </div>
              {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Logout</a>}
            </div>
          </div>
        </div>
      </nav >
    )
  }
}

export default withRouter(Navbar)





