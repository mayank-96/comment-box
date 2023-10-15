import React, { createContext, useContext } from 'react';
import { Overlay } from '@/components/primitives';
import { useSelectContext } from './Select';

const SelectOptionContext = createContext<any>('');

const useSelectOptionContext = () => {
  return useContext(SelectOptionContext);
};

const SelectOptions = ({
  children,
  itemStyling,
  activeItemStyling,
  ...props
}: any) => {
  const { isOpen, triggerRef, handleClose } = useSelectContext();
  return (
    <Overlay
      isOpen={isOpen}
      triggerRef={triggerRef}
      placement='bottom'
      handleClose={handleClose}
    >
      <SelectOptionContext.Provider
        value={{
          itemStyling,
          activeItemStyling,
        }}
      >
        <ul {...props}>{children}</ul>
      </SelectOptionContext.Provider>
    </Overlay>
  );
};

export { SelectOptions, useSelectOptionContext };
