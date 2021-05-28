import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TaskList(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_TASK' });
    }, []);

// const complete = (task) => {
//     console.log('complete');
//     dispatch({type: 'UPDATE_COMPLETED', payload: task.id })
// }

    const tasks = useSelector(store => store.task)
console.log('CHECKING TASKS REDUCERS',tasks);
    return (
        <>
        <h1>TaskList</h1>
        <ul>
                {tasks.map(task => 
                    <li key={task.id}>{task.task_description}
                    <button onClick={() => 
                        dispatch({ type: "DELETE_TASK", payload: task.id})}>Delete</button>
                    <button onClick={() => 
                    dispatch({type: 'UPDATE_COMPLETE', payload: task.id })}>Complete</button>
                    <br/>
                    <button>Add Comments</button>
                    </li>
                    
                )}
                            
        </ul>
        </>
    )
}

export default TaskList;