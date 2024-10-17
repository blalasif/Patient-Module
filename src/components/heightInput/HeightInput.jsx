
// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
// import Image from 'next/image';

// const separatorLineSrc = '/assets/svg/separator-line.svg';
// const dropdownIconSrc = '/assets/svg/down-icon.svg';

// const DropDownButton = ({
//     label,
//     placeholder,
//     options,
//     value,
//     onChange,
//     required,
//     rounded,
//     error,
//     touched
// }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [inputValue, setInputValue] = useState('');
//     const [selectedOption, setSelectedOption] = useState('');

//     const dropdownRef = useRef(null);

//     // Set default values based on label or existing value
//     useEffect(() => {
//         if (value) {
//             const [input, option] = value.split(' ');
//             setInputValue(input || '');
//             setSelectedOption(option || (label === 'Height' ? 'Inches' : 'lbs'));
//         } else {
//             setInputValue('');
//             setSelectedOption(label === 'Height' ? 'Inches' : 'lbs');
//         }
//     }, [value, label]);

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//         onChange(`${inputValue} ${option}`);
//     };

//     const handleButtonClick = (event) => {
//         event.preventDefault();
//         setIsOpen(!isOpen);
//     };

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     const handleInputChange = (e) => {
//         setInputValue(e.target.value);
//         onChange(`${e.target.value} ${selectedOption}`);
//     };

//     const bgColor = (error && touched) ? 'bg-inputErrBg' : 'bg-sky-blue';
//     const borderColor = (error && touched) ? 'border-red' : 'border-none';
//     const labelColor = (error && touched) ? 'text-red' : 'text-fade-blue';
//     const displayPlaceholder = (error && touched) ? '' : placeholder;

//     return (
//         <>
//             <div className={`font-bold ${labelColor} pb-2`}>
//                 {label}
//                 {required && <span className='text-red'>*</span>}
//             </div>
//             <div ref={dropdownRef} className={`relative w-full h-[55px] ${bgColor} ${rounded} border ${borderColor} p-1 flex items-center`}>
//                 <input
//                     type="text"
//                     placeholder={displayPlaceholder}
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     className={`w-[calc(100%-60px)] h-full ps-5 text-gray-400 ${bgColor} placeholder-gray-500 text-base outline-none pr-0 cursor-pointer rounded-lg`}
//                 />
//                 <div className="h-full flex items-center mx-12">
//                     <Image
//                         src={separatorLineSrc}
//                         alt="Separator Line"
//                         width={1}
//                         height={39}
//                         className="h-full"
//                     />
//                 </div>
//                 <div className="relative w-[50px] h-full flex-shrink-0">
//                     <button
//                         type="button"
//                         onClick={handleButtonClick}
//                         className={`w-full h-full bg-transparent rounded-md flex items-center justify-end pr-6 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 cursor-pointer ${rounded}`}
//                     >
//                         <span className="text-fade-blue text-right">{selectedOption}</span>
//                         <Image
//                             src={dropdownIconSrc}
//                             alt="Dropdown Icon"
//                             width={12}
//                             height={11}
//                             className={`transition-transform duration-150 ml-1 ${isOpen ? 'transform rotate-180' : ''}`}
//                         />
//                     </button>
//                     {isOpen && (
//                         <div
//                             className={`absolute top-full right-0 mt-1 w-[109px] shadow-md bg-white text-black ${rounded}`}
//                         >
//                             {options.map((option, index) => (
//                                 <div
//                                     key={index}
//                                     onClick={() => handleOptionClick(option)}
//                                     className={`text-h6 font-medium flex justify-center py-2 cursor-pointer ${index === 0 ? 'rounded-t-xl' : ''} ${index === options.length - 1 ? 'rounded-b-xl' : ''} ${index !== options.length - 1 ? 'border-b-2 border-sky-blue' : ''} ${selectedOption === option ? 'bg-sky-blue' : 'hover:bg-sky-blue'}`}
//                                 >
//                                     {option}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// };

// DropDownButton.propTypes = {
//     label: PropTypes.string.isRequired,
//     placeholder: PropTypes.string,
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     value: PropTypes.string,
//     onChange: PropTypes.func.isRequired,
//     required: PropTypes.bool,
//     rounded: PropTypes.string,
//     error: PropTypes.string,
//     touched: PropTypes.bool,
// };

// export default DropDownButton;

'use client';
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const separatorLineSrc = '/assets/svg/separator-line.svg';
const dropdownIconSrc = '/assets/svg/down-icon.svg';

const DropDownButton = ({
    label,
    placeholder,
    options,
    value,
    onChange,
    required,
    rounded,
    error,
    touched
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    const dropdownRef = useRef(null);

    useEffect(() => {
        if (value) {
            const [input, option] = value.split(' ');
            setInputValue(input || '');
            setSelectedOption(option || (label === 'Height' ? 'Inches' : 'lbs'));
        } else {
            setInputValue('');
            setSelectedOption(label === 'Height' ? 'Inches' : 'lbs');
        }
    }, [value, label]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange(`${inputValue} ${option}`);
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        onChange(`${e.target.value} ${selectedOption}`);
    };

    const bgColor = (error && touched) ? 'bg-inputErrBg' : 'bg-sky-blue';
    const borderColor = (error && touched) ? 'border-red' : 'border-none';
    const labelColor = (error && touched) ? 'text-red' : 'text-fade-blue';
    const displayPlaceholder = (error && touched) ? '' : placeholder;

    return (
        <>
            <div className={`font-bold ${labelColor} pb-2`}>
                {label}
                {required && <span className='text-red'>*</span>}
            </div>
            <div ref={dropdownRef} className={`relative w-full h-[55px] ${bgColor} ${rounded} border ${borderColor} p-1 flex items-center`}>
                <input
                    type="text"
                    placeholder={displayPlaceholder}
                    value={inputValue}
                    onChange={handleInputChange}
                    className={`w-[calc(100%-60px)] h-full ps-5 text-gray-400 ${bgColor} placeholder-gray-500 text-base outline-none pr-0 cursor-pointer rounded-lg`}
                />
                <div className="h-full flex items-center mx-12">
                    <Image
                        src={separatorLineSrc}
                        alt="Separator Line"
                        width={1}
                        height={39}
                        className="h-full"
                    />
                </div>
                <div className="relative w-[50px] h-full flex-shrink-0">
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className={`w-full h-full bg-transparent rounded-md flex items-center justify-end pr-6 transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-gray-600 cursor-pointer ${rounded}`}
                    >
                        <span className="text-fade-blue text-right">{selectedOption}</span>
                        <Image
                            src={dropdownIconSrc}
                            alt="Dropdown Icon"
                            width={12}
                            height={11}
                            className={`transition-transform duration-150 ml-1 ${isOpen ? 'transform rotate-180' : ''}`}
                        />
                    </button>
                    {isOpen && (
                        <div
                            className={`absolute top-full right-0 mt-1 w-[109px] shadow-md bg-white text-black ${rounded}`}
                        >
                            {options.map((option, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`text-h6 font-medium flex justify-center py-2 cursor-pointer ${index === 0 ? 'rounded-t-xl' : ''} ${index === options.length - 1 ? 'rounded-b-xl' : ''} ${index !== options.length - 1 ? 'border-b-2 border-sky-blue' : ''} ${selectedOption === option ? 'bg-sky-blue' : 'hover:bg-sky-blue'}`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

DropDownButton.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    rounded: PropTypes.string,
    error: PropTypes.string,
    touched: PropTypes.bool,
};

export default DropDownButton;
