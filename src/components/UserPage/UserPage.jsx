import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import TaskGenerator from '../TaskGenerator/TaskGenerator';

function UserPage() {
  const dispatch = useDispatch();

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const task = useSelector((store) => store.task)

  useEffect(() => {
    dispatch({ type: 'FETCH_TASK' });
}, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <section>
        {task.map(task => {
          return (
            <ul key={task.id}>
              <li>{task.name_task}: {task.task_description}</li>
            </ul>
          )
        })}
      </section>
      <TaskGenerator/>
      <br></br>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
