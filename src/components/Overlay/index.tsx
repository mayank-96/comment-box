import React, {
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

const OverlayContext = createContext('');

export function useOverlayContext() {
  return useContext(OverlayContext);
}

const Overlay = forwardRef(
  (
    {
      isOpen,
      triggerRef,
      placement,
      handleClose,
      offset,
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

        // Calculate the position based on the placement
        switch (placement) {
          case 'top':
            left =
              triggerRect.left + triggerRect.width / 2 - overlayRect.width / 2;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'right':
            left = triggerRect.right + offset;
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
              triggerRect.left + triggerRect.width / 2 - overlayRect.width / 2;
            top = triggerRect.bottom + offset;
            break;

          case 'top right':
            left = triggerRect.left;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'top left':
            left = triggerRect.right - overlayRect.width;
            top = triggerRect.top - overlayRect.height - offset;
            break;

          case 'bottom right':
            left = triggerRect.left;
            top = triggerRect.bottom + offset;
            break;

          case 'bottom left':
            left = triggerRect.right - overlayRect.width;
            top = triggerRect.bottom + offset;
            break;

          case 'right top':
            left = triggerRect.right + offset;
            top = triggerRect.top - overlayRect.height + triggerRect.height;
            break;

          case 'right bottom':
            left = triggerRect.right + offset;
            top = triggerRect.bottom - triggerRect.height;
            break;

          case 'left top':
            left = triggerRect.left - overlayRect.width - offset;
            top = triggerRect.top - overlayRect.height + triggerRect.height;
            break;

          case 'left bottom':
            left = triggerRect.left - overlayRect.width - offset;
            top = triggerRect.bottom - triggerRect.height;
            break;

          default:
            // Default placement (you can adjust this)
            left = triggerRect.left;
            top = triggerRect.bottom;
        }

        setOverlayPosition({ left, top });
      }
    }, [isOpen, triggerRef, placement, offset]);

    if (!isOpen) {
      return null; // Render nothing when isOpen is false
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
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';

export default Overlay;
