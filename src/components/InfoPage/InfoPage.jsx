// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

import React from 'react';

//material UI
import {
  Typography,
  Card,
} from '@material-ui/core'
import { useStyles } from '../classes';

function InfoPage() {

  const classes = useStyles();
  return (
    <>
      <Card className={classes.loginForm}>
        <form className={classes.form} >
          <Typography className={classes.loginTitle} variant="h4">
            What is DoThis?
          </Typography>
          <div className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
            <p>This app will deploy random tasks for users to do as much as they want by
        continuing to either accept a task or reject it to receive a new task.</p>
              <p>User's can also write down a little memoir about what they did on certain task and
        check off the task when completed.</p>
              <p>User's will also be able to delete a task if they choose not to do said task after accepting
              task or they just don't want to remember that day.
        </p>
            </Typography>
          </div>
        </form>
      </Card>
    </>
  );
}

export default InfoPage;
