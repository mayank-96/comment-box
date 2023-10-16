import React, { useEffect, useState } from 'react';
import {
  Button,
  Popover,
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
} from 'lucide-react';
import {
  AudioRecorder,
  AudioRecorderTrigger,
  AudioRecorderWave,
  AudioRecorderTime,
  AudioRecorderDelete,
  CommentCard,
} from '@/components/composite';
import useOverlayPosition from '@/components/primitives/Overlay/useOverlayPosition';

const CommentBox = ({
  isOpen,
  handleClose,
  triggerRef,
  placement = 'right bottom',
  offset = 10,
}: any) => {
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

  const { overlayPosition, overlayRef } = useOverlayPosition({
    triggerRef,
    placement,
    offset,
    isOpen,
  });

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
      overlayPosition={overlayPosition}
      overlayRef={overlayRef}
      visible={isOpen}
      handleClose={handleClose}
      style={{
        width: 360,
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
            <Icon as={Circle} size={16} />
            <div
              style={{
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: 600,
              }}
            >
              Open
            </div>
            <Icon as={ChevronDown} size={16} />
          </Button>
          {/* <Button>
            <Icon as={Flag} size={16} />
            <Icon as={ChevronDown} size={16} />
          </Button> */}
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
      </div>
      <Divider />
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
              style={{ color: 'var(--color-neutral-6)', cursor: 'pointer' }}
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
            <Icon as={ChevronRight} size={16} style={{ marginBlock: 4 }} />
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
        <Icon as={MessageCircle} size={20} strokeWidth={2.5} />
        <div>All comments</div>
      </div>
    </Popover>
  );
};

export { CommentBox };
