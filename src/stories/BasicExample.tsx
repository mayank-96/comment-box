import { CommentBox } from '@/components/composite';
import { Button } from '@/components/primitives';
import { MessageCircle } from 'lucide-react';
import React, { useRef, useState } from 'react';

function BasicExample() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const handleClose = () => {
    setVisible(false);
  };
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
        <CommentBox
          isOpen={visible}
          handleClose={handleClose}
          triggerRef={ref}
        />
      </div>
    </div>
  );
}

export default BasicExample;
