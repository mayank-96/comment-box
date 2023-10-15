import React, { createContext, useContext } from 'react';
import Overlay from '../Overlay';
import { useSelectContext } from '.';

const SelectOptionContext = createContext<any>('');

export function useSelectOptionContext() {
  return useContext(SelectOptionContext);
}

function SelectOptions({
  children,
  itemStyling,
  activeItemStyling,
  ...props
}: any) {
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
}

export default SelectOptions;
