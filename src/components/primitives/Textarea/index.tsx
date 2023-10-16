import React, { forwardRef } from 'react';

const Textarea = forwardRef(({ style, ...props }: any, ref: any) => {
  return (
    <textarea
      ref={ref}
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
});

Textarea.displayName = 'Textarea';

export { Textarea };
