import React from 'react';
import './Task.css';

const running = require('../Symbol/symbol/task_running.png');
const cycling = require('../Symbol/symbol/task_cycling.png');
const fitness = require('../Symbol/symbol/task_fitness.png');
const jumping = require('../Symbol/symbol/task_jumping.png');
const yoga = require('../Symbol/symbol/task_yoga.png');
const custom = require('../Symbol/symbol/task_custom.png');

function Task(props) {

  const removeTask = () => {
    props.onRemove(props.task)
}
  return (
      <div className="task">

        <div className="task-symbol">
          <img src={running}/>
          </div>
        
        <div className="task-information">
                <h2>{props.task.date}</h2>
                <p>{props.task.activity}</p>           
                <p>{props.task.timer}</p>
                <p>{props.task.location}</p>
                <p>{props.task.detail}</p>
          </div>

            <button className="task-btn" onClick = {removeTask}>-</button>
        
      </div>

   );

  
}

export default Task;