import React from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route
            path="/"
            render={() => (
              <div>
                <h1>404 Error</h1>
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
