import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById'

export const HeroScreen = () => {
  const { heroId } = useParams()
  const hero = getHeroesById(heroId)
  if (!hero) {
    return <Redirect to='/' />
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  return (
    <div className='card'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img className='card-img rounded-0' src={`./assets/heroes/${heroId}.jpg`} alt={superhero} />
        </div>
        <div className='col-md-6'>
          <div className='card-body'>
            <h5 className='card-title'>{superhero}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              {publisher} - {first_appearance}
            </h6>
            <p className='card-text'>
              <small>{alter_ego}</small>
            </p>
            {alter_ego !== characters && (
              <p className='card-text'>
                <small>{characters}</small>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
