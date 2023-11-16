import { useState } from "react";

function App() {
  //const [name, setName] = useState("Laney");

  //setTimeout(() => {
  // setName("coco");
  //}, 3500);

  const [counter, setCounter] = useState(0);

  const incro = () => {
    setCounter((currentVal) => {
      return currentVal + 1;
    });
  };

  const decro = () => {
    if (counter === 0) return;
    setCounter((currentVal) => {
      return currentVal - 1;
    });
  };

  return (
    <div>
      <h1>hello</h1>
      <p>counter: {counter}</p>
      <button onClick={decro}>-</button>
      <button onClick={incro}>+</button>
    </div>
  );
}

export default App;

//rtfm 😂
// read the f***ing manuel

// don't manipulate the DOM directly
// don't ever ever ever change a stateful variable directly
