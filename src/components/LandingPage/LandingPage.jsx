import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {

  return (
    <div className="container">

      <div className="grid-col grid-col_4">
        <RegisterForm />
      </div>
    </div>
  );
}

export default LandingPage;
