import React from 'react';
import { AppProps } from 'next/app';

import './global.css';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
