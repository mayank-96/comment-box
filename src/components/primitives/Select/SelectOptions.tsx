import React, { createContext, useContext } from 'react';
import { Overlay, Popover } from '@/components/primitives';
import { useSelectContext } from './Select';
import useOverlayPosition from '../Overlay/useOverlayPosition';

const SelectOptionContext = createContext<any>('');

const useSelectOptionContext = () => {
  return useContext(SelectOptionContext);
};

const SelectOptions = ({ children, offset, ...props }: any) => {
  const { isOpen, triggerRef, handleClose } = useSelectContext();

  const { overlayPosition, overlayRef } = useOverlayPosition({
    triggerRef,
    placement: 'bottom right',
    offset,
    isOpen,
  });

  return (
    <Popover
      overlayPosition={overlayPosition}
      overlayRef={overlayRef}
      visible={isOpen}
      handleClose={handleClose}
      style={{ padding: 8 }}
    >
      <SelectOptionContext.Provider value={{}}>
        <ul {...props}>{children}</ul>
      </SelectOptionContext.Provider>
    </Popover>
  );
};

export { SelectOptions, useSelectOptionContext };
