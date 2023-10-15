import React, { useState, useRef, createContext, useContext } from 'react';
import styles from '@/styles/Select.module.css';

const SelectContext = createContext<any>('');

export function useSelectContext() {
  return useContext(SelectContext);
}

function Select({ children, defaultValue, ...props }: any) {
  const [defaultSelectText, setDefaultSelectText] = useState(
    defaultValue ?? 'Select'
  );
  const [showOptionList, setShowOptionList] = useState(false);

  const selectRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = (e: any) => {
    setShowOptionList(false);
  };

  const handleListDisplay = () => {
    setShowOptionList((prevState) => !prevState);
  };

  const handleOptionClick = (e: any) => {
    setDefaultSelectText(e.target.getAttribute('data-name'));
    handleClickOutside(e);
  };

  return (
    <div className={`${styles.customSelectContainer}`} ref={selectRef}>
      <SelectContext.Provider
        value={{
          defaultSelectText,
          handleListDisplay,
          triggerRef,
          showOptionList,
          handleClickOutside,
          handleOptionClick,
        }}
      >
        {children}
      </SelectContext.Provider>
    </div>
  );
}

export default Select;
