import { authReducer } from 'auth/authReducer'
import { types } from 'types/types'

describe('Tests in authReducer', () => {
  const loginState = {
    name: 'Raul',
    logged: true,
  }

  const logoutState = { logged: false }

  test('Should return the default state', () => {
    const state = authReducer(logoutState, {})
    expect(state).toEqual(logoutState)
  })

  test('Should authenticate the user and set the username', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Raul',
      },
    }
    const state = authReducer(logoutState, action)
    expect(state).toEqual(loginState)
  })

  test('Should delete the username and set logged to false on logout', () => {
    const action = {
      type: types.logout,
      payload: {
        name: '',
      },
    }
    const state = authReducer(loginState, action)
    expect(state).toEqual(logoutState)
  })
})
