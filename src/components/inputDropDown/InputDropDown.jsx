import React from 'react';

const InputDropDown = ({
    label,
    width,
    height,
    rounded,
    textColor,
    background,
    placeholder,
    options,
    isDropdown,
    required
}) => {
    return (
        <div className={`flex flex-col ${width}`}>
            <div className="font-bold text-fade-blue pb-2">
                {label} {required && <span className="text-red">*</span>}
            </div>
            <div className={`relative ${height}`}>
                {isDropdown ? (
                    <div className={`relative ${rounded} ${textColor} ${background} w-full h-full`}>
                        <select
                            className={`block w-full h-full ps-5  pr-5 py-2 appearance-none bg-transparent border-gray-300 rounded focus:outline-none ${textColor} ${background}`}
                            defaultValue=""
                        >
                            <option value="" disabled>{placeholder}</option>
                            {options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <svg
                            className="absolute top-1/2 right-6 transform -translate-y-1/2"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L5 5L9 1"
                                stroke="#6B7280"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                ) : (
                    <input
                        type="text"
                        placeholder={placeholder}
                        className={`focus:outline-none ps-5 ${rounded} ${textColor} ${background} w-full h-full`}
                    />
                )}
            </div>
        </div>
    );
}

export default InputDropDown;


//with custom dropdown
    