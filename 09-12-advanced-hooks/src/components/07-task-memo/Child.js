import React from 'react'

const Child = ({ number, increment }) => {
  console.log('I rendered myself again 😢')

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  )
}

export default React.memo(Child)
