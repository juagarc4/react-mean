import React from 'react'
import { shallow, mount } from 'enzyme'
import { HomeScreen } from 'components/09-useContext/HomeScreen'
import { UserContext } from 'components/09-useContext/UserContext'

describe('Tests in component <HomeScreen/>', () => {
  const user = {
    name: 'Raul',
    email: 'test@email.com',
  }
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  )

  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
