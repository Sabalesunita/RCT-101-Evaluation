import React, { useState } from "react";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import {v4 as uuidv4} from "uuid";
import {Tasks} from "./Tasks/Tasks";
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
 const [todo,setTodos]=useState([]);
 const addTodo=(newTodo)=>
 {
   setTodos([...todo,newTodo]);
 };
 const deleteTodo=(value)=>{
   setTodos(todo.filter((todo)=>todo !== value));
 };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      <AddTask addTodo={addTodo}/>
      <Tasks/>
      {/* Tasks */}
      {/* <AddTask addTodo={addTodo}/> */}
    </div>
  );
};

export default TaskApp;
