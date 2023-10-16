import React from 'react';
import { useAudioRecorderContext } from './AudioRecorder';
import { PauseCircle, PlayCircle, XCircle } from 'lucide-react';
import { Icon } from '@/components/primitives';

const AudioRecorderTrigger = ({ style, ...props }: any) => {
  const { handleToggle, startRecording } = useAudioRecorderContext();
  return (
    <div
      onClick={handleToggle}
      style={{ display: 'flex', alignItems: 'center', ...style }}
      {...props}
    >
      {startRecording ? (
        <Icon
          as={PauseCircle}
          size={18}
          style={{ color: 'var(--color-secondary-3)' }}
        />
      ) : (
        <Icon
          as={PlayCircle}
          size={18}
          style={{ color: 'var(--color-primary-6)' }}
        />
      )}
    </div>
  );
};

export { AudioRecorderTrigger };
