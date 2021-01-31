import React from 'react'
import {useHistory} from 'react-router-dom';
import styles from './AdvancedStatsButton.module.css';

function AdvancedStatsButton() {
    const history = useHistory();
    
    const handleOnClick = () => history.push('/Dashboard');
    
    return (
        <button className={styles.ASButton} text='AStext' onClick={handleOnClick} >
        See More Advanced COVID-19 Statistics 
        </button>
    );
}

export default AdvancedStatsButton