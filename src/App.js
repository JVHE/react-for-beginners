import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (<div>
    <h1 className={styles.title}>Hello, world!</h1>
    <Button text={"hello"}/>
  </div>
  );
}

export default App;
