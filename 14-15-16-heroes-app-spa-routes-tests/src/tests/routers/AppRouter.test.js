import { AuthContext } from 'auth/AuthContext'
import { mount } from 'enzyme'
import { AppRouter } from 'routers/AppRouter'

describe('Tests ins <AppRouter/>', () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  }

  test('Should show login if not authenticate', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('Should show <MarvelScreen/> if authtenticated', () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { name: 'Raul', logged: true },
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    )
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Screen')
  })
})
