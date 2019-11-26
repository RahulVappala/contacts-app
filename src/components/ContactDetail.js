import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import BusinessIcon from '@material-ui/icons/Business';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    paddintTop: '80px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardContent: {
    textAlign: 'left',
    padding: '0px',
  },
  addressAlign: {
      paddingLeft: '50px',
      paddingRight: '10px'
  },
  companyPadding: {
      paddingTop: '20px',
      paddingLeft: '50px',
      paddingRight: '10px'
  },
  title: {
    fontSize: '0.975rem',
    fontWeight: '600' 
  },
  contactDivInline: {
    textAlign: 'center',
   display: 'inline-block',
   paddingTop: '80px',
},

}));

export default function ContactDetail(item) {
    var selectedContact = item.item;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <div className = {classes.contactDivInline}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="contact" className={classes.avatar}>
            {selectedContact.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={selectedContact.name} className={classes.title}
      />
      <CardMedia
        className={classes.media}
        image="public/contact.jpg"
        title="contact"
      />
      <CardContent className={classes.cardContent}>
      <IconButton aria-label="Phone">
          <PhoneIcon />
        </IconButton>
        {selectedContact.phone}
      </CardContent>
      <CardContent className={classes.cardContent}>
      <IconButton aria-label="Email">
          <EmailIcon />
        </IconButton>
        {selectedContact.email}
      </CardContent>
      <CardContent className={classes.cardContent}>
      <IconButton aria-label="Website">
      <LanguageIcon/>
      </IconButton>
        {selectedContact.website}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.cardContent}>
        <div>
        <IconButton aria-label="Address">
          <LocationCityIcon/>
          </IconButton>
          {selectedContact.address.suite + ", " + selectedContact.address.street + ", "}</div>
          <div className={classes.addressAlign}>{selectedContact.address.city + ", " + selectedContact.address.zipcode}</div>
          
        </CardContent>
        <div className={classes.companyPadding}></div>
        <CardContent className={classes.cardContent}>
        <div>
        <IconButton aria-label="Company">
          <BusinessIcon/>
          </IconButton>
          {selectedContact.company.name }</div>
          <div className={classes.addressAlign}>{selectedContact.company.bs} </div>
          <div className={classes.companyPadding}>{selectedContact.company.catchPhrase}</div>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}
