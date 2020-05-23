import React from 'react';

import styles from './Emoji.module.css';

const EMOJI = {
  love: '❤️',
  taxi: '🚖',
};

export type Props = {
  kind: keyof typeof EMOJI;
  label?: string;
};

const Emoji: React.FC<Props> = (props: Props) => {
  const { kind, label = kind } = props;

  return (
    <span
      aria-label={label}
      className={styles.emoji}
      role='img'
    >
      {EMOJI[kind]}
    </span>
  );
};

export default Emoji;
