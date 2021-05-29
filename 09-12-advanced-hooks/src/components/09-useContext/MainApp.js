import React from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'
export const MainApp = () => {
  const user = {
    id: 1,
    name: 'Raul Garcia',
    email: 'email@rgc.com',
  }
  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  )
}
