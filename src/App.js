import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const addTodoItem = () => {
    setTodos([...todos, text])
    setText('');
  }

  const handleDeleteTodo = (todoText) => {
    setTodos(todos.filter(todo => todo !== todoText))
  }

  return (
    <div>
      <input value={text} onChange={handleInputChange} />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todos.map((todo, index) => <li onClick={() => handleDeleteTodo(todo)} key={index}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
