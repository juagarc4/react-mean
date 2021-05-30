import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from 'components/03-examples/MultipleCustomHooks'
import { useFetch } from 'hooks/useFetch'
import { useCounter } from 'hooks/useCounter'
jest.mock('hooks/useFetch')
jest.mock('hooks/useCounter')

describe('Tests in <MultipleCustomHooks />', () => {
  test('Should show correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    })
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    })

    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Should show the info', () => {
    useFetch.mockReturnValue({
      data: [
        {
          quote_id: 1,
          author: 'Raul',
          quote: 'Hello world',
        },
      ],
      loading: false,
      error: null,
    })
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.blockquote p').text().trim()).toBe('1 - Hello world')
    expect(wrapper.find('footer').text().trim()).toBe('Raul')
  })
})
