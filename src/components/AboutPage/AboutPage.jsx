import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

//material UI
import CssBaseline from '@material-ui/core/CssBaseline';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
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
    backgroundColor: 'lightBlue',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function AboutPage() {

  const classes = useStyles();
  return (
    <>
<Grid container component="main" className={classes.root} className="Grid">
<CssBaseline />
{/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className="lala">
  <div className={classes.paper} >
    <Typography component="h1" variant="h5">
    <p>Technologies used:</p>
        <ul>
    <li>axios</li>
    <li>bcryptjs</li>
    <li>cookie-session</li>
    <li>dotenv</li>
    <li>express</li>
    <li>passport</li>
    <li>passport-local</li>
    <li>pg</li>
    <li>prop-types</li>
    <li>react</li>
    <li>react-dom</li>
    <li>react-redux</li>
    <li>react-router-dom</li>
    <li>react-scripts</li>
    <li>redux</li>
    <li>redux-logger</li>
    <li>redux-saga</li>
        </ul>
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

export default AboutPage;
