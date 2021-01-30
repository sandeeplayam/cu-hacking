import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Clock from './Clock';

function Title(){
    const classes = useStyles();

    return(
        <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} maxWidth="me">
        <Typography variant="h2" component="h1" gutterBottom>
          COVID-19 Data Tracker
        </Typography>
        <Clock />
        <Typography variant="h2" component="h1" gutterBottom>
            Day:Hour:Minute
        </Typography>
        </Container>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'Column',
      minHeight: '10vh',
     
    },
    main: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },

  }));
   
export default Title;