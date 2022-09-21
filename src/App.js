import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((c) => c + 1);
  console.log('render always');
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  return (<div>
    <h1>Count: {count}</h1>
    <button onClick={onClick}>Increment</button>
  </div>
  );
}


export default App;
