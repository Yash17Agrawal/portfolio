import React from 'react';
import { Typography, Link, IconButton, Icon, Button, SvgIcon } from '@material-ui/core';
import { MEDIA_URLS } from '../constants/common';
import dp from '../assets/profilephoto.jpg';
import './aboutMe.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import StackoverflowIcon from '../assets/stackoverflow.svg';
import MediumIcon from '../assets/medium.svg';
import NewIcon from '../SOIcon';


// const stackoverflow = (
//   <Icon>
//     <img alt="edit" src={StackoverflowIcon} />
//   </Icon>
// );
const AboutMe = () => {
  // // Sets target="_blank" rel="noopener noreferrer" on external links
  // const handleExternalLinks = () => {
  //   const allLinks = Array.from(document.querySelectorAll('a'));
  //   if (allLinks.length > 0) {
  //     allLinks.forEach(link => {
  //       if (link.host !== window.location.host) {
  //         link.setAttribute('rel', 'noopener noreferrer');
  //         link.setAttribute('target', '_blank');
  //       }
  //     });
  //   }
  // };

  // useEffect(() => {
  //   handleExternalLinks();
  // }, []);

  return (
    <div className="about-me">
      <section className="left">
        <h1> About Me</h1>
        <Typography>
          Hi, I am Yash a software engineer.      </Typography>
        <Typography>
          This website was a long pending task in my todo-list.
          I like to build software which does cool stuff or makes things easier and helps people in general.
          I will keep posting more details on this website in near future.
      </Typography>
        {/* <Button variant="contained" startIcon={<GetAppIcon />}>

        Download Resume
          </Button> */}
        <div className="external">
          <IconButton href={MEDIA_URLS.TWITTER}>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          <IconButton href={MEDIA_URLS.GITHUB}>
            <GitHubIcon></GitHubIcon>
          </IconButton>
          <IconButton href={MEDIA_URLS.LINKEDIN}>
            <LinkedInIcon />
          </IconButton>
          {/* <Button startIcon={stackoverflow}>
          </Button> */}
          <IconButton href={MEDIA_URLS.STACKOVERFLOW} className="stack">
            <img src={StackoverflowIcon}></img>
          </IconButton>
          <IconButton href={MEDIA_URLS.MEDIUM} className="">
            <img src={MediumIcon}></img>
          </IconButton>
        </div>
        <Link href="/books">
          Books I read
      </Link>
      </section>
      <section className="right">
        <img src={dp} className="dp">
        </img>
      </section>
    </div>
  )
}

export default AboutMe;