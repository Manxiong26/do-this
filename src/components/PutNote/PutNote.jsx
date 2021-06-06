import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './PutNote.css'

//material UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


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
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function AddNote() {

  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();



  const [editMode, setEditMode] = useState(false)
  const [note, setNote] = useState('');

  const task = useSelector(store => store.note)
  // console.log('CHECKING THE TASK NOTE!!!', task);

  let { id } = useParams();

  useEffect(() => {
    // console.log('In useEffect param', id);
    dispatch({ type: 'FETCH_NOTE', payload: id })

  }, [])

  const handleEdit = () => {
    //Turn on edit Mode
    setEditMode(true)

    //Set values in state from our book reducer
    setNote(task.notes);
  }

  const saveEdit = (event) => {
    event.preventDefault();
    const updatedNote = {
      id: task.id, //user cant edit, getting form reducer
      notes: note, // Take the there from state, user may have changed
    }

    // console.log('UPDATED NOTE INFO', updatedNote);
    dispatch({ type: 'UPDATE_NOTE', payload: updatedNote })

    // Turn off editMode
    setEditMode(false)

    //Navigate back, because this page wont refresh data from server
    //history.push('/taskList');

  }

  const goBack = () => {
    console.log('Go Back taskList');
    history.push('/taskList')
  }

  return (
    <>
      {/* {JSON.stringify(note)} */}
      {/* <form onSubmit={saveEdit}>
            

            { task  && editMode ?
                <div>
                    <label>Note:</label>
        <form className={classes.root} noValidate autoComplete="off">
                    <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Memoir"
          variant="outlined"
          value={note}
          type="text" 
          onChange={(event) => setNote(event.target.value)} 
        /></form> */}
      {/* <input 
                        /> */}
      {/* </div>
                :
                <div>
                    <label>Note: </label>
                    <span>{task.notes}</span>
                </div>
            }
            {editMode === false &&
            <Button size="small" color="primary"
                onClick={handleEdit}>
                  Comment
                </Button>
                // <button onClick={handleEdit}>comment</button>
            }
            {editMode &&
            <Button size="small" color="primary"
            type="submit">
              Save
            </Button>
                // <button type="submit">Save</button>
            }
            
            </form>
            <Button size="small" color="primary"
                onClick={goBack}>
                  Cancel
                </Button> */}
      {/* <button onClick={goBack}>Cancel</button> */}

      {/* <form className={classes.root} noValidate autoComplete="off">

            </form> */}


      <Grid container component="main" className={classes.root} className="Grid">
        <CssBaseline />
        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

          <form className={classes.form} noValidate onSubmit={saveEdit}>

            {task && editMode ?
              <div>

                <form className={classes.root} noValidate autoComplete="off">
                  <TextField
                    id="outlined-multiline-static"
                    label="Memoir"
                    multiline
                    rows={5}

                    defaultValue=""
                    variant="outlined"
                    value={note}
                    type="text"
                    onChange={(event) => setNote(event.target.value)}
                  /></form>
              </div>
              :
              <div>

                <Box className="box">{task.notes}</Box>
              </div>
            }
            {editMode === false &&
              <Button size="small" variant="outlined" color="primary"
                onClick={handleEdit}>
                Add/Edit
                </Button>
              // <button onClick={handleEdit}>comment</button>
            }
            {editMode &&
              <Button size="small" variant="outlined" color="primary"
                type="submit">
                Save
            </Button>
              // <button type="submit">Save</button>
            }
            <Button size="small" variant="outlined" color="primary"
              onClick={goBack}>
              Cancel
                </Button>
          </form>

          <Box mt={5}>
            <Copyright />
          </Box>

        </Grid>
      </Grid>
    </>
  )
}

export default AddNote;