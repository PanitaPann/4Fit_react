import './App.css';
import { useState } from "react";

import Header from '../Header/Header';

import Form from '../Form/Form';
import DateList from '../DateList/DateList';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';
const graphic = require('./graph.png')


function App() {

  const [task,setTask] = useState([]);
  const [dateTask,setDatetask] = useState([]);
  // const [tasklist,setTasklist] = useState([]);

  const addNewTask = (newTask)=>{
      // setTask((prevTask)=>{
      //   return [newTask,...prevTask]
      // })
    let tasks = [...task];
    tasks.push(newTask);
    setTask (tasks);

    
      // let dates = [...dateTask];
      // if (dateTask.find(newDate => newDate.date === dateTask)) {
      //   return;
      // }
      // dates.push(newDate);
      // setDatetask(dates);
    };



  // const addNewDate =  newTask.map(newDate) => {
  //   let dates = [...dateTask];
  //   if (dateTask.find(newDate => newDate.date === dateTask)) {
  //     return;
  //   }
  //   dates.push(newDate);
  //   setDatetask(dates);
  // };

  const removeTask = (task) => {
    let tasks = [...task];
    tasks = tasks.filter(currentTask => currentTask.id !== task.id)

    setTask (task)
  }

  

  return (
    <div className="app">

      <Header />

        <div className="container">


                <Form addTask={addNewTask} />
            
         
            <div className="report"> 

                <h1>Welcome Back Panita</h1>
                
                <DateList dateTask={dateTask}/>

               <div className="report-graphic"><img src={graphic} alt="Website Logo"/></div>
               
            </div> 

            <div className="report-content">
                  
                  <TaskList task={task} onRemove={removeTask} />
            
            </div>
        
        </div>
        
      {/* <Footer /> */}

    </div>
  );
}

export default App;
