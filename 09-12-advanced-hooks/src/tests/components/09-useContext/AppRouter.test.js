import React from 'react'
import { mount } from 'enzyme'
import { UserContext } from 'components/09-useContext/UserContext'
import { AppRouter } from 'components/09-useContext/AppRouter'

describe('Tests in component <AppRouter/>', () => {
  const user = {
    id: 1,
    name: 'Raul',
    email: 'email@rgc.com',
  }
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  )
  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
