
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateInputField = ({
    width,
    height,
    rounded,
    textColor,
    bgColor,
    background,
    placeholder,
    selectedDate,
    onChange,
    className
}) => {


    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            placeholderText={placeholder}
            background={bgColor}
            customInput={
                <input
                    type='text'
                    className={`w-full ${className} px-4 ${textColor} ${background}`} // Apply Tailwind classes
                    style={{ width, height, borderRadius: rounded, boxSizing: 'border-box' }} // Apply inline styles
                />
            }
        />
    );
};

export default DateInputField;



