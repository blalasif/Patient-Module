// CustomDropdown.js
'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const separatorLineSrc = '/assets/svg/separator-line.svg';
const dropdownIconSrc = '/assets/svg/down-icon.svg';

const CustomDropdown = ({ options, selectedOption, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        onSelect(value);
        setIsOpen(false);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative w-full h-full">
            <button
                type="button"
                onClick={handleButtonClick}
                className="relative w-full h-full bg-transparent rounded-md flex items-center justify-between px-4 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 cursor-pointer"
            >
                <span className="text-black">{selectedOption || placeholder}</span>
                <Image
                    src={dropdownIconSrc}
                    alt="Dropdown Icon"
                    width={16}
                    height={16}
                    className={`transition-transform duration-150 ${isOpen ? 'transform rotate-180' : ''}`}
                />
                {isOpen && (
                    <div className="absolute top-full right-0 mt-1 w-full rounded-xl shadow-md bg-white text-black">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                className={`px-4 py-2 ${selectedOption === option ? 'bg-sky-blue' : 'hover:bg-gray-700'} cursor-pointer`}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </button>
        </div>
    );
};

export default CustomDropdown;
