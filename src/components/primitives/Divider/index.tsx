import React from 'react';

const Divider = ({ style }: any) => {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-primary-border',
        height: 1,
        ...style,
      }}
    />
  );
};

export { Divider };
