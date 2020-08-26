import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { MEDIA_URLS } from '../constants/common';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './dashboard.scss';
import { Button, Link } from '@material-ui/core';
import logo from '../assets/coming_soon.gif'
import AboutMe from './AboutMe';
import AnimatedScreen from './AnimatedScreen/AnimatedScreen';
import GetAppIcon from '@material-ui/icons/GetApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
var profilePic = require('../assets/profilephoto.JPG');

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      className="panel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}
interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '89%'
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: '100vh',
  //   overflow: 'auto',
  // },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example">
            <LinkTab label="Profile" href="/drafts" {...a11yProps(0)} />
            <LinkTab label="About Me" href="/trash" {...a11yProps(1)} />
            <LinkTab label="Blog" {...a11yProps(2)} />
            <LinkTab label="Research" {...a11yProps(2)} />
          </Tabs>
        </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxWidth="lg" className={`${classes.container} profile`}>
          {/* <AnimatedScreen></AnimatedScreen> */}
          <img src={profilePic}></img>
          <Button variant="contained" startIcon={<GetAppIcon />}>

            Download Resume
          </Button>
          <div className="external">
            <a href={MEDIA_URLS.TWITTER} aria-label="Twitter"   >
              <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
            </a>

            <a href={MEDIA_URLS.GITHUB} aria-label="Github"   >
              <i className="fab fa-github fa-2x" aria-hidden="true"></i>
            </a>

            <a href={MEDIA_URLS.LINKEDIN} aria-label="Linkedin"   >
              <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
            </a>
            {/* <a target="_blank" href="https://www.instagram.com/uj00007/"
              style="color: inherit;"><i className="fab fa-instagram"></i></a> */}
            <a href={MEDIA_URLS.STACKOVERFLOW} aria-label="Stackoverflow"   >
              <i className="fab fa-stack-overflow fa-2x" aria-hidden="true"></i>
            </a>

            <a href={MEDIA_URLS.MEDIUM} aria-label="Medium"   >
              <i className="fab fa-medium fa-2x" aria-hidden="true"></i>
            </a>
          </div>

          <h1 >Yash Agrawal</h1>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <img src={logo}></img> */}
        <AboutMe></AboutMe>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Container maxWidth="lg" className={`${classes.container}`}>
          Original Page Coming Soon !!!!
          <Link href="https://yash17blog.wordpress.com">Wordpress</Link>
        </Container>
      </TabPanel>
      <Box pt={4}>
      </Box>
    </div>
  );
}