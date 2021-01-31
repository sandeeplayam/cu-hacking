import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import styles from './Description.module.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Description() {
  return (
    <div className={styles.root}>
      <CssBaseline />
      <Container component="main" className={styles.main} maxWidth="md">
        <h3 className={styles.descTitle}>
          COVID-19 Data Tracker
        </h3>
        <p className={styles.descContents}>
          {'Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.'}
          <br/>
          <br/>
          {"Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness."}
          <br/>
          <br/>
          {'The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. '}
          <br/>
          <br/>
          {'The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).'}
        </p>
        <Typography variant="body1">From the World Health Organization  </Typography>
        <a href= "https://www.who.int/health-topics/coronavirus#tab=tab_1">Visit WHO website for more information. </a>
      </Container>
      

      <footer className={styles.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Description;