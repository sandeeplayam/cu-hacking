import React from 'react';
import { Header, DetailBox, WorldMap } from '../components';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div>
      <div className={styles.dashboard__header}>
        <Header />
      </div>
      <div className={styles.dashboard__details}>
        <DetailBox title="Infected" cases="0" total={`0 total`} />
        <DetailBox title="Recovered" cases="0" total={`0 total`} />
        <DetailBox title="Deaths" cases="0" total={`0 total`} />
      </div>
      <WorldMap />
      {/* Header */}
      {/* Title + Select input dropdown field */}

      {/* Info */}
      {/* Info */}
      {/* Info */}

      {/* Table */}
      {/* Chart */}

      {/* leaflet map */}
    </div>
  );
}

export default Dashboard;
