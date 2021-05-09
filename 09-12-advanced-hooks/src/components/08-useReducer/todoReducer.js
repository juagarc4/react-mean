export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'remove':
      return state.filter((todo) => todo.id !== action.payload)
    case 'toggle':
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, donde: !todo.done }
          : todo
      })
    default:
      return state
  }
}
