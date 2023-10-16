import React, { createContext, forwardRef, useContext } from 'react';
import { createPortal } from 'react-dom';

const OverlayContext = createContext('');

const useOverlayContext = () => {
  return useContext(OverlayContext);
};

const Overlay = forwardRef(
  (
    {
      isOpen,
      handleClose,
      style,
      children,
      overlayPosition,
      overlayRef,
      ...props
    }: any,
    ref: any
  ) => {
    if (!isOpen) {
      return null;
    }

    return (
      <div>
        {createPortal(
          <div
            ref={ref}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              ...style,
            }}
            onClick={handleClose}
            {...props}
          >
            <div
              ref={overlayRef}
              style={{
                display: 'flex',
                position: 'absolute',
                left: overlayPosition.left,
                top: overlayPosition.top,
                opacity: overlayRef.current ? 1 : 0,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';

export { Overlay, useOverlayContext };
