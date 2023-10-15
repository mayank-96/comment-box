import React, { useState, useRef, createContext, useContext } from 'react';

const SelectContext = createContext<any>('');
const useSelectContext = () => {
  return useContext(SelectContext);
};

const Select = ({ children, defaultValue, handleChange, ...props }: any) => {
  const [defaultSelectText, setDefaultSelectText] = useState(
    defaultValue ?? 'Select'
  );
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
    <div ref={selectRef} {...props}>
      <SelectContext.Provider
        value={{
          defaultSelectText,
          triggerRef,
          isOpen,
          handleClose,
          handleOpen,
          handleChange,
          setDefaultSelectText,
        }}
      >
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export { Select, useSelectContext };
