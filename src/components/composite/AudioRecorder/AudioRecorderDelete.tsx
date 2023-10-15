import React from 'react';
import { useAudioRecorderContext } from './AudioRecorder';
import { Trash2 } from 'lucide-react';
import { Icon } from '@/components/primitives';

const AudioRecorderDelete = ({ style, ...props }: any) => {
  const { handleReset } = useAudioRecorderContext();
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', ...style }}
      onClick={() => {
        handleReset();
      }}
      {...props}
    >
      <Icon as={Trash2} size={18} style={{ color: 'var(--color-primary-3)' }} />
    </div>
  );
};

export { AudioRecorderDelete };
