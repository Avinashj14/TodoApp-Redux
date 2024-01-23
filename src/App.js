//app.js

import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import './App.css';
import { AddTodoAction, EditTodoAction, RemoveTodoAction, ToggleTodoAction } from "./actions/TodoActions";

function App() {
  const [todo, setTodo] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const Todo = useSelector((state) => state.Todo);// access todo state 
  const {todos}=Todo;


  const dispatch=useDispatch()// call function action 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    
    if (editMode && editTodo) {
      dispatch(EditTodoAction(editTodo, todo));
      setEditMode(false);
      setEditTodo(null);
    } else {
    dispatch(AddTodoAction(todo));
    };

    setTodo("");
  }

    const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveTodoAction(t.id));
    };

    const editHandler = (t) => {
      setEditMode(true);
      setEditTodo(t.id);
      setTodo(t.text);
    };
    const cancelEdit = () => {
      setEditMode(false);
      setEditTodo(null);
      setTodo("");
    };

    const toggleHandler = (id) => {
      dispatch(ToggleTodoAction(id));
    };
  
  return (
    <div className="App">
      <header className="App-header">
      <h2>TO Do App</h2>
      <form onSubmit={handleSubmit}>
      
        <input
          placeholder="Enter a todo"
          style={{
            width: 200,
            padding: 20,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit" style={{ padding: 20, borderRadius: 25, fontSize: 20, marginLeft: 20 }}>
          {editMode ? "Save" : "Add"} 
        </button>
        {editMode && (
          <button type="button" onClick={cancelEdit} style={{ marginLeft: 10 ,padding: 20, borderRadius: 25, fontSize: 20}}>
            Cancel
                     </button>
        
        )}
      </form>

      <table>
  <thead>
    <tr>
     <th></th>
      <th>Task</th>
      <th>Status</th> 
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {todos.length > 0 &&
      todos.map((t) => (
        <tr key={t.id} >
                 <td>
                    <input type="checkbox" checked={t.completed} onChange={() => toggleHandler(t.id)} />
                  </td>
                  <td>
                    <span style={{ textDecoration: t.completed ? "line-through" : "none" }} className="todoText tooltip">
                      {t.text}
                    </span>
                  </td>
                  <td>{t.completed ? "Completed" : "Pending"}</td>
                  
          <td>
            <button  type="button"  className="editButton"  style={{ borderRadius: 25, fontSize: 20, marginLeft: 20, color: "white", backgroundColor: "blue" }}  onClick={() => editHandler(t)}>  Edit</button>
            <button  type="button"  className="deleteButton"  style={{ borderRadius: 25, fontSize: 20, marginLeft: 20, color: "white", backgroundColor: "orange" }}  onClick={() => removeHandler(t)}>  Delete</button>
          </td>
        </tr>
      ))}
  </tbody>
</table>
      </header>
    </div>
  );
}

export default App;
