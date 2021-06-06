import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  //const [heading, setHeading] = useState('Welcome');
  //const history = useHistory();

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  return (
    <div className="container">
      {/* <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          DoThis is all about helping our users to get up and about in the state of Minnesota. 
          This app will deploy random tasks for users to do as much as they want by 
          continuing to accept tasks or reject to get a new task. 
          Our goal is to help users who wants to try new things or go on new adventures! </p>
          <h2>Let's have Fun Friends!!!!</h2>
        </div> */}
      <div className="grid-col grid-col_4">
        <RegisterForm />

        {/* <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div> */}
      </div>
    </div>
  );
}

export default LandingPage;
