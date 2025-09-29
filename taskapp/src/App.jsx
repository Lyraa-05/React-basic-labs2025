import React, {useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task';

function App() {
   const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Wash them", deadline: "Today", priority: "Low", done: false},
      { id: 2, title: "Hoover", description: "Before Mam comes home", deadline: "Tomorrow", priority: "Medium", done: false},
      { id: 3, title: "Bins out", deadline: "Today", priority: "High", done: false}
    ]
  });
  
  taskState.tasks.map(
    (task) => { return <Task /> }
  )

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }  
   
  return (
    <div className="container">
      <h1>Tasky</h1>
  {taskState.tasks.map((task, index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      priority={task.priority}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
    />
  ))} 
    </div>
  );
}

export default App
