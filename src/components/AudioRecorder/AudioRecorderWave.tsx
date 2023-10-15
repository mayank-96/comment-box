import React from 'react';
import { useAudioRecorderContext } from '.';

function AudioRecorderWave({ ...props }: any) {
  const { containerWidth, barGap, data, barWidth, transformX } =
    useAudioRecorderContext();

  return (
    <div
      style={{
        height: 50,
        width: containerWidth,
        display: 'flex',
        alignItems: 'center',
        gap: barGap,
        overflow: 'hidden',
      }}
    >
      {data.map((item: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              height: 32 * item + 3,
              borderRadius: 999,
              flex: `0 0 ${barWidth}px`,
              transform: `translateX(-${transformX}px)`,
              transition: '1s ease-out',
            }}
          />
        );
      })}
    </div>
  );
}

export default AudioRecorderWave;
