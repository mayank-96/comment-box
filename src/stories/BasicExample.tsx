import {
  CommentBox,
  CommentBoxHeader,
  CommentBoxBody,
  CommentBoxFooter,
  AudioRecorder,
  AudioRecorderTrigger,
  AudioRecorderWave,
  AudioRecorderTime,
  AudioRecorderDelete,
  CommentCard,
} from '@/components/composite';
import {
  Button,
  Divider,
  Textarea,
  Icon,
  Select,
  SelectText,
  SelectOptions,
  SelectItem,
} from '@/components/primitives';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Circle,
  Copy,
  FlagIcon,
  MessageCircle,
  Mic,
  Monitor,
  MoreHorizontal,
  Paperclip,
  Smile,
  Video,
  XCircle,
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

function BasicExample() {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<any>([]);
  const [startRecording, setStartRecording] = useState(false);
  const [showAudioRecording, setShowAudioRecording] = useState(false);

  const ref = useRef(null);

  const handleClose = () => {
    setVisible(false);
  };

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
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 500,
          height: 500,
          padding: 32,
          backgroundColor: 'var(--color-neutral-9)',
        }}
      >
        <Button ref={ref} onClick={() => setVisible(true)}>
          <MessageCircle height={16} width={16} style={{ marginBlock: 4 }} />
        </Button>
        <CommentBox isOpen={visible} handleClose={handleClose} triggerRef={ref}>
          <CommentBoxHeader style={{ justifyContent: 'space-between' }}>
            <div style={{ gap: 8, display: 'flex' }}>
              <Select
                defaultValue='open'
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 600,
                }}
                handleChange={(item: any) => console.log('selected item', item)}
              >
                <SelectText dropDownIconSize={16}>
                  <Icon as={Circle} size={16} />
                </SelectText>
                <SelectOptions
                  offset={10}
                  style={{
                    listStyleType: 'none',
                    width: 190,
                  }}
                >
                  <SelectItem
                    value='open'
                    selectedStyle={{
                      color: 'var(--color-primary-6)',
                      backgroundColor: '#625df533',
                    }}
                  >
                    <Icon
                      as={Circle}
                      size={16}
                      style={{ color: 'var(--color-primary-6)' }}
                    />
                    <div>Open</div>
                  </SelectItem>
                  <SelectItem
                    value='closed'
                    selectedStyle={{
                      color: 'var(--color-primary-3)',
                      backgroundColor: '#ff716233',
                    }}
                  >
                    <Icon
                      as={XCircle}
                      size={16}
                      style={{
                        color: 'var(--color-primary-3)',
                      }}
                    />
                    <div>Closed</div>
                  </SelectItem>
                </SelectOptions>
              </Select>
              <Select
                style={{
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: 600,
                }}
                handleChange={(text: string) => console.log('text', text)}
              >
                <SelectText dropDownIconSize={16}>
                  <Icon as={FlagIcon} size={16} />
                </SelectText>
                <SelectOptions
                  offset={10}
                  style={{
                    listStyleType: 'none',
                    width: 190,
                  }}
                >
                  <SelectItem
                    value='p0'
                    selectedStyle={{
                      color: 'var(--color-primary-3)',
                      backgroundColor: '#ff716233',
                    }}
                  >
                    <Icon
                      as={FlagIcon}
                      size={16}
                      style={{
                        color: 'var(--color-primary-3)',
                      }}
                    />
                    <div>P0</div>
                  </SelectItem>
                  <SelectItem
                    value='p1'
                    selectedStyle={{
                      color: 'var(--color-secondary-3)',
                      backgroundColor: '#ffd16633',
                    }}
                  >
                    <Icon
                      as={FlagIcon}
                      size={16}
                      style={{ color: 'var(--color-secondary-3)' }}
                    />
                    <div>P1</div>
                  </SelectItem>
                  <SelectItem
                    value='p2'
                    selectedStyle={{
                      color: 'var(--color-primary-6)',
                      backgroundColor: '#625df533',
                    }}
                  >
                    <Icon
                      as={FlagIcon}
                      size={16}
                      style={{ color: 'var(--color-primary-6)' }}
                    />
                    <div>P2</div>
                  </SelectItem>
                </SelectOptions>
              </Select>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 28,
                paddingInline: 4,
                alignItems: 'center',
              }}
            >
              <Icon
                as={MoreHorizontal}
                size={16}
                style={{ color: 'var(--color-neutral-3)' }}
              />

              <Icon
                as={Copy}
                size={16}
                style={{ color: 'var(--color-neutral-3)' }}
              />

              <Icon
                as={Check}
                size={16}
                style={{ color: 'var(--color-neutral-3)' }}
              />
            </div>
          </CommentBoxHeader>
          <Divider />
          <CommentBoxBody style={{ gap: 12 }}>
            <CommentCard
              profileUrl='www.image.link'
              profileName='Me'
              commentTime='7 min. ago'
              device='Desktop'
              comment='Change the logo'
            />
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
              <Textarea placeholder='Comment or record' />
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
              <Divider />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', gap: 16 }}>
                  <Icon
                    as={Smile}
                    size={20}
                    style={{ color: 'var(--color-neutral-6)' }}
                  />
                  <Icon
                    as={Paperclip}
                    size={20}
                    style={{ color: 'var(--color-neutral-6)' }}
                  />
                  <Icon
                    as={Mic}
                    size={20}
                    onClick={() => setShowAudioRecording((prev) => !prev)}
                    style={{
                      color: 'var(--color-neutral-6)',
                      cursor: 'pointer',
                    }}
                  />
                  <Icon
                    as={Video}
                    size={20}
                    style={{ color: 'var(--color-neutral-6)' }}
                  />
                  <Icon
                    as={Monitor}
                    size={20}
                    style={{ color: 'var(--color-neutral-6)' }}
                  />
                </div>
                <Button isDisabled={startRecording}>
                  <Icon
                    as={ChevronRight}
                    size={16}
                    style={{ marginBlock: 4 }}
                  />
                </Button>
              </div>
            </div>
          </CommentBoxBody>
        </CommentBox>
      </div>
    </div>
  );
}

export default BasicExample;
