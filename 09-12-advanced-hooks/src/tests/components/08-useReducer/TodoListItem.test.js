import React from 'react'
import { shallow } from 'enzyme'
import { TodoListItem } from 'components/08-useReducer/TodoListItem'

import { testTodos } from 'tests/fixtures/testTodos'

describe('Tests in component <TodoListItem/>', () => {
  const todo = testTodos[0]
  const handleToggle = jest.fn()
  const handleDelete = jest.fn()
  const wrapper = shallow(
    <TodoListItem
      todo={todo}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )
  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should call the function handleDelete', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalledWith(todo.id)
  })
  test('Should call the function handleToggle', () => {
    wrapper.find('p').simulate('click')
    expect(handleToggle).toHaveBeenCalledWith(todo.id)
  })
  test('Should show the text properly', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(`1. ${todo.description}`)
  })
  test('Should have the class "complete" if todo.done is true', () => {
    const todo = testTodos[0]
    todo.done = true
    const wrapper = shallow(<TodoListItem todo={todo} index={0} />)
    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  })
})
