import React, { createContext, useContext } from 'react';

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
  const containerWidth = 500;
  const barWidth = 3;
  const barGap = 2;
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
        gap: 28,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        backgroundColor: 'gray',
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
        }}
      >
        {children}
      </AudioRecorderContext.Provider>
    </div>
  );
};

export default AudioRecorder;
