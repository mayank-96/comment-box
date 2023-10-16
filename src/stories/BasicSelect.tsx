import {
  Select,
  SelectText,
  Icon,
  SelectOptions,
  SelectItem,
  Textarea,
} from '@/components/primitives';
import { Circle, XCircle } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

function BasicSelect() {
  const [text, setText] = useState('');
  const [showMentions, setShowMentions] = useState(false);
  const [mentions, setMentions] = useState<any>([]);

  const triggerRef = useRef<any>(null);

  const handleDebounceInputChange = (e: any) => {
    const newText = e.target.value;
    setText(newText);

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

    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  useEffect(() => {
    const userMentions = [
      'Kate Petrokhalko',
      'Kate Petrokhalko',
      'Kate Petrokhalko',
      'Kate Petrokhalko',
    ];
    setMentions(userMentions);
  }, []);

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     minHeight: '100vh',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    // >
    <Select
      defaultValue='open'
      style={{
        backgroundColor: 'white',
        color: 'black',
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
      }}
      isOpen={showMentions}
      triggerRef={triggerRef}
      handleChange={(item: any) => console.log('selected item', item)}
    >
      <Textarea
        value={text}
        ref={triggerRef}
        placeholder='Type your comment...'
        onChange={handleDebounceInputChange}
      />
      <SelectOptions
        offset={10}
        style={{
          listStyleType: 'none',
          // width: 190,
        }}
      >
        {mentions.map((name: string) => {
          return (
            <SelectItem
              key={name}
              value='name'
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
    // </div>
  );
}

export default BasicSelect;
