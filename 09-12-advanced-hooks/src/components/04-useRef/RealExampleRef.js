import React, { useState } from 'react'
import { MultipleCustomHooks } from 'components/03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      <h1>Real Example of useRef</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-outline-primary mt-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide
      </button>
    </div>
  )
}
