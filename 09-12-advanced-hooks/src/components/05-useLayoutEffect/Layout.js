import React, { useState, useLayoutEffect, useRef } from 'react'
import { useFetch } from 'hooks/useFetch'
import { useCounter } from 'hooks/useCounter'

import './styles.css'

export const Layout = () => {
  const { counter, increment, decrement } = useCounter()

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
  const { data } = useFetch(url)
  const { quote } = !!data && data[0]

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag}>{quote}</p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
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
