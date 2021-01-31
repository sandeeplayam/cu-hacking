import React from 'react'
import styles from './Stats.module.css';

function Stats() {
    return (
        <div className={styles.main}>
            <div className={styles.caseStatBar}>Total Cases:</div>
            <div className={styles.deathStatBar}>Total Deaths: </div>
        </div>
    );
}

export default Stats