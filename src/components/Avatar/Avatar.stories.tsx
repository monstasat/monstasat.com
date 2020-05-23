import React from 'react';

import Avatar from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const withDefault = (): React.ReactElement => (
  <Avatar src='/avatar.jpg' />
);

export const withSize = (): React.ReactElement => (
  <div>
    <Avatar src='/avatar.jpg' size='small' />
    <Avatar src='/avatar.jpg' size='medium' />
    <Avatar src='/avatar.jpg' size='large' />
  </div>
);
