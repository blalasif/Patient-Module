import React from 'react';

const ResendButton = ({ disabled, onClick }) => {
    const buttonStyles = {
        textDecoration: 'underline',
        textDecorationThickness: '1px',
        textUnderlineOffset: '4px',
    };

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`pb-1 font-thin lg:font-medium ${disabled ? 'text-light-gray opacity-50 cursor-not-allowed' : 'text-gray opacity-100 cursor-pointer'}`}
            style={buttonStyles}
        >
            Resend
        </button>
    );
};

export default ResendButton;
