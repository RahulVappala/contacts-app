import React, { useState} from 'react';
import { Drawer, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import drawer from '@material-ui/core/Drawer';

const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.up('lg')]: {
        width: drawer.size,
        flexShrink: 0
      }
    },
    drawer: {
      width: drawer.size
    }
  }));

  // Content inside the side bar.
  const DrawerContent = ({ searchData, onSuggestionClick }) => {
    const [contact, setContact] = useState();

    // Invoke the parent contact selection.
    const handleSuggestionClick = suggestion => {
        console.log("Suggestion clicked in DrawerContent",suggestion);
        onSuggestionClick(suggestion);
      };

    return(
        <div>
        <Search searchData={searchData} onSuggestionClick = {handleSuggestionClick}/>
        </div>
    );
     };


const Sidebar = ({ searchData, onSuggestionClick }) => {
    const classes = useStyles();

    const handleSuggestionClick = suggestion => {
        console.log("Suggestion clicked in SideBar.js",suggestion);
        onSuggestionClick(suggestion);
      };

    return (
      <nav className={classes.root}>
          <Drawer classes={{ paper: classes.drawer }} variant="permanent">
            <DrawerContent 
              searchData={searchData} 
              onSuggestionClick={handleSuggestionClick}
            />
          </Drawer>
      </nav>
    );
  };
  
  export default Sidebar;