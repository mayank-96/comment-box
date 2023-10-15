import React from 'react';

const Textarea = ({ style, ...props }: any) => {
  return (
    <textarea
      style={{
        border: 'none',
        overflow: 'auto',
        outline: 'none',
        boxShadow: 'none',
        resize: 'none',
        width: '100%',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 300,
        fontSize: 14,
        ...style,
      }}
      {...props}
    />
  );
};

export { Textarea };
