import React from 'react'
import { shallow, mount } from 'enzyme'
import { UserContext } from 'components/09-useContext/UserContext'
import { LoginScreen } from 'components/09-useContext/LoginScreen'

describe('Tests in component <HomeScreen/>', () => {
  const user = {
    id: 1,
    name: 'Raul',
    email: 'email@rgc.com',
  }
  const setUser = jest.fn()
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should execute setUser with the expected argument', () => {
    wrapper.find('button').simulate('click')
    expect(setUser).toHaveBeenCalledWith(user)
  })
})
