import { todoReducer } from 'components/08-useReducer/todoReducer'
import { testTodos } from 'tests/fixtures/testTodos'

describe('Tests is todoReducer', () => {
  test('Should return the default state', () => {
    const state = todoReducer(testTodos, {})
    expect(state).toEqual(testTodos)
  })
  test('Should add a todo', () => {
    const newTodo = {
      id: 3,
      desc: 'Learn MongoDB',
      done: false,
    }
    const action = {
      type: 'add',
      payload: newTodo,
    }
    const state = todoReducer(testTodos, action)
    expect(state.length).toBe(3)
    expect(state).toEqual([...testTodos, newTodo])
  })
})
