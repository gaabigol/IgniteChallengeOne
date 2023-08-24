import { Header } from "./components/Header"
import "./global.css";
import styles from './App.module.css'
import { Todo } from "./components/Todo";
function App() {
  

  return (
    <div className={styles.container}>
      <Header />
      <Todo />
    </div>
  )
}

export default App
