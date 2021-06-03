import React from 'react'
import { shallow } from 'enzyme'
import { TodoList } from 'components/08-useReducer/TodoList'

import { testTodos } from 'tests/fixtures/testTodos'

describe('Tests in component <TodoList/>', () => {
  const handleToggle = jest.fn()
  const handleDelete = jest.fn()
  const wrapper = shallow(
    <TodoList
      todos={testTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  )
  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Should show the right number of components <TodoListItem />', () => {
    expect(wrapper.find('TodoListItem').length).toBe(testTodos.length)
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    )
    expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(
      expect.any(Function)
    )
  })
})
