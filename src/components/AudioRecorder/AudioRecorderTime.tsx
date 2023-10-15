import React from 'react';
import { useAudioRecorderContext } from '.';
import { secondsToMMSS } from '@/utils/time';

function AudioRecorderTime() {
  const { data } = useAudioRecorderContext();
  return <div style={{ width: 50 }}>{secondsToMMSS(data.length)}</div>;
}

export default AudioRecorderTime;
