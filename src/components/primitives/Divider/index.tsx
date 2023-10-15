import React from 'react';

const Divider = ({ style }: any) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-neutral-8',
        height: 1,
        ...style,
      }}
    />
  );
};

export { Divider };
