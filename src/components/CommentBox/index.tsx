import React, { useEffect, useState } from 'react';
import { Popover } from '../Popover';
import Button from '../Button';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Copy,
  Flag,
  Laptop,
  MessageCircle,
  Mic,
  Monitor,
  MoreHorizontal,
  Paperclip,
  Smile,
  Star,
  Video,
} from 'lucide-react';
import AudioRecorder from '../AudioRecorder';
import AudioRecorderTrigger from '../AudioRecorder/AudioRecorderTrigger';
import AudioRecorderWave from '../AudioRecorder/AudioRecorderWave';
import AudioRecorderTime from '../AudioRecorder/AudioRecorderTime';
import AudioRecorderDelete from '../AudioRecorder/AudioRecorderDelete';

function CommentBox({ isOpen, handleClose, triggerRef }: any) {
  const [data, setData] = useState<any>([]);
  const [startRecording, setStartRecording] = useState(false);
  const [showAudioRecording, setShowAudioRecording] = useState(false);

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
    <Popover
      visible={isOpen}
      handleClose={handleClose}
      triggerRef={triggerRef}
      placement='right bottom'
      offset={30}
    >
      <div
        style={{
          padding: 16,
          backgroundColor: 'var(--color-neutral-10)',
          width: 360,
          border: '1px solid var(--color-neutral-8)',
          borderRadius: 12,
          boxShadow: '0px 8px 16px 0px #0F0F0F1A',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ gap: 8, display: 'flex' }}>
            <Button>
              <Circle width={16} height={16} />
              <div
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 600,
                }}
              >
                Open
              </div>
              <ChevronDown width={16} height={16} />
            </Button>
            <Button>
              <Flag width={16} height={16} />
              <ChevronDown width={16} height={16} />
            </Button>
          </div>
          <div
            style={{
              display: 'flex',
              gap: 28,
              paddingInline: 4,
              alignItems: 'center',
            }}
          >
            <MoreHorizontal
              width={16}
              height={16}
              style={{ color: 'var(--color-neutral-3)' }}
            />
            <Copy
              width={16}
              height={16}
              style={{ color: 'var(--color-neutral-3)' }}
            />
            <Check
              width={16}
              height={16}
              style={{ color: 'var(--color-neutral-3)' }}
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'var(--color-neutral-8',
            height: 1,
          }}
        />
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'var(--color-primary-2)',
                    borderRadius: 999,
                  }}
                />
                <div
                  style={{
                    marginTop: 4,
                    display: 'flex',
                    gap: 10,
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '16px' }}>Me</div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 10,
                      alignItems: 'center',
                      color: 'var(--color-neutral-6)',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 400,
                        lineHeight: '17px',
                      }}
                    >
                      7 min. ago
                    </div>
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                    >
                      <Laptop width={12} height={12} />
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 400,
                          lineHeight: '17px',
                        }}
                      >
                        Desktop
                      </div>
                    </div>
                  </div>
                  <div style={{ fontWeight: 300, fontSize: '16px' }}>
                    Change the logo
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div
          style={{
            border: '1px solid var(--color-neutral-9)',
            padding: 16,
            borderRadius: 12,
            display: 'flex',
            gap: 12,
            flexDirection: 'column',
          }}
        >
          <textarea
            placeholder='Comment or record'
            style={{
              border: 'none',
              overflow: 'auto',
              outline: 'none',
              boxShadow: 'none',
              resize: 'none',
              width: '100%',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 300,
              fontSize: 14,
            }}
          />
          {showAudioRecording && (
            <AudioRecorder
              startRecording={startRecording}
              data={data}
              handleToggle={handleToggle}
              handleReset={handleReset}
            >
              <AudioRecorderTrigger />
              <AudioRecorderWave />
              <AudioRecorderTime />
              <AudioRecorderDelete />
            </AudioRecorder>
          )}
          <div
            style={{
              backgroundColor: 'var(--color-neutral-8',
              height: 1,
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: 16 }}>
              <Smile
                width={20}
                height={20}
                style={{ color: 'var(--color-neutral-6)' }}
              />

              <Paperclip
                width={20}
                height={20}
                style={{ color: 'var(--color-neutral-6)' }}
              />

              <Mic
                onClick={() => setShowAudioRecording((prev) => !prev)}
                width={20}
                height={20}
                style={{ color: 'var(--color-neutral-6)', cursor: 'pointer' }}
              />

              <Video
                width={20}
                height={20}
                style={{ color: 'var(--color-neutral-6)' }}
              />

              <Monitor
                width={20}
                height={20}
                style={{ color: 'var(--color-neutral-6)' }}
              />
            </div>
            <Button isDisabled={startRecording}>
              <ChevronRight height={16} width={16} style={{ marginBlock: 4 }} />
            </Button>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-primary-6)',
            fontWeight: 500,
          }}
        >
          <MessageCircle width={20} height={20} strokeWidth={2.5} />
          <div>All comments</div>
        </div>
      </div>
    </Popover>
  );
}

export default CommentBox;
