import React from 'react'
import { GifGridItem } from 'components/GifGridItem'
import { shallow } from 'enzyme'
const title = 'A title for a test image'
const url = 'https://media.giphy.com/media/3orieKKmYyvUdR3RkY/giphy.gif'
const wrapper = shallow(<GifGridItem title={title} url={url} />)

describe('Tests in <GifGridItem />', () => {
  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should have a p element with the title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('Should have an img element with the url and alt', () => {
    const img = wrapper.find('img')
    expect(img.props().src).toBe(url)
    expect(img.props().alt).toBe(title)
  })

  test('Should have the class animate__fadeIn', () => {
    const div = wrapper.find('div')
    expect(div.props().className).toContain('animate__fadeIn')
  })
})
