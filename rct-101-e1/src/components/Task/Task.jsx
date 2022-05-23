import React,{useState} from "react";
import AddTask from "../AddTask/AddTask";
import styles from "./task.module.css";

const Task = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [isCompleted,setIsCompleted]=useState(todos.isCompleted);
  const[todos,setTodos] = useState([]);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" 
      checked={isCompleted}
      onChange={(e) => {
        setIsCompleted(e.target.checked);
      }}
      />
      <div data-cy="task-text"
      className={isCompleted ? styles.striked: ""}>{todos.value}</div>
      {/* Counter here */}
      <button data-cy="task-remove-button"
      onClick={()=> OfflineAudioCompletionEvent(todos.id)}
      >
        -
      </button>
    </li>
  );
};

export default Task;
