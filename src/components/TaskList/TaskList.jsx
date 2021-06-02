import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TaskList() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_TASK' });
    }, []);


    const tasks = useSelector(store => store.task)

    const[editMode, setEditMode] = useState(false)
    const [note, setNote ] = useState(false);

    const viewNote = (event, task) => {
        event.preventDefault();
        console.log('Adding Notes');
        history.push(`/note/${task.id}`)
    }

    // const editNotes = () => {
    //     setEditMode(true)

    // }

    console.log('CHECKING TASKS REDUCERS', tasks);
    return (
        <>
            <h1>TaskList</h1>
            <ul>
                {tasks.map(task =>
                    <li key={task.id}>{task.task_description}
                        <button onClick={() =>
                            dispatch({ type: "DELETE_TASK", payload: task.id })}>Delete</button>
                        {task.completed === null &&
                        <button onClick={ () => dispatch({ type: 'UPDATE_COMPLETE', payload: task.id })}>Complete</button>}
                        <br/>
                        
                            <label>My Adventure:</label>
                            <span>{task.notes}</span>
                        
                        <br/>
                        <span><button onClick={(event) => viewNote(event, task)}>view</button></span>

                    </li>
                )}

            </ul>
        </>
    )
}

export default TaskList;