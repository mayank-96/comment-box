import React, { createContext, forwardRef, useContext } from 'react';
import { Overlay } from '@/components/primitives';

const PopoverContext = createContext<any>('');

const usePopoverContext = () => {
  return useContext(PopoverContext);
};

const Popover = forwardRef(
  (
    {
      overlayPosition,
      overlayRef,
      visible,
      handleClose,
      children,
      style,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <Overlay
        isOpen={visible}
        handleClose={handleClose}
        overlayPosition={overlayPosition}
        overlayRef={overlayRef}
      >
        <PopoverContext.Provider value={{ handleClose }}>
          <div
            ref={ref}
            style={{
              padding: 16,
              backgroundColor: 'var(--color-primary-background)',
              border: '1px solid var(--color-primary-border)',
              borderRadius: 12,
              boxShadow: '0px 8px 16px 0px #0F0F0F1A',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              ...style,
            }}
            {...props}
          >
            {children}
          </div>
        </PopoverContext.Provider>
      </Overlay>
    );
  }
);

Popover.displayName = 'Popover';

export { Popover, usePopoverContext };
