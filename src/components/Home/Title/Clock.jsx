import React from 'react';

function Clock() {
    var date = new Date();
    const element = (
      <div>
        <h2>It is {date.toDateString() + ", " + date.getUTCHours() + ":" + date.getUTCMinutes()}.</h2>
      </div>
    );
    return element;
    //ReactDOM.render(element, document.getElementById('root'));
  }
  
  //setInterval(tick, 1000);

  export default Clock;