import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const[value,setValue]=useState("");
  const[todos,setTodos] = useState([]);
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" 
        type="text"
        placeholder="Add task.."
        value={value}
        onChange={(e)=>{
        setValue(e.target.value);
        }}
      />
      <button data-cy="add-task-button"
       onClick={()=>{
        setTodos([...todos,{value:value}]);
        setValue("");
      }}
      >  
      +
      </button>
      {todos.map((Todo) =>(
                <div>{Todo.value}</div>
                
            ))}
            
    </div>
  );
};

export default AddTask;
