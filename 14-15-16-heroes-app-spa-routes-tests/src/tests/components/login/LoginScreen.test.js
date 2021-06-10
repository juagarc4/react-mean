import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { LoginScreen } from 'components/login/LoginScreen'
import { AuthContext } from 'auth/AuthContext'
import { types } from 'types/types'

describe('Tests in <LoginScreen/>', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  }

  const historyMock = {
    replace: jest.fn(),
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <LoginScreen history={historyMock} />
      </MemoryRouter>
    </AuthContext.Provider>
  )
  afterEach(() => jest.clearAllMocks())

  test('Should render properly ', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should execute dispatch and navigation', () => {
    const handleClick = wrapper.find('button').prop('onClick')
    handleClick()
    const action = {
      type: types.login,
      payload: {
        name: 'Raul',
      },
    }

    expect(contextValue.dispatch).toHaveBeenCalledWith(action)
    expect(historyMock.replace).toHaveBeenCalledWith('/')

    localStorage.setItem('lastVisited', '/dc')
    handleClick()
    expect(historyMock.replace).toHaveBeenCalledWith('/dc')
  })
})
