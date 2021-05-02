import React from 'react'
import { shallow } from 'enzyme'
import { AddCategory } from 'components/AddCategory'

describe('Tests in AddCategory', () => {
  const setCategories = () => {}
  const wrapper = shallow(<AddCategory setCategories={setCategories} />)

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should change the input box', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'
    input.simulate('change', { target: { value: value } })
    expect(wrapper).toMatchSnapshot()
  })
})
