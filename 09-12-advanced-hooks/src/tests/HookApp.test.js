import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { HookApp } from 'HookApp'

const wrapper = shallow(<HookApp />)

describe('Tests in <HookApp />', () => {
  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
