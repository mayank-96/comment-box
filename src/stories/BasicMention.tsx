import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash/debounce';

const BasicMention = () => {
  const [text, setText] = useState('');
  const [showMentions, setShowMentions] = useState(false);
  const [mentions, setMentions] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    // You can fetch user mentions from your data source here.
    // For now, using a static list for demonstration.
    const userMentions = ['mayank', 'john', 'alice', 'bob'];
    setMentions(userMentions);
  }, []);

  const handleDebounceInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Check if the user is typing an "@" symbol
    if (newText.includes('@')) {
      setShowMentions(true);
    } else {
      setShowMentions(false);
    }
  };
  const handleSelectUser = (user) => {
    const newText = text.replace(`@${selectedUser}`, `@${user}`);
    setText(newText);
    setShowMentions(false);
    setSelectedUser('');

    // Focus on the textarea
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const debouncedInputChange = useRef(debounce(handleDebounceInputChange, 300));

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleDebounceInputChange}
        placeholder='Type your comment...'
      />
      {showMentions && (
        <div className='mention-box'>
          {mentions.map((user) => (
            <div key={user} onClick={() => handleSelectUser(user)}>
              {user}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BasicMention;
