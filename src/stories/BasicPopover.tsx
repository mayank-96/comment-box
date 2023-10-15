import Button from '@/components/Button';
import { Popover } from '@/components/Popover';
import Select from '@/components/Select';
import SelectItem from '@/components/Select/SelectItem';
import SelectOptions from '@/components/Select/SelectOptions';
import SelectText from '@/components/Select/SelectText';
import React, { useState, useRef } from 'react';
import styles from '@/styles/Select.module.css';
import { Flag } from 'lucide-react';
import AudioRecorder from '@/components/AudioRecorder';

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
            backgroundColor: 'pink',
            padding: 80,
          }}
        >
          <Select
            className={`${styles.customSelectContainer}`}
            defaultValue='High'
            handleChange={(text: string) => console.log('text', text)}
          >
            <SelectText />
            <SelectOptions
              className={`${styles.selectOptions}`}
              itemStyling={{ backgroundColor: 'yellow' }}
              activeItemStyling={{ backgroundColor: 'green' }}
            >
              <SelectItem value='high'> High</SelectItem>
              <SelectItem value='low'>Low</SelectItem>
              <SelectItem value='medium'>Medium</SelectItem>
            </SelectOptions>
          </Select>
          <div style={{ width: 200 }}>
            asdsadas asd asd sad as dsa dsa das dsa d as das das ad as das das
            ds ad sa
          </div>
          <AudioRecorder />
        </div>
      </Popover>
    </div>
  );
}

export default Basic;
