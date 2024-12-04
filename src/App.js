import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoItem = (text) => {
    setTodos([...todos, text])
  }

  const handleDeleteTodo = (todoText) => {
    setTodos(todos.filter(todo => todo !== todoText))
  }

  return (
    <div>
      <TodoForm addTodo={addTodoItem} />
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
      {/* <input value={text} onChange={handleInputChange} />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo, index) => <li onClick={() => handleDeleteTodo(todo)} key={index}>{todo}</li>)}
      </ul> */}
    </div>
  );
}

export default App;
