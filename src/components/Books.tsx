import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Container, AppBar, Toolbar, IconButton } from '@material-ui/core';
import booksImage from '../assets/book.jpg';
import './books.scss';
import HomeIcon from '@material-ui/icons/Home';

const Books = () => {
  const books = [
    {
      title: "The Monk who sold his ferrari",
      author: "Robin Sharma",
      url: "/linkedin or amazon url"
    },
    {
      title: "The Kite Runner",
      author: "Khaled Hoisine",
      url: "/linkedin or amazon url"
    },
    {
      title: "You can win",
      author: "shiv Khera",
      url: "/linkedin or amazon url"
    },
    {
      title: "Elon Musk",
      author: "Ashley Vanice",
      url: "/linkedin or amazon url"
    },
    {
      title: "Elon Musk",
      author: "Ashley Vanice",
      url: "/linkedin or amazon url"
    },
    {
      title: "Elon Musk",
      author: "Ashley Vanice",
      url: "/linkedin or amazon url"
    },


  ];

  return <React.Fragment>
    {/* <AppBar position="absolute"> */}
    <Toolbar >
      <IconButton href="/">
        <HomeIcon color="secondary"></HomeIcon>
      </IconButton>
    </Toolbar>
    {/* </AppBar> */}
    <Container className="books">
      <img src={booksImage}></img>
      Books I have read
      <List component="nav" aria-label="main mailbox folders">
        {
          books.map((book, index) => {
            return <ListItem button href={book.url}>
              <ListItemIcon>
                <MenuBookIcon />
              </ListItemIcon>
              <ListItemText primary={`${index + 1}. ${book.title} by ${book.author}`} />
            </ListItem>
          })
        }

        {/* <ListItem button href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItem> */}
      </List>

      {/* <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6640652079776002048" title=" Embedded post"></iframe> */}
    </Container>
  </React.Fragment>
}

export default Books;