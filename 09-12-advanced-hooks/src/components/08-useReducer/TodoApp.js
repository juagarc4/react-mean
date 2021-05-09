import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Learn React',
    done: false,
  },
]
export const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)
  console.log(todos)
  return (
    <div>
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  )
}
