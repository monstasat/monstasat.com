import React from 'react';

import Avatar from '../Avatar';
import Emoji from '../Emoji';

import styles from './Bio.module.css';

const Bio: React.FC = () => (
  <section className={styles.container}>
    <Avatar size='large' src='/avatar.jpg' />
    <p>
      I am an enthusiastic frontend developer with some hardware background.
      Doing my job with
      {' '}
      <Emoji kind='love' />
      {' '}
      and passion.
    </p>
    <p>
      Currently work on awesome projects at Yandex.Taxi
      <Emoji kind='taxi' />
    </p>
  </section>
);

export default Bio;
