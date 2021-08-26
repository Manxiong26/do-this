import React, { useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../classes";

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
      <Typography variant="h4" className={classes.welcome}>
        Welcome, {user.username}
      </Typography>
      <Grid container direction="column">
        <Grid item xs={12} sm={12} lg={12} >
          <div className={classes.pageMargin}>
            <Typography variant="h5" className={classes.title}>
              Adventure of the Day
            </Typography>
            <p key={task.id}>
              <Typography variant="h6" className={classes.imageInfo}>
              <b>{task.name_task}</b>
            </Typography>
              <img className={classes.image} src={task.task_img}></img>
            </p>
            <Typography variant="body2" className={classes.imageInfo}>
              <b>{task.task_description}</b>
            </Typography>
            <Typography variant="body2" className={classes.imageInfo}>
              Address: {task.location_id}
            </Typography>
            <form className={classes.center} onSubmit={handleAccept}>
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                className={classes.submit}
              >
                Accept
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.marginLeft}
                onClick={handleTask}
              >
                Reject
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default TaskGenerator;