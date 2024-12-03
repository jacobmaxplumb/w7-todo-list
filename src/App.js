import { useState } from "react";
import { Test } from "./Test";

function App() {
  const [title, setTitle] = useState('Jacob Plumb');

  let number = 10;

  let randomFunction = () => {
    console.log('random function was called');
  }

  const changeTitle = () => {
    setTitle('something else');
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change</button>
      <Test myPropOne="hello" myPropTwo={randomFunction} />
    </div>
  );
}

export default App;
