import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './TaskList.css'

//material UI
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
        Maneena Xiong
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(5),
  },
  customBorderRadius: {
    borderRadius: 30,
    margin: theme.spacing(5),
    width: theme.spacing(100),
    height: theme.spacing(30),
  }
}));

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

  // const editNotes = () => {
  //     setEditMode(true)

  // }

  console.log('CHECKING TASKS REDUCERS', tasks);

  const classes = useStyles();
  return (
    <>
      <h1 className="tasklist">TaskList</h1>
      {/* <ul>
                {tasks.map(task =>
                    <li key={task.id}>{task.task_description}
                        <button onClick={() =>
                            dispatch({ type: "DELETE_TASK", payload: task.id })}>Delete</button>
                        {task.completed === null &&
                        <button onClick={ () => dispatch({ type: 'UPDATE_COMPLETE', payload: task.id })}>Complete</button>}
                        <br/>
                        
                            <label>My Adventure:</label>
                            <span>{task.notes}</span>
                        
                        <br/>
                        <span><button onClick={(event) => viewNote(event, task)}>view</button></span>

                    </li>
                )}

            </ul> */}
      {/* <div>
{tasks.map(task =>
            <Paper className={classes.customBorderRadius} elevation={15}>
        <Box p={6}>
          <Typography variant="h5">Task</Typography>
          <Typography>
                    <span key={task.id}>{task.task_description}
                        <button onClick={() =>
                            dispatch({ type: "DELETE_TASK", payload: task.id })}>Delete</button>
                        {task.completed === null &&
                        <button onClick={ () => dispatch({ type: 'UPDATE_COMPLETE', payload: task.id })}>Complete</button>}
                        <br/>
                        
                            <label>My Adventure:</label>
                            <span>{task.notes}</span>
                        
                        <br/>
                        <span><button onClick={(event) => viewNote(event, task)}>view</button></span>

                    </span>
          </Typography>
        </Box>
      </Paper>
     )} 
     </div> */}
      <div className="grid">
        {tasks.map(task =>
          <Card className={classes.root} key={task.id}>
            <CardActionArea onClick={(event) => viewNote(event, task)}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {task.name_task} 
                  <img className="img" src={task.task_img}></img>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {task.task_description}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  My Adventure:
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {task.notes}
                </Typography> */}
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
      </div>
      <Box mt={5}>

        <Copyright />
      </Box>
    </>
  )
}

export default TaskList;