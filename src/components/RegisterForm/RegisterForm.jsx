import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// //material UI
import { 
  Button, 
  Typography, 
  TextField, 
  Card
} from "@material-ui/core";
import { useStyles } from "../classes";

function RegisterForm() {

  // make it so that the GET on get genres once as components loads
  useEffect(() => {
    //dispatch the saga 
  }, []);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        user_email: email,
      },
    });
    history.push("/home");
  }; // end registerUser

  const onLogin = (event) => {
    history.push('/login');
  };

  const classes = useStyles();
  return (
    <>
    <Card className={classes.loginForm}>

      {/* when the form is submitted, will call the registerUser function with the inputs entered by the user */}
      <form className={classes.form} onSubmit={registerUser}>
        <Typography className={classes.title} variant="h4">
          Register
        </Typography>
        <div className={classes.cardContent}>
          {errors.registrationMessage && (
            <h3 className={classes.alert} role="alert">
              {errors.registrationMessage}
            </h3>
          )}
          <div className={classes.loginInputs}>

            {/* text field for user to input userName */}
            <TextField
              className={classes.inputs}
              variant="outlined"
              placeholder="Username"
              label="Username"
              type="text"
              name="username"
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
            />

            {/* text field for user to input password */}
            <TextField
              className={classes.inputs}
              variant="outlined"
              placeholder="Password"
              label="Password"
              type="password"
              name="password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
            />

            {/* text field for user to input email */}
            <TextField
              className={classes.inputs}
              variant="outlined"
              placeholder="Email"
              label="Email"
              type="email"
              name="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />

            <div className={classes.btn}>

              {/* button to trigger the registration of a user */}
              <Button
                color="primary"
                variant="outlined"
                type="submit"
                name="submit"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Card>
    </>
  );
}

export default RegisterForm;
