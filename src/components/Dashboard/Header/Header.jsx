import React from 'react';
import CountryForm from './CountryForm';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.dashboard__header}>
      <h1>COVID-19 Tracker</h1>
      <CountryForm />
    </div>
  );
}

export default Header;
