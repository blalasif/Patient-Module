import React from 'react';
import '../../../../src/app/globals.css';

const CustomCheckbox = ({ label, checked, onChange }) => {
    const handleClick = () => {
        onChange(!checked);
    };

    return (
        <label className="flex items-center space-x-2 text-left text-sm font-normal relative cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={() => { }}
                className="absolute opacity-0 w-0 h-0"
            />
            <div
                onClick={handleClick}
                className={`checkbox-custom ${checked ? 'checked' : ''}`}
            ></div>
            <span className=" text-h6 text-blue">
                {label}
            </span>
        </label>
    );
};

export default CustomCheckbox;
