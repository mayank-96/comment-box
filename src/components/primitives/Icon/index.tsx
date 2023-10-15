import React from 'react';

const Icon = ({ as: As, size, ...props }: any) => {
  return <As width={size} height={size} {...props} />;
};

export { Icon };
