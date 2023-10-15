import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/Select.module.css';

function Select(props: any) {
  const [defaultSelectText, setDefaultSelectText] = useState('');
  const [showOptionList, setShowOptionList] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    // Add Event Listener to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener('mousedown', handleClickOutside);

    setDefaultSelectText(props.defaultText);

    return () => {
      // Remove the event listener on component unmounting
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [props.defaultText]);

  const handleClickOutside = (e) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(e.target) &&
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text')
    ) {
      setShowOptionList(false);
    }
  };

  const handleListDisplay = () => {
    setShowOptionList((prevState) => !prevState);
  };

  const handleOptionClick = (e) => {
    setDefaultSelectText(e.target.getAttribute('data-name'));
    setShowOptionList(false);
  };

  const { optionsList } = props;

  return (
    <div className={`${styles.customSelectContainer}`} ref={selectRef}>
      <div
        className={
          showOptionList ? styles.selectedTextActive : styles.selectedText
        }
        onClick={handleListDisplay}
      >
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className={`${styles.selectoptions}`}>
          {optionsList.map((option: any) => (
            <li
              className={`${styles.customSelectOption}`}
              data-name={option.name}
              key={option.id}
              onClick={handleOptionClick}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
