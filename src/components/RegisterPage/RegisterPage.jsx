import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useStyles } from '../classes'
import { 
  Button, 
  Box, 
  Typography 
} from '@material-ui/core'

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
        <Box mt={5}>
        <Copyright />
      </Box>
      </center>
    </div>
  );
}

export default RegisterPage;
