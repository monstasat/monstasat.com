import React from 'react';

import SEO from 'components/SEO';
import Bio from 'components/Bio';

const Home: React.FC = () => (
  <div>
    <SEO
      title='Alexander Yanin - enthusiastic frontend developer'
      keywords={['frontend', 'nextjs', 'react']}
    />
    <Bio />
  </div>
);

export default Home;
