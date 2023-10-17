import React, { useEffect } from 'react';
import { useSelectContext } from './Select';
import { useSelectOptionContext } from './SelectOptions';

const SelectItem = ({
  children,
  value,
  selectedStyle,
  onClick: userOnClick = () => {},
  ...props
}: any) => {
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
    userOnClick();
  };

  return (
    <li
      style={{
        display: 'flex',
        gap: 4,
        alignItems: 'center',
        color: 'var(--color-primary-text)',

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
