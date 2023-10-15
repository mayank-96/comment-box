import React from 'react';
import { useAudioRecorderContext } from './AudioRecorder';

const AudioRecorderWave = ({ style, ...props }: any) => {
  const { barGap, data, barWidth, transformX, waveRef } =
    useAudioRecorderContext();

  return (
    <div
      ref={waveRef}
      style={{
        height: 24,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: barGap,
        overflow: 'hidden',
        ...style,
      }}
      {...props}
    >
      {data.map((item: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor:
                item === 0
                  ? 'var(--color-neutral-6)'
                  : 'var(--color-primary-6)',
              height: 18 * item + 3,
              borderRadius: 999,
              flex: `0 0 ${barWidth}px`,
              transform: `translateX(-${transformX}px)`,
              transition: '0.04s ease-out',
            }}
          />
        );
      })}
    </div>
  );
};

export { AudioRecorderWave };
