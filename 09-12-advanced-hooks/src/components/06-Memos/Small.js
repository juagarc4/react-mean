import React from 'react'

function Small({ value }) {
  console.log('I was rendered again 😢.')
  return <small>{value}</small>
}
export default React.memo(Small)
