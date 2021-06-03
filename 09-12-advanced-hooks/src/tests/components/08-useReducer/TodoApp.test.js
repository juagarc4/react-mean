import React from 'react'
import { shallow, mount } from 'enzyme'
import { TodoApp } from 'components/08-useReducer/TodoApp'

import { testTodos } from 'tests/fixtures/testTodos'
import { act } from '@testing-library/react'

describe('Tests in component <TodoApp/>', () => {
  const wrapper = shallow(<TodoApp />)
  Storage.prototype.setItem = jest.fn(() => {})

  test('Should show the component properly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Should add a Todo', () => {
    const wrapper = mount(<TodoApp />)
    act(() => {
      wrapper.find('FormAddTodo').prop('handleAddTodo')(testTodos[0])
      wrapper.find('FormAddTodo').prop('handleAddTodo')(testTodos[1])
    })

    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })

  test('Should delete a Todo', () => {
    wrapper.find('FormAddTodo').prop('handleAddTodo')(testTodos[0])
    wrapper.find('TodoList').prop('handleDelete')(testTodos[0].id)
    expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)')
  })
})
