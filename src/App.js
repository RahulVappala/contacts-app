import React, {useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header';
import ContactDetail from './components/ContactDetail';
import SideBar from './components/SideBar';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
  icon: {
      color: '#fff'
    },
    searchDiv: {
      textAlign: 'left',
      width: '400px',
  },
  contactDiv: {
    textAlign: 'center',
    paddingTop: '20px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  }));

function App() {

  const [contactData, setContactData] = useState();
  const [contact, setContact] = useState();
  const classes = useStyles();
  
  useEffect(()=>{
    // Fetch the users contact data from the below API.
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(jsonOutput => {
          setContactData(jsonOutput);
        })
        .catch((error)=> {console.log("Error invoking api. "+error)})

        setContact(null);
  },[])

  // Set the selected contact to display the contact detail.
  const handleSuggestionClick = suggestion => {
    console.log("Suggestion clicked in App.js",suggestion);
    setContact(suggestion);
  };

  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar}>
      <Header/>
      </AppBar>  
      <SideBar searchData={contactData} onSuggestionClick = {handleSuggestionClick} />
      <main className={classes.content}>
      {contact && (
        <ContactDetail 
          item={contact} 
        />
      )}  
      </main>
    </div>
  );
}

export default App;
