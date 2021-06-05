import React from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'

export const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <ol>
      {heroes.map((hero) => {
        return <li key={hero.id}>{hero.superhero}</li>
      })}
    </ol>
  )
}
