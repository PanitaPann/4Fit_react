import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import './Form.css';
import Symbol from '../Symbol/Symbol'
import { useState } from "react";

function Form(props) {


    const [symbol,setSymbol] = useState('')
    const [date,setDate] = useState('')
    const [activity,setActivity] = useState('')
    const [timer,setTimer] = useState('')
    const [location,setLocation] = useState('')
    const [detail,setDetail] = useState('')

    const inputSymbol = (event)=>{
        setSymbol(event.target.value)
    }
    const inputDate = (event)=>{
        setDate(event.target.value)
    }
    const inputActivity = (event)=>{
        setActivity(event.target.value)
    }
    const inputTimer = (event)=>{
        setTimer(event.target.value)
    }
    const inputLocation = (event)=>{
        setLocation(event.target.value)
    }
    const inputDetail = (event)=>{
        setDetail(event.target.value)
    }
    
    const saveTask = () => {

        const task = {
            id:uuidv4(),
            date:date,
            activity:activity,
            timer:timer,
            location:location,
            detail:detail,
            symbol:symbol,
        } 
        props.addTask(task)
                setSymbol('')
                setDate('')
                setActivity('')
                setTimer(0)
                setLocation('')
                setDetail('')
    }
    
    // const addDate = props.addDate(date)


  return (
      <div className="form">

        <h2>My Goal</h2>
                <div className="form-data">
                    
                    <Symbol addSymbol={inputSymbol} value={symbol}/>
                </div>

                {/* <button onClick={() => setSymbol('Running')}> <img/> </button>
                <button onClick={() => setSymbol('walking')}> <img/> </button> */}

                <div className="form-data">
                    <label>Date</label>
                    <input type="date" placeholder="Date" onChange={inputDate} value={date}/>
                </div>

                <div className="form-data">
                    <label>Activity</label>
                    <input type="text" placeholder="Activity" onChange={inputActivity} value={activity}/>
                </div>

                <div className="form-data">
                    <label>Timer</label>
                    <input type="number" placeholder="00.00.00" onChange={inputTimer} value={timer}/>
                </div>

                <div className="form-data">
                    <label>Location</label>
                    <input type="text" placeholder="Location" onChange={inputLocation} value={location}/>
                </div>

                <div className="form-data">
                    <label>Detail</label>
                    <input type="text" placeholder="" onChange={inputDetail} value={detail}/>
                </div>

                <div>
                    <button onClick={saveTask} className="btn">+</button>
                </div>

           
      </div>
      )
}

export default Form;