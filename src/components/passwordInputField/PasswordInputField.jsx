import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import eyeOff from '@iconify/icons-fa/eye-slash';
import eye from '@iconify/icons-fa/eye';
import CustomCheckbox from '@/common/components/checkBox/CheckBox';

const PasswordInputField = ({
    required,
    label,
    placeholder = 'Enter your password',
    width = 'w-full',
    height = 'h-[55px]',
    rounded = 'rounded-xl',
    textColor = 'text-black',
    background = 'bg-sky-blue',
    strengthChecker = false,
    onChange,
    value,
    name,
    error,
    touched
}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [strength, setStrength] = useState(0);
    const [requirements, setRequirements] = useState({
        length: false,
        uppercase: false,
        number: false,
        specialChar: false,
        noForbiddenWords: false
    });

    const forbiddenWords = ['password', 'blockmedpro'];

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        if (strengthChecker && value) {
            evaluateStrength(value);
        }
    }, [value, strengthChecker]);

    const evaluateStrength = (password) => {
        const lowerPassword = password.toLowerCase();
        const conditions = {
            length: password.length >= 10,
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password),
            specialChar: /[^a-zA-Z0-9]/.test(password),
            noForbiddenWords: !forbiddenWords.some(word => lowerPassword.includes(word))
        };

        setRequirements(conditions);

        let score = 0;
        if (conditions.length) score += 1;
        if (conditions.uppercase) score += 1;
        if (conditions.number) score += 1;
        if (conditions.specialChar) score += 1;
        if (conditions.noForbiddenWords) score += 1;

        score = Math.min(score, 5); // Cap score at 5

        setStrength(score);
    };

    const getStrengthLabel = () => {
        switch (strength) {
            case 0:
            case 1:
                return 'Very Weak';
            case 2:
                return 'Weak';
            case 3:
                return 'Moderate';
            case 4:
                return 'Strong';
            case 5:
                return 'Very Strong';
            default:
                return '';
        }
    };

    // Conditional styles for error states
    const bgColor = (error && touched) ? 'bg-inputErrBg' : background;
    const borderColor = (error && touched) ? 'border-red' : 'border-none';
    const labelColor = (error && touched) ? 'text-red' : 'text-fade-blue';
    const displayPlaceholder = (error && touched) ? '' : placeholder; // Hide placeholder if error
    const inputClass = `w-full h-full focus:outline-none ps-5 ${rounded} ${textColor} ${bgColor} ${borderColor}`;

    return (
        <div className="flex flex-col">
            {label && (
                <label className={`mb-2 font-bold ${labelColor}`}>
                    {label} {required && <span className="text-red">*</span>}
                </label>
            )}
            <div className={`relative ${width} ${height} ${rounded} ${bgColor} ${borderColor} border ${textColor}`}>
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    className={`w-full h-full pr-12 focus:outline-none ps-5 ${rounded} ${textColor} ${bgColor} ${borderColor}`} // Added pr-12 to create space for icon
                    placeholder={displayPlaceholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    aria-invalid={error && touched ? 'true' : 'false'}
                    aria-describedby={error && touched ? 'password-error' : undefined}
                />
                <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer sm:pr-4 md:pr-5"
                    onClick={togglePasswordVisibility}
                >
                    <Icon
                        icon={passwordVisible ? eye : eyeOff}
                        className="w-5 h-5 text-black"
                    />
                </div>
            </div>
            {strengthChecker && value && (
                <>
                    <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-2 rounded-full bg-gray-200">
                            <div
                                className="h-full rounded-full transition-all duration-300"
                                style={{
                                    width: `${(strength / 5) * 100}%`,
                                    backgroundColor: strength < 2 ? 'red' : strength < 4 ? 'orange' : 'green'
                                }}
                            />
                        </div>
                        <div className="text-sm ml-2">
                            {getStrengthLabel()}
                        </div>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm">
                        <li className="flex items-center">
                            <CustomCheckbox
                                label="At least 10 characters long"
                                checked={requirements.length}
                                onChange={() => { }}
                            />
                        </li>
                        <li className="flex items-center">
                            <CustomCheckbox
                                label="At least one uppercase letter"
                                checked={requirements.uppercase}
                                onChange={() => { }}
                            />
                        </li>
                        <li className="flex items-center">
                            <CustomCheckbox
                                label="At least one number"
                                checked={requirements.number}
                                onChange={() => { }}
                            />
                        </li>
                        <li className="flex items-center">
                            <CustomCheckbox
                                label="Contains special character"
                                checked={requirements.specialChar}
                                onChange={() => { }}
                            />
                        </li>
                        <li className="flex items-center">
                            <CustomCheckbox
                                label="Cannot contain the words'Password'or'BlockMed Pro'"
                                checked={requirements.noForbiddenWords}
                                onChange={() => { }}
                                className="flex-grow"
                            />
                        </li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default PasswordInputField;
