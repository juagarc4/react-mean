import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
// import { render } from '@testing-library/react'
import FirstApp from '../components/FirstApp'

describe('Test <FirstApp/>', () => {
  // test('should show message "Hello World"', () => {
  //   const greeting = 'Hello World'
  //   const { getByText } = render(<FirstApp greeting={greeting} />)

  //   expect(getByText(greeting)).toBeInTheDocument()
  // })
  test('should show component <FirstApp /> right', () => {
    const greeting = 'Hello World'
    const wrapper = shallow(<FirstApp greeting={greeting} />)

    expect(wrapper).toMatchSnapshot()
  })
  test('should show subtitle sent by props', () => {
    const greeting = 'Hello World'
    const subtitle = 'I am a subtitle'
    const wrapper = shallow(<FirstApp greeting={greeting} subtitle={subtitle} />)

    const paragraphText = wrapper.find('p').text()

    expect(paragraphText).toBe(subtitle)
  })
})
