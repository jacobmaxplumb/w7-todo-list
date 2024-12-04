export const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo, index) => (
          <li onClick={() => props.deleteTodo(todo)} key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};
