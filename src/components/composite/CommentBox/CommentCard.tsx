import { Avatar, Icon } from '@/components/primitives';
import { Laptop, Smartphone } from 'lucide-react';
import React from 'react';

const CommentCard = ({
  profileUrl,
  profileName,
  commentTime,
  device = 'Desktop',
  comment,
  style,
}: any) => {
  const DeviceBadge = () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {device === 'Desktop' && <Icon as={Laptop} size={12} />}
        {device === 'Mobile' && <Icon as={Smartphone} size={12} />}
        <div
          style={{
            fontSize: '11px',
            fontWeight: 400,
            lineHeight: '17px',
          }}
        >
          {device}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: 8,
        paddingBlock: 8,
        marginBlock: 4,
        ...style,
      }}
    >
      <Avatar src={profileUrl} />
      <div
        style={{
          marginTop: 4,
          display: 'flex',
          gap: 10,
          flexDirection: 'column',
        }}
      >
        <div style={{ fontWeight: 600, fontSize: '16px' }}>{profileName}</div>
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
            {commentTime}
          </div>
          <DeviceBadge />
        </div>
        <div style={{ fontWeight: 300, fontSize: '16px' }}>{comment}</div>
      </div>
    </div>
  );
};

export { CommentCard };
