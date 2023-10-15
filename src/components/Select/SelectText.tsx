import React from 'react';
import { useSelectContext } from '.';

function SelectText({ ...props }: any) {
  const { defaultSelectText, handleListDisplay, triggerRef } =
    useSelectContext();
  return (
    <div onClick={handleListDisplay} ref={triggerRef} {...props}>
      {defaultSelectText}
    </div>
  );
}

export default SelectText;
