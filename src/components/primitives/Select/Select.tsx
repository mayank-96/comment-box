import { mergeRefs } from '@/utils/mergeRef';
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
  handleChange = () => {},
  style,
  isOpen: isOpenProp,
  handleClose: handleCloseProp = () => {},
  triggerRef: triggerRefProp,
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

  const triggerRef = useRef(triggerRefProp);

  useEffect(() => {
    if (triggerRefProp && triggerRefProp.current) {
      triggerRef.current = triggerRefProp.current;
    }
  }, [triggerRefProp]);

  const handleClose = () => {
    setIsOpen(false);
    handleCloseProp();
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
          triggerRef: triggerRef,
          isOpen: isOpenProp || isOpen,
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
