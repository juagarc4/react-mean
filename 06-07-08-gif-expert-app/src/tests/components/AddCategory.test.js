import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from 'components/AddCategory'

describe('Tests in AddCategory', () => {
  const setCategories = jest.fn()
  // This double definition is only there to provide autocompletion.
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should change the input box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'
    input.simulate('change', { target: { value: value } })
    expect(wrapper).toMatchSnapshot()
  })

  test('Should NOT submit on empty value in the input box', () => {
    const input = wrapper.find('form')

    input.simulate('submit', {
      preventDefault() {},
      target: { value: '' },
    })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Should submit form, call setCategories and clear the input box', () => {
    const value = 'Matrix'
    wrapper.find('input').simulate('change', { target: { value } })
    expect(wrapper).toMatchSnapshot()

    wrapper.find('form').simulate('submit', {
      preventDefault() {},
    })
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
