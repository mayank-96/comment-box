import React from 'react';
import { Popover } from '@/components/primitives';
import useOverlayPosition from '@/components/primitives/Overlay/useOverlayPosition';

const CommentBox = ({
  isOpen,
  handleClose,
  triggerRef,
  placement = 'right bottom',
  offset = 10,
  style,
  children,
  ...props
}: any) => {
  const { overlayPosition, overlayRef } = useOverlayPosition({
    triggerRef,
    placement,
    offset,
    isOpen,
  });

  return (
    <Popover
      overlayPosition={overlayPosition}
      overlayRef={overlayRef}
      visible={isOpen}
      handleClose={handleClose}
      style={{
        width: 360,
        ...style,
      }}
      {...props}
    >
      {children}
    </Popover>
  );
};

export { CommentBox };
