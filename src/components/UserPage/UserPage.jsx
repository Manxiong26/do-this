import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import TaskGenerator from '../TaskGenerator/TaskGenerator';

function UserPage() {


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);


  return (
    <div className="container">
      <TaskGenerator />
      <br></br><br></br>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
