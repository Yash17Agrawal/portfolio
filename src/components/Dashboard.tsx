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
import { Button, Link, IconButton } from '@material-ui/core';
import logo from '../assets/coming_soon.gif'
import AboutMe from './AboutMe';
import background from '../assets/background.jpg';
import AnimatedScreen from './AnimatedScreen/AnimatedScreen';
import YA from '../assets/YA.png';
var profilePic = require('../assets/profilephoto.jpg');

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  classes?: string
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
          <Typography className={`${props.classes}`}>{children}</Typography>
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
    flexDirection: 'column',
    height: '100%'
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
      {/* <AppBar position="absolute" className={clsx(classes.appBar)}> */}
      <Toolbar className={classes.toolbar}>
        {/* <IconButton aria-label="home" src>
            <YA />
          </IconButton> */}
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example">
          <LinkTab label="Profile" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="About Me" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Projects" {...a11yProps(2)} />
        </Tabs>
      </Toolbar>
      {/* </AppBar> */}
      <TabPanel value={value} index={0} classes="profile">
        <Typography>
          Hi, my name is
           <h1>Yash Agrawal</h1>
          <h2>I build things in softwares</h2>
          <h3>I'm a software engineer from Jaypee Noida, Btech with experience of working for multple roles in various projects from scracth till production and have been part of enterprise application development as well </h3>
          <Button variant="contained">
            <a href="mailto:yash17agrawal@gmail.com">Get In Touch</a></Button>
        </Typography>
        <img src={background} className="dashboard-bg"></img>
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
    </div>
  );
}