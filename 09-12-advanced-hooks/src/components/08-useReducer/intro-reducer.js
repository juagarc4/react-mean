const initialState = [
  {
    id: 1,
    todo: 'Buy milk',
    done: false,
  },
]

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'add') {
    return [...state, action.payload]
  }
  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Buy bread',
  done: false,
}

const addToDo = {
  type: 'add',
  payload: newTodo,
}

todos = todoReducer(todos, addToDo)

console.log(todos)
