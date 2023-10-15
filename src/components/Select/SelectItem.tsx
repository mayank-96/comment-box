import React from 'react';
import styles from '@/styles/Select.module.css';
import { useSelectContext } from '.';
function SelectItem({ children, value, ...props }: any) {
  const { handleOptionClick } = useSelectContext();
  return (
    <li
      className={`${styles.customSelectOption}`}
      data-name={value}
      key={value}
      onClick={handleOptionClick}
    >
      {children}
    </li>
  );
}

export default SelectItem;
