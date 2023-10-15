import React from 'react';
import Button from '../Button';
import { useAudioRecorderContext } from '.';

function AudioRecorderDelete() {
  const { handleReset } = useAudioRecorderContext();
  return (
    <Button
      onClick={() => {
        handleReset();
      }}
    >
      Delete
    </Button>
  );
}

export default AudioRecorderDelete;
