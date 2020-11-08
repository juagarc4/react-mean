import React from 'react'
import { render } from '@testing-library/react'
import FirstApp from '../components/FirstApp'

describe('Test <FirstApp/>', () => {
  test('should show message "Hello World"', () => {
    const greeting = 'Hello World'
    const { getByText } = render(<FirstApp greeting={greeting} />)

    expect(getByText(greeting)).toBeInTheDocument()
  })
})
