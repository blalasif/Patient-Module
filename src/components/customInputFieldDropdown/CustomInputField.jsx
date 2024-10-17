import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import CustomCheckbox from '@/common/components/checkBox/CheckBox';

const dropdownIconSrc = '/assets/svg/down-icon.svg';

const CustomInputField = ({
    label,
    width = 'w-full',
    height = 'h-[55px]',
    rounded = 'rounded-xl',
    textColor = 'text-black',
    background = 'bg-sky-blue',
    placeholder,
    options,
    required,
    onSelect,
    value,
    onChange,
    multipleCheck = false,
    error,
    touched,
    ...props
}) => {
    const [inputValue, setInputValue] = useState(value || '');
    const [selectedOptions, setSelectedOptions] = useState(new Set());
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setInputValue(value || '');

    }, [value]);

    const updateInputValue = (newSelection) => {
        const selectionString = newSelection.join(', ');
        setInputValue(selectionString);
    };

    const handleDropdownSelect = (selectedValue) => {
        if (multipleCheck) {
            const updatedSelection = new Set(selectedOptions);
            if (updatedSelection.has(selectedValue)) {
                updatedSelection.delete(selectedValue);
            } else {
                updatedSelection.add(selectedValue);
            }
            setSelectedOptions(updatedSelection);
            updateInputValue([...updatedSelection]);
            if (onSelect) onSelect([...updatedSelection]);
        } else {
            setInputValue(selectedValue);
            if (onSelect) onSelect(selectedValue);
            setIsOpen(false);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) onChange(e);
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const bgColor = (error && touched) ? 'bg-inputErrBg' : background;
    const borderColor = (error && touched) ? 'border-red' : 'border-transparent ';
    const labelColor = (error && touched) ? 'text-red' : 'text-fade-blue';
    const displayPlaceholder = (error && touched) ? '' : placeholder;

    return (
        <div className={`flex flex-col ${width}`} ref={dropdownRef}>
            <div className={`font-bold text-fade-blue pb-2 ${labelColor}`}>
                {label} {required && <span className="text-red">*</span>}
            </div>
            <div className={`relative ${height}`}>
                <input
                    type="text"
                    readOnly
                    placeholder={displayPlaceholder}
                    value={inputValue}
                    onClick={toggleDropdown}
                    onChange={handleInputChange}
                    className={`focus:outline-none cursor-pointer w-full h-full ps-4 ${rounded} ${textColor} ${bgColor} ${borderColor} border ${error && touched ? 'border-1' : 'border'}`}
                />
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                    <Image
                        src={dropdownIconSrc}
                        alt="Dropdown Icon"
                        width={11}
                        height={11}
                        className={`mr-4 font-bold transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </button>
                {isOpen && (
                    <div
                        className="custom-scrollbar absolute top-full right-0 mt-1 w-full max-h-60 rounded-b-2xl rounded-t-2xl shadow-md bg-white text-black z-10 overflow-y-auto"
                    >
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleDropdownSelect(option.value)}
                                className={`
                                    flex items-center gap-4 px-4 py-4 text-h6 text-black cursor-pointer
                                    ${index === 0 ? 'rounded-t-2xl' : ''} 
                                    ${index === options.length - 1 ? 'border-b-0' : 'border-b-2 border-border-sky'}
                                    hover:bg-sky-blue hover:text-black
                                    ${index < options.length - 1 ? 'hover:border-sky-blue' : ''}
                                `}
                            >
                                {multipleCheck && (
                                    <CustomCheckbox
                                        checked={selectedOptions.has(option.value)}
                                        onChange={() => handleDropdownSelect(option.value)}
                                        className="mr-2"
                                    />
                                )}
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

CustomInputField.propTypes = {
    label: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    rounded: PropTypes.string,
    textColor: PropTypes.string,
    background: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
    required: PropTypes.bool,
    onSelect: PropTypes.func,
    value: PropTypes.string,
    onChange: PropTypes.func,
    multipleCheck: PropTypes.bool
};

export default CustomInputField;
