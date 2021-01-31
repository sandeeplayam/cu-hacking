import React from 'react'
import {useHistory} from 'react-router-dom';
import styles from './AdvancedStatsButton.module.css';

function AdvancedStatsButton() {
    const history = useHistory();
    
    const handleOnClick = () => history.push('/Dashboard');
    
    return (
        <div className={styles.main}>
        <button className={styles.ASButton} onClick={handleOnClick} >
        <span>See More COVID-19 Stats <strong>>></strong></span>
        </button>
        </div>
    );
}

export default AdvancedStatsButton