import Button from '@/components/Button';
import { Popover } from '@/components/Popover';
import Select from '@/components/Select';
import React, { useState, useRef } from 'react';

function Basic() {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);

  const handleClose = () => {
    setVisible(false);
  };

  const [defaultSelectText, setDefaultSelectText] = useState(
    'Please select an option'
  );
  const [countryList] = useState([
    { id: 1, name: 'Australia' },
    { id: 2, name: 'Brazil' },
    { id: 3, name: 'China' },
  ]);

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
          }}
        >
          <Select defaultText={defaultSelectText} optionsList={countryList} />
          <div>
            asdsadas asd asd sad as dsa dsa das dsa d as das das ad as das das
            ds ad sa{' '}
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Basic;
