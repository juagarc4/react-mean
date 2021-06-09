import { AuthContext } from 'auth/AuthContext'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import { DashboardRoutes } from 'routers/DashboardRoutes'

describe('Tests in <DashboardRoutes/>', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { name: 'Raul', logged: true },
  }
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <DashboardRoutes />
      </MemoryRouter>
    </AuthContext.Provider>
  )
  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should show the user name in the navbar', () => {
    expect(wrapper.find('.text-info').text().trim()).toBe('Raul')
  })
})
