import { useState, useEffect } from 'react';

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

function Hello() {
  function hiFn() {
    console.log("created");
    return byFn
  }
  function byFn() {
    console.log("destroyed");
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

export default App;
