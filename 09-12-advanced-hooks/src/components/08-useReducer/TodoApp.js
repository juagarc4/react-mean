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
    <>
      <h1>TodoApp</h1>
      <hr />
      <h2>Total of Todos: {todos.length}</h2>
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => {
              return (
                <li key={todo.id} className="list-group-item">
                  <p className="text-center">
                    {i + 1}. {todo.description}
                  </p>
                  <button className="btn btn-danger">Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add Todo</h4>
          <hr />
          <form>
            <input
              type="text"
              name="description"
              placeholeder="Aprender..."
              autoComplete="off"
              className="form-control"
            ></input>
          </form>
          <button className="btn btn-outline-primary mt-1">Add</button>
        </div>
      </div>
    </>
  )
}
