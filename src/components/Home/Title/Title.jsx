import React from 'react';
import Clock from './Clock';
import styles from './Title.module.css';

function Title(){
    //const classes = useStyles();

    return(
      <div className={styles.main}>
        <div className={styles.title}>
           COVID-19 Stat Tracker
        </div>
        
        <div className={styles.clock}>
          <Clock/>
        </div>
      </div>
        
    );
}



   
export default Title;