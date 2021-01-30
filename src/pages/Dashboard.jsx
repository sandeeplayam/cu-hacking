import React from 'react';
import { CountrySelector, Cards, Graph } from '../components';

function Dashboard() {
  return (
    <div>
      <CountrySelector />
      <Graph />
      <Cards />
    </div>
  );
}

export default Dashboard;
