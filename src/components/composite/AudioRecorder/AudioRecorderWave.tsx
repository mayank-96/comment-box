import React, { useRef } from 'react';
import { useAudioRecorderContext } from './AudioRecorder';

const AudioRecorderWave = ({
  barWidth = 3,
  barGap = 1,
  barActiveColor = 'var(--color-primary-6)',
  barInActiveColor = 'var(--color-neutral-6)',
  style,
  barStyle,
  ...props
}: any) => {
  const { data } = useAudioRecorderContext();

  const waveRef = useRef(null);
  let containerWidth = 100;

  if (waveRef.current) {
    // @ts-ignore
    const containerRect = waveRef.current.getBoundingClientRect();
    containerWidth = containerRect.width;
  }

  const n = data.length;
  const totalBarWidth = barWidth * n + barGap * (n - 1);
  let transformX = 0;

  if (containerWidth < totalBarWidth) {
    transformX = totalBarWidth - containerWidth;
  }

  return (
    <div
      ref={waveRef}
      style={{
        height: 24,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        ...style,
        gap: barGap,
      }}
      {...props}
    >
      {data.map((item: any, index: any) => {
        return (
          <div
            key={index}
            style={{
              borderRadius: 999,
              transition: '0.04s ease-out',
              ...barStyle,
              flex: `0 0 ${barWidth}px`,
              transform: `translateX(-${transformX}px)`,
              backgroundColor: item === 0 ? barInActiveColor : barActiveColor,
              height: 18 * item + 3,
            }}
          />
        );
      })}
    </div>
  );
};

export { AudioRecorderWave };
