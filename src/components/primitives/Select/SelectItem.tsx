import React from 'react';
import { useSelectContext } from './Select';
import { useSelectOptionContext } from './SelectOptions';

const SelectItem = ({ children, value, ...props }: any) => {
  const { defaultSelectText, handleClose, setDefaultSelectText, handleChange } =
    useSelectContext();

  const { activeItemStyling, itemStyling } = useSelectOptionContext();

  const handleOptionClick = (e: any) => {
    setDefaultSelectText(e.target.getAttribute('data-name'));
    handleClose();
    handleChange(value);
  };

  console.log(value, defaultSelectText);

  return (
    <li
      style={children === defaultSelectText ? activeItemStyling : itemStyling}
      {...props}
      data-name={children}
      key={value}
      onClick={handleOptionClick}
    >
      {children}
    </li>
  );
};

export { SelectItem };
