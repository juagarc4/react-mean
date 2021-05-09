import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'

import { TodoList } from './TodoList'
import { FormAddTodo } from './FormAddTodo'

import './styles.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId) => {
    const action = {
      type: 'remove',
      payload: todoId,
    }
    dispatch(action)
  }

  const handleToggle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    }
    dispatch(action)
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    })
  }

  return (
    <>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <FormAddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </>
  )
}
