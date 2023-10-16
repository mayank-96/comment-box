import React, { createContext, forwardRef, useContext } from 'react';
import { Overlay } from '@/components/primitives';

const PopoverContext = createContext<any>('');

const usePopoverContext = () => {
  return useContext(PopoverContext);
};

const Popover = forwardRef(
  (
    {
      visible,
      handleClose,
      triggerRef,
      placement,
      children,
      style,
      offset = 20,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <Overlay
        isOpen={visible}
        triggerRef={triggerRef}
        placement={placement}
        offset={offset}
        handleClose={handleClose}
      >
        <PopoverContext.Provider value={{ handleClose }}>
          <div
            ref={ref}
            style={{
              padding: 16,
              backgroundColor: 'var(--color-neutral-10)',
              border: '1px solid var(--color-neutral-8)',
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
