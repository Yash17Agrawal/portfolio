import React from 'react';
import { Link, Typography } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href={'/'}>
        Yash
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      All Rights Reserved
    </Typography>
  );
}

export default Copyright;