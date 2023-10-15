import React from 'react';
import { useAudioRecorderContext } from '.';
import { secondsToMMSS } from '@/utils/time';

function AudioRecorderTime() {
  const { data } = useAudioRecorderContext();
  return (
    <div
      style={{
        width: 30,
        fontWeight: 300,
        fontSize: 12,

        color: 'var(--color-neutral-4)',
      }}
    >
      {secondsToMMSS(data.length / 10)}
    </div>
  );
}

export default AudioRecorderTime;
