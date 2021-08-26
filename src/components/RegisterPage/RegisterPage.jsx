import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useStyles } from '../classes'
import { Button } from '@material-ui/core'

function RegisterPage() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div><center>
      <RegisterForm />
      {/* button that when clicked, takes user to 
        login page */}
        <Button
          color="secondary"
          type="button"
          className={classes.btn}
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
