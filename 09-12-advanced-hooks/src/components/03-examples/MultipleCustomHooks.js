import React from 'react'
import { useFetch } from 'hooks/useFetch'
import { useCounter } from 'hooks/useCounter'

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter()

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
  const { loading, data } = useFetch(url)
  const { author, quote } = !!data && data[0]
  const id = !!data && data[0].quote_id
  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-justify">
          <p>
            {id} - {quote}
          </p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      {counter > 1 && (
        <button className="btn btn-primary" onClick={decrement}>
          Previous quote
        </button>
      )}
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
