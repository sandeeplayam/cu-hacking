import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <Dashboard />
      </div>
    );
  }
}

export default App;
