import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TaskList(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_TASK' });
    }, []);

const complete = () => {
    console.log('complete');
}

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
                    <button onClick={complete}>Complete</button>
                    <br/>
                    <button>Add Comments</button>
                    </li>
                    
                )}
                            
        </ul>
        </>
    )
}

export default TaskList;