import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroById'

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams()
  const hero = useMemo(() => getHeroesById(heroId), [heroId])

  if (!hero) {
    return <Redirect to='/' />
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack()
    }
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } = hero

  return (
    <div className='row mt-5'>
      <div className='col-md-4 animate__animated animate__fadeInLeft'>
        <img className='img-thumbnail' src={`../assets/heroes/${heroId}.jpg`} alt={superhero} />
      </div>
      <div className='col-md-6 animate__animated animate__fadeInRight'>
        <h3 className='card-title'>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Publisher: </b> {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b> {first_appearance}
          </li>
          <li className='list-group-item'>
            <b>Alter Ego: </b> {alter_ego}
          </li>
        </ul>
        <h5>Characters: </h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className='btn btn-outline-info'>
          Return
        </button>
      </div>
    </div>
  )
}
