import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from '../Copyright';
import { Toolbar } from '@material-ui/core';
import './stickyFooter.scss';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className="footer-container">
        <Copyright />
        <Toolbar className="options">
        </Toolbar>
      </Container>
    </footer>
  );
}