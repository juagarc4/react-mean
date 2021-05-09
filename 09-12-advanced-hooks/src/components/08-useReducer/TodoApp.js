import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { useForm } from 'hooks/useForm'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })

  const handleDelete = (todoId) => {
    const action = {
      type: 'remove',
      payload: todoId,
    }
    dispatch(action)
  }

  const handleToogle = (todoId) => {
    const action = {
      type: 'toggle',
      payload: todoId,
    }
    dispatch(action)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim().length <= 1) {
      return
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    }

    const action = {
      type: 'add',
      payload: newTodo,
    }

    dispatch(action)
    reset()
  }
  return (
    <>
      <h1>TodoApp ({todos.length}) </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => {
              return (
                <li key={todo.id} className="list-group-item">
                  <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToogle(todo.id)}
                  >
                    {i + 1}. {todo.description}
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholeder="Aprender..."
              autoComplete="off"
              className="form-control"
              onChange={handleInputChange}
              value={description}
            ></input>
            <button type="submit" className="btn btn-outline-primary mt-1">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
