import React from 'react'
import { mount } from 'enzyme'
import { PrivateRoute } from 'routers/PrivateRoute'
import { MemoryRouter } from 'react-router'

describe('Tests in <PrivateRoute/>', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  }

  Storage.prototype.setItem = jest.fn()
  test('Should return the component if the user is authenticated and saves last path in localstoraged', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuthenticated={true}
          component={() => <span>Ready!</span>}
          {...props}
        />
      </MemoryRouter>
    )
    expect(wrapper.find('span').exists()).toBe(true)
    expect(localStorage.setItem).toHaveBeenCalledWith('lastVisited', '/marvel')
  })
})
