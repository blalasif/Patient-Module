import React, { useState, useRef, useEffect } from 'react';

const OTPInput = ({ index, value, onChange, isFirst, totalInputs, error }) => {
    const [borderColor, setBorderColor] = useState('border-transparent');
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFirst) {
            inputRef.current?.focus();
        }
    }, [isFirst]);

    useEffect(() => {
        if (error) {
            setBorderColor('border-red');
        } else if (value) {
            setBorderColor('border-dark-sky');
        } else if (isFirst) {
            setBorderColor('border-dark-sky');
        } else {
            setBorderColor('border-transparent');
        }
    }, [value, isFirst, error]);

    const handleChange = (e) => {
        const { value } = e.target;
        if (/^\d?$/.test(value)) {
            onChange(index, value);
            if (value && inputRef.current?.nextElementSibling) {
                inputRef.current.nextElementSibling.focus();
            } else if (!value && inputRef.current?.previousElementSibling) {
                inputRef.current.previousElementSibling.focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData('text');
        const digits = pastedData.replace(/\D/g, '').split('');

        digits.forEach((digit, idx) => {
            if (index + idx < totalInputs) {
                onChange(index + idx, digit);
            }
        });

        const lastInputIndex = Math.min(index + digits.length - 1, totalInputs - 1);
        const lastInput = document.querySelector(`[name="otp-input-${lastInputIndex}"]`);
        if (lastInput) {
            lastInput.focus();
        }
    };

    const handleFocus = () => {
        setBorderColor('border-dark-sky');
    };

    const handleBlur = () => {
        setBorderColor(value ? 'border-dark-sky' : 'border-transparent');
    };

    return (
        <input
            name={`otp-input-${index}`}
            type="text"
            value={value}
            onChange={handleChange}
            onPaste={handlePaste}
            ref={inputRef}
            maxLength="1"
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
                width: "72.5%",
                height: "60px",
                borderRadius: "1rem",
                textAlign: "center",
                outline: "none",
                fontSize: "20px",
                appearance: 'textfield'
            }}
            className={` rounded-2xl ${error ? 'bg-inputErrBg' : 'bg-sky-blue'} text-black border ${borderColor} outline-none text-center transition-all duration-300 ease-in-out`}
        />
    );
};

export default OTPInput;
