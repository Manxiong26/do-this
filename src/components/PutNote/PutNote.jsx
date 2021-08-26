import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

//material UI
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Card from '@material-ui/core/Card';
import { useStyles } from "../classes";


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

  }

  const goBack = () => {
    console.log('Go Back taskList');
    history.push('/taskList')
  }

  return (
    <>
      <Card className={classes.loginForm}>
        <form className={classes.form} noValidate onSubmit={saveEdit}>
          <Typography className={classes.loginTitle} variant="h4">
            Adventure Memoirs
          </Typography>
          <div className={classes.cardContent}>
            <CardContent className={classes.card} >
              {/* conditional rendering to show either the note or to show an input box for users to write */}
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
                  <Box className="box" flexWrap="wrap">{task.notes}</Box>
                </div>
              }
            </CardContent>
            <CardActions className={classes.card} >
              {/* if editmode is trigger users will see a comment box to edit the note */}
              {editMode === false &&
                <Button size="small" variant="outlined" color="primary"
                  onClick={handleEdit}>
                  Add/Edit
                </Button>
              }
              {editMode &&
                <Button size="small" variant="outlined" color="primary"
                  type="submit">
                  Save
                </Button>
              }
              <Button size="small" variant="outlined" color="primary"
                onClick={goBack}>
                Cancel
              </Button>
            </CardActions>
          </div>
        </form>
      </Card>
    </>
  )
}

export default AddNote;