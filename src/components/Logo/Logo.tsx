import React from 'react';
import Link from 'next/link';

import styles from './Logo.module.css';

const Logo: React.FC = () => (
  <span className={styles.logo}>
    <Link href='/'>
      <a>
        monstasat
      </a>
    </Link>
  </span>
);

export default Logo;
