import React from 'react';
import classNames from 'classnames';

import styles from './Avatar.module.css';

export type Props = {
  alt?: string;
  src: string;
  className?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large';
};

const getSizeClassName = (size?: Props['size']): string | undefined => {
  switch (size) {
    case 'small':
      return styles.sizeSmall;
    case 'large':
      return styles.sizeLarge;
    default:
      return undefined;
  }
};

const Avatar: React.FC<Props> = (props: Props) => {
  const {
    alt = 'avatar',
    src,
    size,
    style,
  } = props;

  const className = classNames(
    styles.avatar,
    getSizeClassName(size),
    props.className,
  );

  return (
    <div
      className={className}
      style={style}
    >
      <img
        className={styles.image}
        alt={alt}
        src={src}
      />
    </div>
  );
};

export default Avatar;
