import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'components/Layout';

import './global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;400&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
