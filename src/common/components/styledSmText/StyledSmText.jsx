import React from 'react';
import PropTypes from 'prop-types';

const StyledSmText = ({ text, textColor, style, className,fontSize,fontWeight }) => {
    return (
        <p
            className={`text-sm font-Inter ${textColor} ${fontSize} ${className} ${fontWeight}`} // Ensure proper spacing and merging of class names
            style={style}
        >
            {text}
        </p>
    );
};

StyledSmText.propTypes = {
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

export default StyledSmText;
