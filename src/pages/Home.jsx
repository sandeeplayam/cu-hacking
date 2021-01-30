import React from 'react';
import Button from '@material-ui/core/Button';
import StickyFooter from '../components/Home/StickyFooter';

function Home() {
  return (
    <div>
      <h1>COVID BBY</h1>
      <button> Hello </button>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <StickyFooter />
    </div>
  ); //return
}
export default Home;
