import React from 'react';
import Button from '../Button';
import { useAudioRecorderContext } from '.';
import { PlayCircle, XCircle } from 'lucide-react';

function AudioRecorderTrigger() {
  const { handleToggle, startRecording } = useAudioRecorderContext();
  return (
    <div
      onClick={handleToggle}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {startRecording ? (
        <XCircle
          width={18}
          height={18}
          style={{ color: 'var(--color-primary-3)' }}
        />
      ) : (
        <PlayCircle
          width={18}
          height={18}
          style={{ color: 'var(--color-primary-6)' }}
        />
      )}
    </div>
  );
}

export default AudioRecorderTrigger;
