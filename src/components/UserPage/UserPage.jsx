import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import TaskGenerator from '../TaskGenerator/TaskGenerator';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const task = useSelector((store) => store.task)
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <section>
        {task.map(task => {
          return (
            <li key={task.id}>
              <li>{task.name_task}</li>
            </li>
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
