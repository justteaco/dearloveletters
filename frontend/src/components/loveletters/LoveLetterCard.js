import React from 'react'
import { Link } from 'react-router-dom'

const LoveLetterCard = ({ title, image, id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/loveletters/${id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{title}</h4>
        </div>
        <br />
        <div className="card-image">
          <figure className="image">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
        </div>
      </div>
    </Link>
  </div>
)

export default LoveLetterCard