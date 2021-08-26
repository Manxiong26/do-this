import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './TaskList.css'

//material UI
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { useStyles } from "../classes";

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      {' '}
        Maneena Xiong
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function TaskList() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_TASK' });
  }, []);

  const tasks = useSelector(store => store.task)

  const viewNote = (event, task) => {
    event.preventDefault();
    console.log('Adding Notes');
    history.push(`/note/${task.id}`)
  }

  console.log('CHECKING TASKS REDUCERS', tasks);

  const classes = useStyles();

  return (
    <>
<Typography variant="h4" className={classes.title}>
                My Adventures
            </Typography>
    <Grid container spacing={2} >
      <Grid container item xs={12} spacing={3}>  
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {tasks.map(task =>
          <Card className={classes.card} key={task.id} >
            <CardActionArea onClick={(event) => viewNote(event, task)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {task.name_task} 
                  <img className={classes.image} src={task.task_img}></img>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {task.task_description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="outlined" color="primary" onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })}>
                Delete
        </Button>
              {task.completed === null &&
                <Button size="small" variant="outlined" color="primary" onClick={() =>
                  dispatch({ type: 'UPDATE_COMPLETE', payload: task.id })}>
                  Complete
        </Button>}
              {task.notes === null &&
                <Button size="small" variant="outlined" color="primary" onClick={(event) => viewNote(event, task)}>
                  Add Notes
        </Button>}
            </CardActions>
          </Card>
        )}
        </Box>
      </Grid>
    </Grid>
    <Box mt={5}>
          <Copyright />
        </Box>
    </>
  )
}

export default TaskList;