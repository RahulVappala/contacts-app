import React, { useState } from 'react';
import { InputBase, makeStyles } from '@material-ui/core';
import {fade} from '@material-ui/core/styles';
import { Search as SearchIcon } from '@material-ui/icons';
import SearchItem from './SearchItem';


const useStyles = makeStyles(theme => ({
    icon: {
        color: '#fff'
      },
      search: {
        position: 'relative',
        textAlign: 'center',
        width: '100%',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
         marginRight: theme.spacing(2),
         marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(0),
          width: 'auto',
        },
      },
      searchIcon: {
        position: 'absolute',
        width: theme.spacing(7),
        height: '100%',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      searchDivInline: {
           textAlign: 'left',
          display: 'inline-block',
          paddingTop: '80px',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
      },
}));

const Search = ({searchData,onSuggestionClick}) => {
    const classes = useStyles();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    //Cascade the suggestion click to the parent.
    const handleSuggestionClick = contact => e => {
        console.log("Suggestion clicked in Search.js",contact);
        setSuggestions(null);
        setQuery('');
        onSuggestionClick(contact);
      };
    
      // Refine suggestions based on the search query.
    const handleQueryChange = e => {
        let value = e.target.value;
        setQuery(value);
    
        if (!value) {
          setSuggestions(null);
          return;
        }
    
        // Search the name, email and phone number.
        const results = searchData
          ? searchData
              .filter(x => 
                x.name.toLowerCase().includes(value.toLowerCase())
                ||
                x.email.toLowerCase().includes(value.toLowerCase())
                ||
                x.phone.includes(value)
                )
          : null;
    
        setSuggestions(results);
      };

    return (
        <div className={classes.searchDivInline}>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search name, email or phone)..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleQueryChange}
              value={query}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

            {suggestions && suggestions.length > 0 && (
            <div>
            {suggestions.map((s, index) => (
                <div key={index} onClick={handleSuggestionClick(s)}>
                <SearchItem item={s}/>    
                </div>
            ))}
            </div>
            )}
        </div>

    );
};

export default Search;