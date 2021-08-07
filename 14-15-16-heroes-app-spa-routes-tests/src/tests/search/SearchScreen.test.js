import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchScreen } from 'components/search/SearchScreen'

describe('Tests in <SearchScreen/>', () => {
  test('Should show properly with default values', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero')
  })
  test('Should show Batman and the input with the value of the queryString', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('batman')
    expect(wrapper).toMatchSnapshot()
  })
})
