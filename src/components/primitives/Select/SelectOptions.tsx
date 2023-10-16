import React, { createContext, useContext } from 'react';
import { Overlay, Popover } from '@/components/primitives';
import { useSelectContext } from './Select';

const SelectOptionContext = createContext<any>('');

const useSelectOptionContext = () => {
  return useContext(SelectOptionContext);
};

const SelectOptions = ({ children, offset, ...props }: any) => {
  const { isOpen, triggerRef, handleClose } = useSelectContext();
  return (
    <Popover
      visible={isOpen}
      handleClose={handleClose}
      triggerRef={triggerRef}
      placement='bottom right'
      offset={offset}
      style={{ padding: 8 }}
    >
      <SelectOptionContext.Provider value={{}}>
        <ul {...props}>{children}</ul>
      </SelectOptionContext.Provider>
    </Popover>
  );
};

export { SelectOptions, useSelectOptionContext };
