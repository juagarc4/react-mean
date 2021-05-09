import React, { useState, useCallback } from 'react'
import Child from './Child'

export const Parent = () => {
  const numeros = [2, 4, 6, 8, 10]
  const [value, setValue] = useState(0)

  const increment = useCallback(
    (num) => {
      setValue((v) => v + num)
    },
    [setValue]
  )

  return (
    <div>
      <h1>Parent</h1>
      <p> Total: {value} </p>

      <hr />

      {numeros.map((n) => (
        <Child key={n} number={n} increment={increment} />
      ))}
      {/* <Child /> */}
    </div>
  )
}
