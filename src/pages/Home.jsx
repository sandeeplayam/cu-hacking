import React from 'react';
import Button from '@material-ui/core/Button';
import Description from '../components/Home/Description/Description';

function Home() {
  return (
    <div>
      <h1>COVID BBY</h1>
      <button> Hello </button>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <Description />
    </div>
  ); //return
}
export default Home;
