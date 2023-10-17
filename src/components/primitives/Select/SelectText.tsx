import React from 'react';
import { useSelectContext } from './Select';
import { Icon } from '@/components/primitives';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SelectText = ({
  style,
  children,
  dropDownIconStyle,
  dropDownIconSize = 18,
  ...props
}: any) => {
  const { isOpen, selectedText, handleOpen, triggerRef } = useSelectContext();
  return (
    <div
      onClick={handleOpen}
      ref={triggerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        paddingInline: 14,
        paddingBlock: 8,
        borderRadius: 100,
        backgroundColor: 'var(--color-neutral-8)',
        ...style,
        ...selectedText.selectedStyle,
      }}
      {...props}
    >
      {selectedText.children ? selectedText.children : children}
      {isOpen ? (
        <Icon
          as={ChevronUp}
          size={dropDownIconSize}
          style={{ ...dropDownIconStyle }}
        />
      ) : (
        <Icon
          as={ChevronDown}
          size={dropDownIconSize}
          style={{ ...dropDownIconStyle }}
        />
      )}
    </div>
  );
};

export { SelectText };
