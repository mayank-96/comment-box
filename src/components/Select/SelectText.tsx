import React from 'react';
import { useSelectContext } from '.';

function SelectText({ ...props }: any) {
  const { defaultSelectText, handleOpen, triggerRef } = useSelectContext();
  return (
    <div onClick={handleOpen} ref={triggerRef} {...props}>
      {defaultSelectText}
    </div>
  );
}

export default SelectText;
