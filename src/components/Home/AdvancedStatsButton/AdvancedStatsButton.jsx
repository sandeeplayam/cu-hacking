import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';

function AdvancedStatsButton() {
    const history = useHistory();
    const handleOnClick = () => history.push('/Dashboard');
    return (
        <div>
        <Button variant="contained" color="primary"  onClick={handleOnClick}>
          See Advanced
        </Button>
        </div>
    );
}

export default AdvancedStatsButton