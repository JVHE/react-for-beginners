import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setCount((c) => c + 1);
  const onChange = (e) => setKeyword(e.target.value);
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run only when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run only when count changes");
  }, [count]);
  useEffect(() => {
    console.log("I run only when keyword or count changes");
  }, [keyword, count]);
  return (
    <div>
      <input type="text" placeholder='Search here...' onChange={onChange} />
      <h1>Count: {count}</h1>
      <button onClick={onClick}>Increment</button>
    </div>
  );
}

export default App;
