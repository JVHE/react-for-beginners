import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("")
  const [toDoList, setToDoList] = useState([])
  const onChange = (e) => {
    setToDo(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (toDo === "") {
      return
    }
    setToDoList((currentArray) => [toDo, ...currentArray])
    setToDo("")
  }
  console.log(toDoList);
  return (
    <div>
      <h1>ToDo List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo" />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDoList.map((item, index) => <li key={index}>{item}</li>)}
    </div>
  );
}

export default App;
