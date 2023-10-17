import {
  Select,
  Textarea,
  SelectOptions,
  SelectItem,
} from '@/components/primitives';
import React, { useEffect, useRef, useState } from 'react';

const MentionDropdown = ({
  mentions,
  handleTextChange: handleTextChangeProp = () => {},
  style,
  ...prop
}: any) => {
  const [text, setText] = useState('');
  const [showMentions, setShowMentions] = useState(false);

  const triggerRef = useRef<any>(null);

  const handleTextChange = (e: any) => {
    const newText = e.target.value;
    setText(newText);
    handleTextChangeProp(newText);

    if (newText[newText.length - 1] === '@') {
      setShowMentions(true);
    } else {
      setShowMentions(false);
    }
  };

  const handleSelectUser = (user: string) => {
    const newText = text + user;
    setText(newText);
    setShowMentions(false);
    handleTextChangeProp(newText);

    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
    <Select
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
      }}
      handleClose={() => setShowMentions(false)}
      isOpen={showMentions}
      triggerRef={triggerRef}
    >
      <Textarea
        value={text}
        ref={triggerRef}
        placeholder='Type your comment...'
        onChange={handleTextChange}
      />
      <SelectOptions
        offset={10}
        style={{
          listStyleType: 'none',
        }}
      >
        {mentions.map((name: string, index: string) => {
          return (
            <SelectItem
              key={index}
              value={name}
              onClick={() => handleSelectUser(name)}
            >
              <div style={{ display: 'flex', gap: 8 }}>
                <div
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 999,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-neutral-10)',
                    fontSize: 8,
                    backgroundColor: 'var(--color-primary-6)',
                  }}
                >
                  {name[0].toUpperCase()}
                </div>
                <div
                  style={{ display: 'flex', gap: 4, flexDirection: 'column' }}
                >
                  <div style={{ fontSize: 14 }}>{name}</div>
                  <div
                    style={{ fontSize: 14, color: 'var(--color-neutral-4)' }}
                  >
                    katepetrokhalko@gmail.com
                  </div>
                </div>
              </div>
            </SelectItem>
          );
        })}
      </SelectOptions>
    </Select>
  );
};

export { MentionDropdown };
