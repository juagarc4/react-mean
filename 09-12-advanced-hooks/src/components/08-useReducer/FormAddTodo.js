import React from 'react'
import { useForm } from 'hooks/useForm'

export const FormAddTodo = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  })

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

    handleAddTodo({ newTodo })
    reset()
  }

  return (
    <>
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
    </>
  )
}
