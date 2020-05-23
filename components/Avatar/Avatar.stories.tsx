import React from 'react';

import img from '../../public/avatar.jpg';
import Avatar, { AvatarSize } from './Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const withDefault = (): React.ReactElement => (
  <Avatar src={img} />
);

export const withSize = (): React.ReactElement => (
  <div>
    <Avatar src={img} size={AvatarSize.Small} />
    <Avatar src={img} size={AvatarSize.Medium} />
    <Avatar src={img} size={AvatarSize.Large} />
  </div>
);
