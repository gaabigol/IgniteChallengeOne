import styles from "./Todo.module.css";
import PlusIcon from "../assets/Iconplus.svg";
import ClipBoard from "../assets/Clipboard.png";
import { Tasks, TasksProps } from "./Tasks";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export function Todo() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    const newId = uuidv4();
    const updatedTasks = [...tasks, { id: newId, title: newTask, done: false, toggleTask }];
    setTasks(updatedTasks);
    setNewTask("");
  }

  const toggleTask = (id: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  function deleteTask(id: string) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className={styles.ContainerInput}>
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button onClick={handleAddTask} className={styles.ButtonContainer}>
          <span>Criar</span>
          <img src={PlusIcon} />
        </button>
      </div>

      <div className={styles.ContainerCountTasks}>
        <span className={styles.tasks}>Tarefas Criadas</span>
        <span className={styles.result}>{tasks.length}</span>
        
        <span className={styles.conclusion}>Concluídas</span>
        <span className={styles.result}>{tasks.filter(task => task.done).length}</span>
      </div>

      {tasks.length > 0 ? (
        tasks.map(task => (
          <div className={styles.taskSpacing}>
            <Tasks 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            done={task.done}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
          </div>
        ))
      ) : (
        <div className={styles.ContainerWithoutTasks}>
          <img src={ClipBoard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </>
  );
}