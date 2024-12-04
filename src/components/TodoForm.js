import { useState } from "react";

export const TodoForm = (props) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    props.addTodo(text);
    setText('');
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
