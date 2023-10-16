import React, { useState, useRef, createContext, useContext } from 'react';

const SelectContext = createContext<any>('');
const useSelectContext = () => {
  return useContext(SelectContext);
};

const Select = ({
  children,
  defaultValue,
  handleChange,
  style,
  ...props
}: any) => {
  const [selectedText, setSelectText] = useState<any>(defaultValue ?? {});
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div
      ref={selectRef}
      style={{
        borderRadius: 999,
        ...style,
      }}
      {...props}
    >
      <SelectContext.Provider
        value={{
          selectedText,
          triggerRef,
          isOpen,
          handleClose,
          handleOpen,
          handleChange,
          setSelectText,
        }}
      >
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export { Select, useSelectContext };
