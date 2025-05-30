import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner}></div>
    <p className={styles.text}>Loading...</p>
  </div>
);

export default LoadingSpinner;