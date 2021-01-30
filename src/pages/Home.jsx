import React from 'react';
import Button from '@material-ui/core/Button';
import {Title, Description} from '../components'

function Home() {
  return (
    <div>
     
      <Title/>
      <Description />
      <Button variant="contained" color="primary">
        See Advanced
      </Button>
    </div>
  ); //return
}
export default Home;
