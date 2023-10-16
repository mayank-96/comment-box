import React, { useEffect } from 'react';
import { useSelectContext } from './Select';
import { useSelectOptionContext } from './SelectOptions';

const SelectItem = ({ children, value, selectedStyle, ...props }: any) => {
  const {
    defaultValue,
    handleClose,
    setSelectText,
    handleChange,
    setIsOpen,
    defaultDone,
    setDefaultDone,
  } = useSelectContext();

  const {} = useSelectOptionContext();

  useEffect(() => {
    if (defaultValue === value && !defaultDone) {
      setSelectText({
        value: value,
        children: children,
        selectedStyle: selectedStyle,
      });
      setIsOpen(false);
      setDefaultDone(true);
    }
  }, []);

  const handleOptionClick = (e: any) => {
    setSelectText({
      value: value,
      children: children,
      selectedStyle: selectedStyle,
    });
    handleClose();
    handleChange(value);
  };

  return (
    <li
      style={{
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        padding: 8,
      }}
      {...props}
      key={value}
      onClick={handleOptionClick}
    >
      {children}
    </li>
  );
};

export { SelectItem };
