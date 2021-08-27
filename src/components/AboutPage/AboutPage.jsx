import React from 'react';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

//material UI
import {
  Typography,
  Card,
} from '@material-ui/core'
import { useStyles } from '../classes';

function AboutPage() {

  const classes = useStyles();
  return (
    <>
      <Card className={classes.loginForm}>
        <form className={classes.form} >
          <Typography className={classes.loginTitle} variant="h4">
            Technologies Used
          </Typography>
          <div className={classes.cardContent}>
            <Typography variant="body2" color="textSecondary" component="p">
              <ul>
                <li>Express</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node</li>
                <li>PostgreSql</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Material UI</li>
                <li>Passport.js</li>
                <li>and etc.</li>
              </ul>
            </Typography>
          </div>
        </form>
      </Card>
    </>
  );
}

export default AboutPage;
