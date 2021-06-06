import React from 'react';

//material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Maneena Xiong
      </Link>{' '}
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
    backgroundColor: 'theme.palette.secondary.main',
  },
  avatar: {
    margin: theme.spacing(30),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function InfoPage() {

  const classes = useStyles();
  return (
    <>

      <Grid container component="main" className={classes.root} className="Grid">
        <CssBaseline />
        {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Info on how the app works!
    </Typography>
            <Typography component="h1" variant="h5">
              <p>This app will deploy random tasks for users to do as much as they want by
        continuing to either accept a task or reject it to receive a new task.</p>
              <p>User's can also write down a little memoir about what they did on certain task and
        check off the task when completed.</p>
              <p>User's will also be able to delete a task if they choose not to do said task after accepting
              task.
        </p>
            </Typography>

            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default InfoPage;
