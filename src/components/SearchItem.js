import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      
    },
    avatar: {
        backgroundColor: red[500],
      },
      listItemStyle: {
        paddingBottom: '0px',
        paddingTop: '0px',
      }
  }));

const SearchItem = (item) => {
    const classes = useStyles();
    return(
        <List className={classes.root}>
      <ListItem className={classes.listItemStyle}>
        <ListItemAvatar>
        <Avatar aria-label="contact" className={classes.avatar}>
            {item.item.name.charAt(0)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.item.name} secondary={item.item.phone} />
      </ListItem>
    </List>
    );
};

export default SearchItem;