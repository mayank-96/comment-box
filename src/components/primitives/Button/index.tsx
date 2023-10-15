import React, { forwardRef } from 'react';

const Button = forwardRef<HTMLButtonElement>(
  ({ children, isDisabled, style, ...props }: any, ref: any) => {
    return (
      <button
        ref={ref}
        {...props}
        style={{
          margin: 0,
          border: 0,
          paddingBlock: 4,
          paddingInline: 8,
          borderRadius: 24,
          gap: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#e7e8fa',
          color: 'var(--color-primary-6)',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.5 : 1,
          ...style,
        }}
        disabled={isDisabled}
      >
        {children}
      </button>
    );
  }
) as any;

Button.displayName = 'Button';
export { Button };
