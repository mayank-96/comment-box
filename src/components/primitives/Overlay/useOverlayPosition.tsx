import { useState, useEffect, useRef } from 'react';

function useOverlayPosition({ triggerRef, placement, offset, isOpen }: any) {
  const [overlayPosition, setOverlayPosition] = useState({ top: 0, left: 0 });

  const overlayRef = useRef<any>(null);

  const updatePosition = () => {
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
      setOverlayPosition({ left: 0, top: 0 });
    }
  };

  useEffect(() => {
    updatePosition();
  }, [triggerRef, placement, offset, isOpen]);

  return { overlayPosition, overlayRef };
}

export default useOverlayPosition;
