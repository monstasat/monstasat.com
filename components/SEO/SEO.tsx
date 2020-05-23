import React from 'react';
import Head from 'next/head';

import metadata from 'config/metadata';

export type Props = {
  author?: string;
  title?: string;
  description?: string;
  keywords?: Array<string>;
  language?: string;
};

const SEO: React.FC<Props> = (props: Props) => {
  const {
    author = metadata.author.name,
    description = metadata.description,
    title = metadata.title,
    keywords,
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={author} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {keywords && keywords.length > 0 && (
        <meta name='keywords' content={keywords.join(', ')} />
      )}
    </Head>
  );
};

export default SEO;
