import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TaskGenerator(){

    const history = useHistory();

    const task = [
        "go for a walk at Phalen Lake", 
        "Go for a Hike", 
        'Hop like a Bunny',
        'Do Some Jumping Jacks'
    ];

    const [random, setRandom] = useState(0)

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
                <h1>Random Task </h1><p>{task[random]}</p>
                <button type="submit">Accept</button>
            </form>
            <div>
                <button onClick={randomNumber}>Reject</button>
            </div>
            
        </>
    )
}

export default TaskGenerator;