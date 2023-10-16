import React, { createContext, useContext, useEffect, useState } from 'react';

const AudioRecorderContext = createContext<any>('');

const useAudioRecorderContext = () => {
  return useContext(AudioRecorderContext);
};

const AudioRecorder = ({ children, style, ...props }: any) => {
  const [data, setData] = useState<any>([]);
  const [startRecording, setStartRecording] = useState(false);

  const handleToggle = () => {
    setStartRecording((prev: any) => !prev);
  };

  const handleReset = () => {
    setStartRecording(false);
    setData([]);
  };

  useEffect(() => {
    let intervalId: any;

    if (startRecording) {
      intervalId = setInterval(() => {
        let randomValue = Math.random();
        if (randomValue < 0.15) {
          randomValue = 0;
        }
        setData((prevData: any) => [...prevData, randomValue]);
      }, 100);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        console.log(data);
      }
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [startRecording]);

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
        }}
      >
        {children}
      </AudioRecorderContext.Provider>
    </div>
  );
};

export { AudioRecorder, useAudioRecorderContext };
