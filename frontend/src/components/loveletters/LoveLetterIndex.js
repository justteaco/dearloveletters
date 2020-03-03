import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// import LoveLetterCard from './LoveLetterCard'
// import Navbar from '../components/common/Navbar'


class LoveLetterIndex extends React.Component {
  state = {
    loveLetters: [],
    feelings: [],
    searchResult: ''
  }

  getFeelings = async () => {
    try {
      await axios.all([
        axios.get(`api/loveletters/`),
        axios.get(`api/feelings/`)
      ]).then(axios.spread((lettersData, feelingsData) => {
        this.setState({
          loveLetters: lettersData.data,
          feelings: feelingsData.data
        })
      }))
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    // const searchValue = localStorage.getItem('searchdata')
    // this.searchLoveLetters(searchValue)
    this.getFeelings()
  }

  handleFeeling = () => {
    this.setState({ data: [] })
    axios.get('/api/feelings')
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    this.setState({ searchResult: e.target.value })
  }

  filterFeelings = () => {
    const regexp = new RegExp(this.state.searchResult, 'i')
    return this.state.feelings.filter(item => regexp.test(item.emotion))
  }

  filterLetters = () => {
    const regexp = new RegExp(this.state.searchResult, 'i')
    return this.state.loveLetters.filter(item => regexp.test(item.feelings.map(feeling => feeling.emotion)))
  }


  render() {
    console.log(this.filterFeelings())
    console.log('state', this.state)
    const { feelings } = this.state.feelings
    const { loveLetters } = this.state.loveLetters
    return (
      <>
        <nav>
          <Link className="home-button" to="/">Home</Link>
          <div className="location-search">
            <input className="search-bar-nav" type="text" value={this.state.searchValue} onChange={this.handleChange} placeholder="Search for a letter"></input>
          </div>
        </nav>
        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {/* {this.filterLetters().map(letter => {
                return (
                  <Link to={`loveletters/${loveLetterId}`} >
                    <h1>{letter.title}</h1>
                    <p>{letter.love_letter}</p>
                    <img src={letter.image} alt={letter.title} />
                    <Link />
                    )
                  })} */}

            </div>
          </div>
        </section>
      </>
    )
  }
}
export default LoveLetterIndex