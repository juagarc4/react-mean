import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
// import { render } from '@testing-library/react'
import CounterApp from '../components/CounterApp'

// Not best practice at all, but useful zo maintain code completion.
let wrapper = shallow(<CounterApp />)

describe('Test <CounterApp/>', () => {
  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })
  // test('should show message "Hello World"', () => {
  //   const greeting = 'Hello World'
  //   const { getByText } = render(<FirstApp greeting={greeting} />)

  //   expect(getByText(greeting)).toBeInTheDocument()
  // })
  test('should show component <CounterApp /> right', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('should show the default value of 100', () => {
    const value = 100
    const wrapper = shallow(<CounterApp value={value} />)
    const valueShown = parseInt(wrapper.find('h2').text())
    expect(valueShown).toBe(value)
  })

  test('should increment with the button +1', () => {
    wrapper.find('button').at(0).simulate('click')
    const valueShown = parseInt(wrapper.find('h2').text())
    expect(valueShown).toBe(11)
  })

  test('should decrement with the button -1', () => {
    wrapper.find('button').at(2).simulate('click')
    const valueShown = parseInt(wrapper.find('h2').text())
    expect(valueShown).toBe(9)
  })

  test('should reset the component to its default value', () => {
    const wrapper = shallow(<CounterApp value={105} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    const valueShown = parseInt(wrapper.find('h2').text())
    expect(valueShown).toBe(105)

    console.log(valueShown)
  })
})
