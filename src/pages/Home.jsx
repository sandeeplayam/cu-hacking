import React from 'react';
import {Title, Description, AdvancedStatsButton} from '../components'
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.backing}>
      <Title/>
      <Description />
      <AdvancedStatsButton />
    </div>
  ); //return
}

export default Home;
