import { AuthContext } from 'auth/AuthContext'
import { mount } from 'enzyme'
import { Navbar } from 'components/ui/Navbar'
import { MemoryRouter, Router } from 'react-router-dom'
import { types } from 'types/types'

describe('Tests in <Navbar/>', () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  }
  const contextValue = {
    dispatch: jest.fn(),
    user: { name: 'Raul', logged: true },
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  )

  afterEach(() => jest.clearAllMocks())

  test('Should render correctly ', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.text-info').text().trim()).toBe('Raul')
  })
  test('Should call logout and useHistory', () => {
    wrapper.find('.btn-login').simulate('click')
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout })
    expect(historyMock.replace).toHaveBeenCalledWith('/login')
  })
})
