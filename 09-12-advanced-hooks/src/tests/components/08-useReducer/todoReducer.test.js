import { todoReducer } from 'components/08-useReducer/todoReducer'
import { testTodos } from 'tests/fixtures/testTodos'

describe('Tests in todoReducer', () => {
  test('Should return the default state', () => {
    const state = todoReducer(testTodos, {})
    expect(state).toEqual(testTodos)
  })
  test('Should add a todo', () => {
    const newTodo = {
      id: 3,
      description: 'Learn MongoDB',
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
  test('Should remove a todo', () => {
    const action = {
      type: 'remove',
      payload: 1,
    }
    const state = todoReducer(testTodos, action)
    expect(state.length).toBe(1)
    expect(state).toEqual([testTodos[1]])
  })
  test('Should toggle a todo', () => {
    const action = {
      type: 'toggle',
      payload: 1,
    }
    const state = todoReducer(testTodos, action)
    const originalState = testTodos.find((st) => st.id === action.payload)
    const changedState = state.find((st) => st.id === action.payload)
    expect(originalState.done).toBe(!changedState.done)
    // Another type of tests. Less robust in my opinion
    // expect(state[1].done).toBe(true)
    // expect(state[0]).toBe(testTodos[0])
  })
})
