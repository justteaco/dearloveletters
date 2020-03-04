import React from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import LoveLetterCard from './LoveLetterCard'

class LoveLetterIndex extends React.Component {
  state = {
    loveLetters: [],
    feelings: [],
    searchTerm: ''
  }

  getFeelings = async () => {
    try {
      const { data } = await axios.get('/api/feelings/')
      this.setState({ feelings: data })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getFeelings()
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  filterFeelings = () => {
    const regexp = new RegExp(this.state.searchTerm, 'i')
    return this.state.feelings.filter(item => regexp.test(item.emotion))
  }

  // filterLetters = () => {
  //   console.log(this.state.loveLetters)
  //   const regexp = new RegExp(this.state.searchResult, 'i')
  //   return this.state.loveLetters.filter(item => regexp.test(item.feelings.map(feeling => feeling.emotion)))
  // }
  render() {
    if (!this.state.feelings) return null
    // console.log('feelings', this.state.feelings)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            <input
              onChange={this.handleChange}
              placeholder='Search for feelings'
            />
            {

              this.filterFeelings().map(feeling => {
                console.log('emotion', feeling)
                return feeling.loveletters.map(letter => {
                  return <LoveLetterCard key={letter.id} {...letter} />
                })
              })
            }
          </div>
        </div>
      </section>
    )
  }
}
export default LoveLetterIndex