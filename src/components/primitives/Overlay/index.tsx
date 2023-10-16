import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const OverlayContext = createContext('');

const useOverlayContext = () => {
  return useContext(OverlayContext);
};

const Overlay = forwardRef(
  (
    {
      isOpen,
      triggerRef,
      placement,
      handleClose,
      offset = 0,
      style,
      children,
      ...props
    }: any,
    ref: any
  ) => {
    const [overlayPosition, setOverlayPosition] = useState<any>({});
    const overlayRef = useRef<any>();

    useEffect(() => {
      if (isOpen && triggerRef.current && overlayRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const overlayRect = overlayRef.current.getBoundingClientRect();

        let left, top;

        switch (placement) {
          case 'top':
            left =
              triggerRect.left -
              overlayRect.left +
              triggerRect.width / 2 -
              overlayRect.width / 2;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'right':
            left = triggerRect.right - overlayRect.left + offset;
            top =
              triggerRect.top + triggerRect.height / 2 - overlayRect.height / 2;
            break;

          case 'left':
            left = triggerRect.left - overlayRect.width - offset;
            top =
              triggerRect.top + triggerRect.height / 2 - overlayRect.height / 2;
            break;

          case 'bottom':
            left =
              triggerRect.left -
              overlayRect.left +
              triggerRect.width / 2 -
              overlayRect.width / 2;
            top = triggerRect.bottom + offset;
            break;

          case 'top right':
            left = triggerRect.left - overlayRect.left;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'top left':
            left = triggerRect.right - overlayRect.left - overlayRect.width;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'bottom right':
            left = triggerRect.left - overlayRect.left;
            top = triggerRect.bottom + offset;
            break;

          case 'bottom left':
            left = triggerRect.right - overlayRect.left - overlayRect.width;
            top = triggerRect.bottom + offset;
            break;

          case 'right top':
            left = triggerRect.right - overlayRect.left + offset;
            top = triggerRect.top - overlayRect.height + triggerRect.height;
            break;

          case 'right bottom':
            left = triggerRect.right - overlayRect.left + offset;
            top = triggerRect.bottom - triggerRect.height;
            break;

          case 'left top':
            left =
              triggerRect.left - overlayRect.left - overlayRect.width - offset;
            top = triggerRect.top - overlayRect.height + triggerRect.height;
            break;

          case 'left bottom':
            left =
              triggerRect.left - overlayRect.left - overlayRect.width - offset;
            top = triggerRect.bottom - triggerRect.height;
            break;

          default:
            left = triggerRect.left;
            top = triggerRect.bottom;
        }

        setOverlayPosition({ left, top });
      } else {
        setOverlayPosition({});
      }
    }, [isOpen, triggerRef, placement, offset, overlayRef]);

    if (!isOpen) {
      return null;
    }

    return (
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
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';

export { Overlay, useOverlayContext };
