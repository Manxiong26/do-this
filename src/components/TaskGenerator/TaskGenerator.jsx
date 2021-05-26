import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function TaskGenerator(){

    // const history = useHistory();
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_TASK' });
    // }, []);

    // const task = useSelector((store) => store.task)

    const task = [
        "go for a walk at Phalen Lake", 
        "Go for a Hike", 
        'Hop like a Bunny',
        'Do Some Jumping Jacks'
    ];

    const [random, setRandom] = useState('')

const randomNumber = () => {
    const random = Math.floor(Math.random() * task.length);
    setRandom(random)
}
const handleAccept = () => {
    history.push('/taskList')
}
    return(
        <>
            <form onSubmit={handleAccept}>
                <h1>Random Task </h1>{task[random]}
                <button type="submit">Accept</button>
            </form>
            <div>
                <button onClick={randomNumber}>Reject</button>
            </div>
            
        </>
    )
}

export default TaskGenerator;