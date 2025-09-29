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
  
  taskState.tasks.map(
    (task) => { return <Task /> }
  )

   return (
    <div className="container">
      <h1>Tasky</h1>
  {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
    />
  ))} 
    </div>
  );
}

export default App
