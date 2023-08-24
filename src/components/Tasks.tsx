import { Trash } from "phosphor-react";
import styles from "./Tasks.module.css";

export interface TasksProps {
  id: string;
  title: string;
  done: boolean;
  toggleTask: (id: string) => void; 
  deleteTask?: (id: string) => void;
}

export function Tasks({ id, title, done, toggleTask, deleteTask }: TasksProps) {

  const handleDelete = () => {
    if (deleteTask && id) {
      deleteTask(id);
    }
  }

  return (
    <div className={styles.ContainerTasks}>
      <input type="checkbox" id={`myCheckbox-${id}`} checked={done} onChange={() => toggleTask(id)} />
      <label htmlFor={`myCheckbox-${id}`}></label>
      <p>{title}</p>
      <button onClick={handleDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
}