import React from "react";
import AddTask from "./components/AddTask/AddTask";
import Counter from "./components/Counter/Counter";
import Task from "./components/Task/Task";
import TaskHeader from "./components/TaskHeader/TaskHeader";
function App() {
  return <div className="App">{/* Code Here */}
 
  <TaskHeader/>
  <AddTask></AddTask>
 <Counter/>


  </div>;
}

export default App;
