import React from 'react'
import { shallow } from 'enzyme'
import { FormAddTodo } from 'components/08-useReducer/FormAddTodo'

describe('Tests in component <FormAddTodo/>', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<FormAddTodo handleAddTodo={handleAddTodo} />)
  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should not call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })
  test('Should call handleAddTodo', () => {
    const value = 'Learn GraphQL'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description',
      },
    })

    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    // expect(handleAddTodo).toHaveBeenCalledWith({
    //   id: expect.any(Number),
    //   description: value,
    //   done: false,
    // })
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
