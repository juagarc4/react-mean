import { HeroScreen } from 'components/heroes/HeroScreen'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

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
})
