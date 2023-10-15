import {
  Button,
  Popover,
  Select,
  SelectItem,
  SelectOptions,
  SelectText,
} from '@/components/primitives';
import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/Select.module.css';
import {
  AudioRecorder,
  AudioRecorderTrigger,
  AudioRecorderWave,
  AudioRecorderTime,
  AudioRecorderDelete,
} from '@/components/composite';

function Basic() {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef(null);
  const [data, setData] = useState<any>([]);
  const [startRecording, setStartRecording] = useState(false);

  const handleToggle = () => {
    setStartRecording((prev: any) => !prev);
  };

  const handleReset = () => {
    handleToggle();
    setData([]);
  };

  useEffect(() => {
    let intervalId: any;

    if (startRecording) {
      intervalId = setInterval(() => {
        const randomValue = Math.random();
        setData((prevData: any) => [...prevData, randomValue]);
      }, 1000);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        console.log(data);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [startRecording]);

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

          <AudioRecorder
            startRecording={startRecording}
            data={data}
            handleToggle={handleToggle}
            handleReset={handleReset}
          >
            <AudioRecorderTrigger />
            <AudioRecorderWave />
            <AudioRecorderTime />
            <AudioRecorderDelete />
          </AudioRecorder>
        </div>
      </Popover>
    </div>
  );
}

export default Basic;
