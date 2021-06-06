import React from 'react'

import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {
  const heroesFiltered = heroes
  const [formValues, handleInputChange] = useForm({ searchText: '' })
  const { searchText } = formValues
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }
  return (
    <div className='row'>
      <div className='col-md-5'>
        <h4>Search Screen</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            autoComplete='off'
            className='form-control'
            name='searchText'
            onChange={handleInputChange}
            placeholder='Find a hero'
            type='text'
            value={searchText}
          />
          <div class='d-grid gap-2'>
            <button type='submit' className='btn m-1 btn-block btn-outline-primary'>
              Search
            </button>
          </div>
        </form>
      </div>
      <div className='col-md-7'>
        <h4>Results</h4>
        <hr />
        {heroesFiltered.map((hero) => {
          return <HeroCard key={hero.id} {...hero} />
        })}
      </div>
    </div>
  )
}
