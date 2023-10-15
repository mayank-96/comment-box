import React from 'react';
import Button from '../Button';
import { useAudioRecorderContext } from '.';

function AudioRecorderTrigger() {
  const { handleToggle, startRecording } = useAudioRecorderContext();
  return (
    <Button
      onClick={handleToggle}
      style={{ width: 80, alignItems: 'center', justifyContent: 'center' }}
    >
      {startRecording ? 'Pause' : 'Start'}
    </Button>
  );
}

export default AudioRecorderTrigger;
