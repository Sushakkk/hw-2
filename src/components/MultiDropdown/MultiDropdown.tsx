import React, { useState, useRef, useEffect } from 'react';
import Input from '../Input';
import ArrowDownIcon from '../icons/ArrowDownIcon/ArrowDownIcon'; // Импортируем компонент ArrowDownIcon
import './MultiDropDown.css';
import '../variables.css';

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  className,
  options,
  value,
  onChange,
  disabled = false,
  getTitle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOptionClick = (option: Option) => {
    const isSelected = value.some((selected) => selected.key === option.key);
    const newValue = isSelected
      ? value.filter((selected) => selected.key !== option.key)
      : [...value, option];
    onChange(newValue);
  };

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div ref={dropdownRef} className={`multi-dropdown ${className || ''}`}>
      <Input
        value={getTitle(value)}
        onChange={setFilter}
        afterSlot={<ArrowDownIcon color="secondary" />} // Используем ArrowDownIcon
        onClick={handleToggle}
        placeholder="Введите текст"
        disabled={disabled}
      />
      {isOpen && (
        <div className="dropdown-options">
          {filteredOptions.map((option) => (
            <div
              key={option.key}
              className={`dropdown-option ${
                value.some((selected) => selected.key === option.key) ? 'selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;
