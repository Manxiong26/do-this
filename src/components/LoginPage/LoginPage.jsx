import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../classes';
import { 
  Button,
  Box,
  Typography,
 } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      {' '}
      Maneena Xiong
      {' '}
      {new Date().getFullYear()}
      {' '}
    </Typography>
  );
}

function LoginPage() {
  const history = useHistory();
  const classes = useStyles()
  return (
    <div><center>
      <LoginForm />
        {/* button that when clicked, takes user to 
        registration page to create an account */}
        <Button
        color="secondary"
          type="button"
          className={classes.btn}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
        <Box mt={5}>
        <Copyright />
      </Box>
      </center>
    </div>
  );
}

export default LoginPage;

