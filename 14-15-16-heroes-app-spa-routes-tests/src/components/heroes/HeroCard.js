import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  return (
    <div className='card'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img className='card-img rounded-0' src={`./assets/heroes/${id}.jpg`} alt={superhero} />
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>{publisher}</h6>
            <p className='card-text'>
              <small>{alter_ego}</small>
            </p>
            <Link className='align-text-bottom' to={`./hero/${id}`}>
              More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
