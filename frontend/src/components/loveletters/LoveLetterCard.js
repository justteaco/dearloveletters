import React from 'react'
import { Link } from 'react-router-dom'


const LoveLetterCard = ({ title, id, username, love_letter }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">

    <div className="love-card">
      <div className="card-header">
        <h4 className="card-header-title">{title}</h4>
        <br />
        <h4 className="card-header-title">{username}</h4>
        <br />
        <p>
          {love_letter.split(' ').slice(0, 9).join(' ')}...
          </p>
        <Link to={`/loveletters/${id}`}>read more</Link>

        {/* <h3 className="card-location">{published}</h3> */}
      </div>
      <br />
    </div>
  </div>
)

export default LoveLetterCard