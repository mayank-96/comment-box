import React from 'react';
import Button from '../Button';
import { useAudioRecorderContext } from '.';
import { Delete, Trash2 } from 'lucide-react';

function AudioRecorderDelete() {
  const { handleReset } = useAudioRecorderContext();
  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      onClick={() => {
        handleReset();
      }}
    >
      <Trash2
        width={18}
        height={18}
        style={{ color: 'var(--color-primary-3)' }}
      />
    </div>
  );
}

export default AudioRecorderDelete;
