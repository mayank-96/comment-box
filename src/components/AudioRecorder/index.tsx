import React, { createContext, useContext, useRef } from 'react';

const AudioRecorderContext = createContext<any>('');

export function useAudioRecorderContext() {
  return useContext(AudioRecorderContext);
}

const AudioRecorder = ({
  startRecording,
  data,
  handleToggle,
  handleReset,
  children,
  ...props
}: any) => {
  const waveRef = useRef(null);
  let containerWidth = 100;

  if (waveRef.current) {
    // @ts-ignore
    const containerRect = waveRef.current.getBoundingClientRect();
    containerWidth = containerRect.width;
  }

  const barWidth = 3;
  const barGap = 1;
  const n = data.length;
  const totalBarWidth = barWidth * n + barGap * (n - 1);
  let transformX = 0;

  if (containerWidth < totalBarWidth) {
    transformX = totalBarWidth - containerWidth;
  }

  return (
    <div
      style={{
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 32,
        backgroundColor: 'var(--color-neutral-9)',
      }}
    >
      <AudioRecorderContext.Provider
        value={{
          data,
          handleToggle,
          startRecording,
          handleReset,
          containerWidth,
          barGap,
          barWidth,
          transformX,
          waveRef,
        }}
      >
        {children}
      </AudioRecorderContext.Provider>
    </div>
  );
};

export default AudioRecorder;
