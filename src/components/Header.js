import React from 'react';
import { Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1
    }
  }));

const Header = () => {
    const classes = useStyles();
    return(
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Contacts
                </Typography>
            </Toolbar>
    );
};

export default Header;