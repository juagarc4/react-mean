import React, { useEffect } from 'react'

export const Message = () => {
  useEffect(() => {
    console.log('Component mounted')
    return () => {
      console.log('Component unmounted')
    }
  }, [])

  return (
    <div>
      <h3>You are great</h3>
    </div>
  )
}
