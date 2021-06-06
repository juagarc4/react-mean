import React, { useMemo } from 'react'

import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  return (
    <div className='row' data-masonry='{"percentPosition": true }'>
      {heroes.map((hero) => {
        return (
          <div key={hero.id} className='col-sm-6 col-lg-4 mb-4'>
            <HeroCard {...hero} />
          </div>
        )
      })}
    </div>
  )
}
