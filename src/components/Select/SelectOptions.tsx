import React from 'react';
import Overlay from '../Overlay';
import { useSelectContext } from '.';

function SelectOptions({ children, ...props }: any) {
  const { showOptionList, triggerRef, handleClickOutside } = useSelectContext();
  return (
    <Overlay
      isOpen={showOptionList}
      triggerRef={triggerRef}
      placement='bottom'
      handleClose={handleClickOutside}
    >
      <ul {...props}>{children}</ul>
    </Overlay>
  );
}

export default SelectOptions;
