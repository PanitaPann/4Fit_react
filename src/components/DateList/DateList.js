import React from 'react';
import './DateList.css';
import Date from '../Date/Date';


function DateList(props) {

    // const [dateTask,setDatetask] = useState([]);

    // const date =  props.task.map(task => task.date);

    // const date =  props.dateTask.map(task => task.date);

    // const date =  props.task.map((date) => {
    //     let dates = [..dateTask]
    //     if (task.date === dateTask) {
    //         return 
    //     } 
    //         dates.push(date);
    //         setDatetask(dates)
    //     }
       

  return (
        <div className="date-list">



            {/* <h2 className="date-num">{date}</h2> */}
            <h1>Date</h1>
            <Date/>
        </div>

        
      );
}

export default DateList;