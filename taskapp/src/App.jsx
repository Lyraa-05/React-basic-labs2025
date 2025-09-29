import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>TaskApp</h1>
      <Task title="Dishes" deadline="Today" description="Wash them please." />
      <Task title="Hoover" deadline="Tomorrow" description="Hoover before Mam comes home." />
      <Task title="Put the bins out" deadline="Tomorrow" description="Just do it."/>
    </div>
  );
}

export default App
