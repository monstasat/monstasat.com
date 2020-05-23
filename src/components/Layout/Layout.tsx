import React from 'react';

import Header from '../Header';

import styles from './Layout.module.css';

export type Props = React.PropsWithChildren<{}>;

const Layout: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </>
  );
};

export default Layout;
