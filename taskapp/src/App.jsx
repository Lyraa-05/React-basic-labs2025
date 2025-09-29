import React, {useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task';

function App() {
   const [ taskState, setTaskState ] = useState({
    tasks: [
      { title:"Dishes", description: "Wash them", deadline: "Today" },
      { title: "Hoover", description: "Before Mam comes home", deadline: "Tomorrow" },
      { title: "Bins out", deadline: "Today" }
    ]
  });
  
   return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title={taskState.tasks[0].title} deadline={taskState.tasks[0].deadline} description={taskState.tasks[0].description} />
      <Task title={taskState.tasks[1].title} deadline={taskState.tasks[1].deadline} description={taskState.tasks[1].description} />
      <Task title={taskState.tasks[2].title} deadline={taskState.tasks[2].deadline} description={taskState.tasks[2].description} />
    </div>
  );
}

export default App
