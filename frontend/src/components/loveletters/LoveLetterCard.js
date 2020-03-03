import React from 'react'
import { Link } from 'react-router-dom'

const LoveLetterCard = ({ likes, title, image, love_letter, owner, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/loveletters/${id}`}>
      <div className="loveletter-card">
        <div className="loveletter-card-header">
          <h4 className="loveletter-card-header-title">{title}</h4>
        </div>
        <div className="loveletter-card-image">
          <figure className="image">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-6">{love_letter}</h5>
          <h6 className="subtitle is-6">{owner.title}</h6>
        </div>
      </div>
    </Link>
  </div>
)

export default LoveLetterCard