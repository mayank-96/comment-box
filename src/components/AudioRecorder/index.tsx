import React, { useState, useEffect } from 'react';
import Button from '../Button';

function secondsToMMSS(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const MM = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const SS =
    remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

  return `${MM}:${SS}`;
}

const AudioRecorder = () => {
  const [data, setData] = useState<any>([]);
  const [startRecording, setStartRecording] = useState(false);

  useEffect(() => {
    let intervalId: any;

    if (startRecording) {
      intervalId = setInterval(() => {
        const randomValue = Math.random();
        setData((prevData: any) => [...prevData, randomValue]);
      }, 1000);
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
        padding: 32,
        paddingTop: 300,
        display: 'flex',
        gap: 28,
        alignItems: 'center',
      }}
    >
      <Button onClick={() => setStartRecording(true)}>Start</Button>
      <div
        style={{
          height: 50,
          width: containerWidth,
          backgroundColor: 'pink',
          borderRadius: 28,
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
                height: 42 * item + 3,
                borderRadius: 24,
                flex: `0 0 ${barWidth}px`,
                transform: `translateX(-${transformX}px)`,
                transition: '1s ease-out',
              }}
            />
          );
        })}
      </div>
      <div>{secondsToMMSS(data.length)}</div>
      <Button onClick={() => setStartRecording(false)}>Stop</Button>
      <Button
        onClick={() => {
          setData([]);
          setStartRecording(false);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default AudioRecorder;
