import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function TaskGenerator(){

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_TASK' });
    }, []);

    const task = useSelector((store) => store.task)

const handleAccept = () => {
    history.push('/taskList')
}
const handleTask = () => {
    dispatch({type: 'FETCH_TASK'})
  } 
    return(
        <>

<form onSubmit={handleAccept}>
        {task.map(task => {
          return (
            <ul key={task.id}>
              <li>{task.name_task}: {task.task_description}</li>
            </ul>
          )
        })}
        <button type="submit">Accept</button>
      </form>
      <button onClick={handleTask}>Task</button>
            
        </>
    )
}

export default TaskGenerator;