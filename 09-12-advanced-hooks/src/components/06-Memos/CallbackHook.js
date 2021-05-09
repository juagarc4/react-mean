import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  // using a variable others than counter, we avoid the dependency
  const increment = useCallback(() => {
    setCounter((c) => c + 1)
  }, [setCounter])
  // useCallback with a parametrized function
  // const increment = useCallback(
  //   (num) => {
  //     setCounter((c) => c + num)
  //   },
  //   [setCounter]
  // )

  return (
    <div>
      <h1>useCallback Hook</h1>
      <hr />
      <h2> Counter: {counter}</h2>
      <ShowIncrement increment={increment} />
    </div>
  )
}
