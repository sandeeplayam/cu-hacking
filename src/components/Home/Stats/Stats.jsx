import React, {useEffect, useState} from 'react'
import styles from './Stats.module.css';

function Stats() {
    const [statInfo, setStatInfo] = useState([]);
    
    useEffect(() => {
         fetch('https://disease.sh/v3/covid-19/all')
            .then((response) => response.json())
            .then((data) => {
              setStatInfo(data);
            });
    }, []);


    return (
        <div className={styles.main}>
            <div className={styles.caseStatBar}> <p>Total Cases: {statInfo.cases}</p></div>
            <div className={styles.deathStatBar}><p>Total Deaths: {statInfo.deaths}</p> </div>
        </div>
    );
}

export default Stats