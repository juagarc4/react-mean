import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../heroes/HeroCard'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [formValues, handleInputChange] = useForm({ searchText: q })
  const { searchText } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }
  return (
    <div className="row">
      <div className="col-md-5">
        <h4>Search Screen</h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            className="form-control"
            name="searchText"
            onChange={handleInputChange}
            placeholder="Find a hero"
            type="text"
            value={searchText}
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn mt-2 btn-block btn-outline-primary"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-7">
        <h4>Results</h4>
        <hr />

        {q === '' && <div className="alert alert-info">Search a hero</div>}
        {q !== '' && heroesFiltered.length === 0 && (
          <div className="alert alert-warning">
            There is no hero with the searched name <strong>"{q}"</strong>
          </div>
        )}

        {heroesFiltered.map((hero) => {
          return <HeroCard key={hero.id} {...hero} />
        })}
      </div>
    </div>
  )
}
