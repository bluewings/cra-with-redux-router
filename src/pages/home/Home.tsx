import React from 'react';
import styles from './Home.module.scss';

export const uriPattern = '/home';

const Home: React.FC = (props: any) => {
  return (
    <div className={styles.root}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
