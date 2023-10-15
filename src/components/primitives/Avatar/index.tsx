import React from 'react';

const Avatar = ({ _src, style, ...props }: any) => {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        backgroundColor: 'var(--color-primary-2)',
        borderRadius: 999,
        ...style,
      }}
      {...props}
    />
  );
};

export { Avatar };
