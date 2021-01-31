import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import styles from './DetailBox.module.css';

function DetailBox({ title, cases, total, ...props }) {
  return (
    <Card onClick={props.onClick} className={styles.detailBox}>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2 className={styles.detailBox__cases}>{cases}</h2>
        <Typography color="textSecondary">
          <p className={styles.detailBox__total}>{total} Total</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DetailBox;
