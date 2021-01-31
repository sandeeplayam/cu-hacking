import React from 'react';
import {Title, Description, AdvancedStatsButton, Stats} from '../components'
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.backing}>
      <Title/>
      <br/>
      <br/>
      <Stats/>
      <br/>
      <br/>
      <AdvancedStatsButton />
      <Description />
    </div>
  ); //return
}

export default Home;
