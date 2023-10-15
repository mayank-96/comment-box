import React from 'react';
import { useAudioRecorderContext } from './AudioRecorder';
import { secondsToMMSS } from '@/utils/time';

const AudioRecorderTime = ({ style, ...props }: any) => {
  const { data } = useAudioRecorderContext();
  return (
    <div
      style={{
        width: 30,
        fontWeight: 300,
        fontSize: 12,
        color: 'var(--color-neutral-4)',
        ...style,
      }}
      {...props}
    >
      {secondsToMMSS(data.length / 10)}
    </div>
  );
};

export { AudioRecorderTime };
