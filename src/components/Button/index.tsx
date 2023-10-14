import React, { forwardRef } from 'react';
import styles from '@/styles/Button.module.css';

const Button = forwardRef<HTMLButtonElement>(
  ({ children, ...props }: any, ref: any) => {
    return (
      <button className={styles.button} ref={ref} {...props}>
        {children}
      </button>
    );
  }
) as any;

Button.displayName = 'Button';
export default Button;
