import { Popover, Textarea } from '@/components/primitives';
import useOverlayPosition from '@/components/primitives/Overlay/useOverlayPosition';
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const BasicMention = () => {
  const [text, setText] = useState('');
  const [showMentions, setShowMentions] = useState(false);
  const [mentions, setMentions] = useState<any>([]);

  const textareaRef = useRef<any>(null);
  const absoluteContainerRef = useRef<any>(null);

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

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleClose = () => {
    setShowMentions(false);
  };

  useEffect(() => {
    const userMentions = ['mayank', 'john', 'alice', 'bob'];
    setMentions(userMentions);
  }, []);

  return (
    <div>
      <Textarea
        ref={textareaRef}
        value={text}
        onChange={handleDebounceInputChange}
        placeholder='Type your comment...'
        style={{
          position: 'relative',
          backgroundColor: 'pink',
        }}
      />

      {showMentions && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'red',
          }}
        >
          {mentions.map((user: string) => (
            <div key={user} onClick={() => handleSelectUser(user)}>
              {user}
            </div>
          ))}
        </div>
      )}

      {/* {showMentions &&
        createPortal(
          <div
            ref={absoluteContainerRef}
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
            onClick={handleClose}
          >
            <div
              style={{
                position: 'absolute',
                top: cursorPosition.y,
                left: cursorPosition.x,
              }}
            >
              {mentions.map((user: string) => (
                <div key={user} onClick={() => handleSelectUser(user)}>
                  {user}
                </div>
              ))}
            </div>
          </div>,
          document.body
        )} */}
    </div>
  );
};

export default BasicMention;
