import React from 'react';
import './Symbol.css';

const running = require('./symbol/task_running.png');
const cycling = require('./symbol/task_cycling.png');
const fitness = require('./symbol/task_fitness.png');
const jumping = require('./symbol/task_jumping.png');
const yoga = require('./symbol/task_yoga.png');
const custom = require('./symbol/task_custom.png');

function Symbol(props) {

    const symbols = [ 


    ]

    const handleAddSymbol = (event) => {
        props.addSymbol (event.target.value);
    }


  return (

      <div>
            <div className="symbol-list" onClick = {handleAddSymbol}>
                <div>
                    <label htmlFor="running">
                        <img src={running} alt="running"/>
                        <input type="radio" name="activity" className="running" id="running" value="running"/>
                    </label>
    
                    <label htmlFor="cycling">
                        <img src={cycling} alt="cycling"/>
                        <input type="radio" name="activity" className="cycling" id="cycling" value="cycling" />
                    </label>
    
                    <label htmlFor="fitness">
                        <img src={fitness} alt="fitness"/>
                        <input type="radio" name="activity" className="fitness" id="fitness" value="fitness" />
                    </label>
                    </div>
                <div>   
                    <label htmlFor="jumping">
                        <img src={jumping} alt="jumping"/>
                        <input type="radio" name="activity" className="jumping" id="jumping" value="jumping" />
                    </label>

                    <label htmlFor="yoga">
                        <img src={yoga} alt="yoga"/>
                        <input type="radio" name="activity" className="yoga" id="yoga" value="yoga" />
                    </label>

                    <label htmlFor="custom">
                        <img src={custom} alt="custom"/>
                        <input type="radio" name="activity" className="custom" id="custom" value="custom" />
                    </label>
                </div>
            </div>
        </div>

      );
}

export default Symbol;