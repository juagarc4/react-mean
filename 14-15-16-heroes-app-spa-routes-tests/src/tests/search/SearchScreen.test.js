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

  test('Should return an error if the hereo was not found.', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=myhero']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    )
    expect(wrapper.find('.alert-warning').text().trim()).toBe(
      'There is no hero with the searched name "myhero"'
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('Should call the push of the history', () => {
    const history = {
      push: jest.fn(),
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=myhero']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    )

    wrapper.find('input').simulate('change', {
      target: {
        name: 'searchText',
        value: 'batman',
      },
    })

    wrapper.find('form').prop('onSubmit')({
      preventDefault() {},
    })

    expect(history.push).toHaveBeenCalledWith(`?q=batman`)
  })
})
