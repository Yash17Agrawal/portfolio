import React from 'react';
import { Paper, Typography, Link } from '@material-ui/core';

const AboutMe = () => {
  return (
    <React.Fragment>
      <h1> About Me</h1>
      <Typography>
        Hi, I am Yash a software engineer.      </Typography>
      <Typography>
        This website was a long pending task in my todo-list.
        I like to build software which does cool stuff or makes things easier and helps people in general.
        I will keep posting more details on this website in near future.
      </Typography>
      <Link href="/books">
        Books I read
      </Link>
    </React.Fragment>
  )
}

export default AboutMe;