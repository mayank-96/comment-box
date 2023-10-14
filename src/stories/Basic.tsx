import Button from '@/components/Button';
import { Popover } from '@/components/Popover';
import React, { useState, useRef } from 'react';

function Basic() {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button onClick={() => setVisible(!visible)} ref={triggerRef}>
        Toggle Popover
      </Button>
      <Popover
        visible={visible}
        handleClose={handleClose}
        triggerRef={triggerRef}
        placement='right bottom'
        offset={30}
      >
        <div
          style={{
            height: 300,
            width: 300,
            backgroundColor: 'pink',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Hello
        </div>
      </Popover>
    </div>
  );
}

export default Basic;
