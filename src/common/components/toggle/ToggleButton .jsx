
import React from 'react';
import PropTypes from 'prop-types';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';

const ToggleButton = ({ checked, onChange, label }) => {
    return (
        <label className="inline-flex pt-2 items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only peer"
            />
            <div className="relative w-[33px] h-[18px] bg-[#E3E3E3] peer-checked:bg-[#B1DAFF] peer-focus:outline-none rounded-full transition-colors peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#0077E4] peer-checked:after:bg-[#0077E4] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black after:rounded-full after:h-[14px] after:w-[14px] after:transition-all after:border-none dark:border-gray-600"></div>
            <StyledHeadingH6 className="ps-6" fontWeight="font-bold" text={label} textColor="text-blue" />
        </label>
    );
};

// PropTypes for ToggleButton
ToggleButton.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default ToggleButton;

