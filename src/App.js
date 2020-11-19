import React, { useState } from "react";

/**
 * 1) Move the Counter component to the file named for it.
 * 2) Make the Counter the component the default export from the file.
 * 3) Import the Counter component in this file
 * 4) Remove or comment out the Counter component function below.
 * 5) Repeat steps 1-4 for the Button component.
 * 6) Run tests.
 */

function Counter(props) {
  return (
    <div>
      {
        props.count
      }
    </div>
  );
}

function Button(props) {
  return (
    <button
      onClick={props.handleClick}
    >
      Increment
    </button>
  );
}

const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    const newCount = count + 1;

    setCount(newCount);
  }
  return (<div>
    <Counter count={count} />
    <Button handleClick={handleClick} />
  </div>);
};

export default App;
