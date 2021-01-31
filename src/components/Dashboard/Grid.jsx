import React from 'react';
import styles from './Grid.module.css';

function Grid({ countries }) {
  return (
    <div className={styles.grid}>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{cases}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Grid;
