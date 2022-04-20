import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

// import { useState } from "react";

function TaskList(props) {

  // const {task} = props

  return (

    <div className="task-list">
          <h2>Task Record</h2>
          <br/>


            {props.task.map ((task) => (
                <Task task ={task} 
                      key = {task.id}
                      onRemove = {props.onRemove} />
          
                ))}
          
    </div>
  );

}

export default TaskList;
