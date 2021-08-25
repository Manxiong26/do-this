import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Grid,
  Box,
  Button,
  Divider,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useStyles } from "../classes";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
      {/* <Grid container component="main" className={classes.root} className="Grid">
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
      </Grid> */}


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
            color="primary"
            className={classes.submit}
            >
              Accept
            </Button>       
              <Button
                variant="outlined"
                color="primary"
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