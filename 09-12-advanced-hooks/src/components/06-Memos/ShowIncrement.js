import React from 'react'

function ShowIncrement({ increment }) {
  console.log('I generated myself again :sad:😢')
  return (
    <button
      className="btn btn-outline-primary"
      onClick={() => {
        increment()
      }}
    >
      +1
    </button>
    // Passsing paremeters to the funcion
    // <button
    //   className="btn btn-outline-primary"
    //   onClick={() => {
    //     increment(5)
    //   }}
    // >
    // +1
    // </button>
  )
}
export default React.memo(ShowIncrement)
