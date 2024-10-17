import React from 'react';

const StyledHeadingH3 = ({ text, textColor, required, extraClass = '' }) => {
    return (
        <h3 className={`text-h3 font-bold font-Inter ${textColor} ${extraClass}`}>
            {text}
            {required && <span className="text-red">*</span>}
        </h3>
    );
};

export default StyledHeadingH3;

