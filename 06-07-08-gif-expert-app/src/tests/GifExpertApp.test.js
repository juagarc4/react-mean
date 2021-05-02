import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifExpertApp from 'GifExpertApp'

const wrapper = shallow(<GifExpertApp />)

describe('Tests in <GifExpertApp />', () => {
  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should show a list of categories', () => {
    const categories = ['Dragon Ball', 'Matrix', 'One punch']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
