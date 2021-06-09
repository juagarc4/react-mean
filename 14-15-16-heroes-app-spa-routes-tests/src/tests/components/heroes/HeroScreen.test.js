import { HeroScreen } from 'components/heroes/HeroScreen'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Tests in <HeroScreen/>', () => {
  const historyMock = {
    length: 10,
    goBack: jest.fn(),
    push: jest.fn(),
  }
  const wrapper = mount(
    <MemoryRouter initialEntries={['/hero']}>
      <HeroScreen history={historyMock} />
    </MemoryRouter>
  )
  test('Should show the component <Redirect/> if no hero is present', () => {
    expect(wrapper.find('Redirect').exists()).toBe(true)
  })
  test('Should show a hero if the parameter exists and was found ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    )

    expect(wrapper.find('.row').exists()).toBe(true)
  })
  test('Should return to previous screen with push', () => {
    const historyMock = {
      length: 1,
      goBack: jest.fn(),
      push: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )
    wrapper.find('button').simulate('click')
    expect(historyMock.push).toHaveBeenCalledWith('/')
    expect(historyMock.goBack).not.toHaveBeenCalled()
  })
  test('Should return to previous screen with goBack', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={historyMock} />}
        />
      </MemoryRouter>
    )
    wrapper.find('button').simulate('click')
    expect(historyMock.push).not.toHaveBeenCalledWith('/')
    expect(historyMock.goBack).toHaveBeenCalledTimes(1)
  })
})
