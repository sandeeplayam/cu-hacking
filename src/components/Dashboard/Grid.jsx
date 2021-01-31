import React from 'react';
import styles from './Grid.module.css';
import numeral from 'numeral';

function Grid({ countries }) {
  return (
    <div className={styles.grid}>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Grid;
