import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function TaskGenerator(){

    const history = useHistory();
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch({ type: 'FETCH_RANDOM_TASK' });
        dispatch({type: 'ADD_TASK', payload: task});
    }, []);

  //   useEffect(() => {
  //     setNewTask(task);
  // }, [task]);

    

    // const [user, setUser] = useState(0);
    // const [taskId, setTaskId] = useState(0);
    // const [userTask, setUserTask] = useState('');
    // const [description, setDescription] = useState('');

    // const [newTask, setNewTask] = useState({});

    // {user_id: user, task_id: taskId, name_task: userTask, task_description: description}

    const task = useSelector((store) => store.randomTaskReducer)
console.log('CHECKING TASK IN THE TASK',task);
console.log('CHECKING NEW TASK!!!!!!!', task);

const handleAccept = (action) => {
  
  dispatch({type: 'ADD_TASK', payload: task})
    history.push('/taskList')
}

const handleTask = () => {
    dispatch({type: 'FETCH_RANDOM_TASK'})
    
  } 
    return(
        <>

<form onSubmit={handleAccept}>
        
            <div key={task.id}>
              <p>{task.name_task}: {task.task_description}! </p>
              <p>Address is: </p>
              {task.location_id}
            </div>
      <button value="submit">Accept</button>
      </form>
      
      <button onClick={handleTask}>Reject</button>
            
        </>
    )
}

export default TaskGenerator;