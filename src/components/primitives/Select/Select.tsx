import React, {
  useState,
  useRef,
  createContext,
  useContext,
  useEffect,
} from 'react';

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
  const [selectedText, setSelectText] = useState<any>({});
  const [isOpen, setIsOpen] = useState(false);
  const [defaultDone, setDefaultDone] = useState(false);

  useEffect(() => {
    if (defaultValue && !defaultDone) {
      setIsOpen(true);
    }
  }, []);

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
          defaultValue,
          setIsOpen,
          defaultDone,
          setDefaultDone,
        }}
      >
        {children}
      </SelectContext.Provider>
    </div>
  );
};

export { Select, useSelectContext };
