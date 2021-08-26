import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

//material UI
import { 
  Button, 
  Typography, 
  TextField, 
  Card 
} from '@material-ui/core'
import { useStyles } from '../classes';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const classes = useStyles();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
    <Card className={classes.loginForm}>
      <form className={classes.form} onSubmit={login}>
        <Typography className={classes.loginTitle} variant="h4">Login</Typography>
        <div className={classes.cardContent}>
          {errors.loginMessage && (
            <h3 className={classes.alert} role="alert">
              {errors.loginMessage}
            </h3>
          )}
          <div className={classes.loginInputs}>

            {/* when the button to log in is clicked, will take the value in this field for the dispatch */}
            <TextField
              className={classes.inputs}
              variant="outlined"
              placeholder="Username"
              label="Username"
              type="text"
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            {/* when the button to log in is clicked, will take the value in this field for the dispatch */}
            <TextField
              className={classes.inputs}
              variant="outlined"
              placeholder="Password"
              label="Password"
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className={classes.btn}>

              {/* button that when clicked, begins login process */}
              <Button color="primary" variant="outlined" type="submit" name="submit">Log In</Button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
    </>
  );
}

export default LoginForm;
