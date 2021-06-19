import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './TaskGenerator.css'


//material UI

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Maneena Xiong
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(30),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
}));


function TaskGenerator() {

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);


  useEffect(() => {
    dispatch({ type: 'FETCH_RANDOM_TASK' });

  }, []);

  const task = useSelector((store) => store.randomTaskReducer)
  console.log('CHECKING TASK IN THE TASK', task);
  console.log('CHECKING NEW TASK!!!!!!!', task);

  const handleAccept = (action) => {

    dispatch({ type: 'ADD_TASK', payload: task })
    //dispatch({ type: 'FETCH_RANDOM_TASK' })
    dispatch({ type: 'FETCH_TASK' });
    history.push('/taskList')
  }

  const handleTask = () => {
    dispatch({ type: 'FETCH_RANDOM_TASK' })

  }

  const classes = useStyles();
  return (
    <>
      <Grid container component="main" className={classes.root} className="Grid">
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} key={task.id}>
            <Typography component="h1" variant="h5">
              Welcome, {user.username}! <br />
            Today's Task
          </Typography>
          <img  className="img" src={task.task_img}></img>
            <Typography component="h1" variant="h5">
              {task.name_task}:<br /> {task.task_description}
            </Typography>
            <Typography component="h1" variant="h5">
              Address is:<br /> {task.location_id}
            </Typography>
            <form className={classes.form} noValidate onSubmit={handleAccept}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Accept
            </Button>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
                onClick={handleTask}
              >
                Reject
            </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default TaskGenerator;