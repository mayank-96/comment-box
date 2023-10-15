import React, { createContext, useContext, useRef } from 'react';

const AudioRecorderContext = createContext<any>('');

const useAudioRecorderContext = () => {
  return useContext(AudioRecorderContext);
};

const AudioRecorder = ({
  startRecording,
  data,
  handleToggle,
  handleReset,
  children,
  style,
  barWidth = 3,
  barGap = 1,
  ...props
}: any) => {
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
      style={{
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 32,
        backgroundColor: 'var(--color-neutral-9)',
        ...style,
      }}
      {...props}
    >
      <AudioRecorderContext.Provider
        value={{
          data,
          handleToggle,
          startRecording,
          handleReset,
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

export { AudioRecorder, useAudioRecorderContext };
