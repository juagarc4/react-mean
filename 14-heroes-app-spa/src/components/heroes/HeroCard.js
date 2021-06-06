import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  return (
    <div className='card'>
      <img className='card-img-top' src={`./assets/heroes/${id}.jpg`} alt={superhero} />
      <div class='card-body'>
        <h5 class='card-title'>{superhero}</h5>
        <h6 class='card-subtitle mb-2 text-muted'>{publisher}</h6>
        <ul class='card-text'>
          <li>{alter_ego}</li>
          <li>{first_appearance}</li>
          {alter_ego !== characters && <li>{characters}</li>}
        </ul>
      </div>
      <div class='card-footer'>
        <Link to={`./hero/${id}`}>More...</Link>
      </div>
    </div>
  )
}
