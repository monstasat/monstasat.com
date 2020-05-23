import React from 'react';
import Head from 'next/head';

import Bio from 'components/Bio';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>monstasat</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Bio />
  </div>
);

export default Home;
