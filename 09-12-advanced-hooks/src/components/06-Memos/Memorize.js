import React, { useState } from 'react'
import { useCounter } from 'hooks/useCounter'
import Small from './Small'

export const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>Memorize</h1>
      <hr />
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <button className="btn btn-outline-primary" onClick={increment}>
        +1
      </button>
      <button
        className="btn btn-outline-secondary ml-3"
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
