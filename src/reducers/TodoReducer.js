//.reducer/TodoReducer.js
// ctake state of emply array and action   to switch between action
export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
case "ADD_TODO":
   return { todos: [action.payload, ...state.todos] };
    //adds new todo to existing ones
    case "REMOVE_TODO":
    return { todos: action.payload };
    //removes the todo
    case "EDIT_TODO":
        return { todos: action.payload };
// to edit
    case "TOGGLE_TODO":
      return { todos: action.payload };
    default:
    return state;
    }
    };