import React, { createContext, forwardRef, useContext } from 'react';
import Overlay from '../Overlay';

const PopoverContext = createContext<any>('');

export function usePopoverContext() {
  return useContext(PopoverContext);
}

const Popover = forwardRef(
  (
    {
      visible,
      handleClose,
      triggerRef,
      placement,
      children,
      style,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <Overlay
        isOpen={visible}
        triggerRef={triggerRef}
        placement={placement}
        offset={20}
        handleClose={handleClose}
      >
        <PopoverContext.Provider value={{ handleClose }}>
          <div ref={ref} style={{ ...style }} {...props}>
            {children}
          </div>
        </PopoverContext.Provider>
      </Overlay>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
