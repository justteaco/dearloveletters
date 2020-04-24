import React from 'react'
import { Link } from 'react-router-dom'


const LoveLetterCard = ({ title, id, username, love_letter }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <div className="love-card">
      <div className="card-header">
        <h4 className="card-header-title">{title}</h4>
        {love_letter.split(' ').slice(0, 9).join(' ')}...
        <Link to={`/loveletters/${id}`}>read more</Link>
      </div>
    </div>
  </div>
)

export default LoveLetterCard