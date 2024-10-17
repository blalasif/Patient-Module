
'use client';
import React, { useState } from 'react';
import DateInputField from '../dateInputField/DateInputField';

const InputFieldsimple = ({
    label,
    type = 'text',
    width = 'w-full',
    height = 'h-[55px]',
    rounded = 'rounded-xl',
    textColor = 'text-black',
    background = 'bg-sky-blue',
    placeholder,
    required = false,
    additionalText,
    onChange,
    name,
    value,
    className = '',
    icon,
    error,
    touched
}) => {
    const [startDate, setStartDate] = useState(value || '');

    const handleDateChange = (date) => {
        setStartDate(date);
        if (onChange) {
            onChange({ target: { name, value: date } });
        }
    };

    const bgColor = (error && touched) ? 'bg-inputErrBg' : background;
    const borderColor = (error && touched) ? 'border-red' : 'border-none';
    const labelColor = (error && touched) ? 'text-red' : 'text-fade-blue';
    const displayPlaceholder = (error && touched) ? '' : placeholder;

    return (
        <div className={`flex flex-col ${className}`}>
            <div className={`font-bold  ${labelColor}`}>
                {label}
                {required && <span className='text-red ml-1'>*</span>}
            </div>
            {type === 'date' && additionalText && (
                <div className='text-sm mb-2 text-gray '>
                    {additionalText}
                </div>
            )}
            {type === 'date' ? (
                <DateInputField
                    width={width}
                    height={height}
                    rounded={rounded}
                    textColor={textColor}
                    background={bgColor}
                    placeholder={placeholder}
                    selectedDate={startDate}
                    onChange={handleDateChange}
                    className={`border ${borderColor}`}
                />
            ) : (
                <div className='relative'>
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={displayPlaceholder}
                        className={`focus:outline-none ps-5 ${width} ${height} ${rounded} ${textColor} ${bgColor} ${borderColor} border ${className}`}
                    />
                    {icon && (
                        <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                            {icon}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default InputFieldsimple;
