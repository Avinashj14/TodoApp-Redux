// ./actions/TodoActions.js

export const AddTodoAction = (todo) => (dispatch) => {
  const newTodo = { id: Date.now(), text: todo,  completed: false  }; 

    dispatch({
    type: "ADD_TODO", // calling the reducer
    payload: newTodo, // this will be passed from our react app
    });
    };
    export const RemoveTodoAction = (id) => (dispatch, getState) => {
    const { Todo:{ todos } } = getState(); 
    // getState gives us access to our app state
    dispatch({
    type: "REMOVE_TODO",
    payload: todos.filter((t) => t.id !== id),
  //  payload: todos.filter((t) => todo !== t),
    });
    }
    export const EditTodoAction = (id, newTodo) => (dispatch, getState) => {
        const { Todo: { todos } } = getState();
        const updatedTodos = todos.map((t) => (t.id === id ? { ...t, text: newTodo } : t)); 
        // const updatedTodos = todos.map((t) => (t === oldTodo ? newTodo : t));
        dispatch({
          type: "EDIT_TODO",
          payload: updatedTodos,
        });
      };
      
      export const ToggleTodoAction = (id) => (dispatch, getState) => {
        const { Todo: { todos } } = getState();
        const updatedTodos = todos.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        );
        dispatch({
          type: "TOGGLE_TODO",
          payload: updatedTodos,
        });
      };