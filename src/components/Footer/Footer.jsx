import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

import Link from '@material-ui/core/Link';
import {
  Typography,
  Card,
  Box,
} from '@material-ui/core'

function Copyright() {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://manxiong26.github.io/">
        Maneena Xiong
      </Link>{' '}
      {new Date().getFullYear()}
      {' '}
    </Typography>
  );
}

function Footer() {
  return <footer>
    <Box mt={5}>
  <Copyright />
</Box></footer>;
}

export default Footer;
