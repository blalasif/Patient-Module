import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';

const RecaptchaComponent = ({ onVerify }) => {
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_TEST_SITE_KEY;

    const handleRecaptchaChange = (value) => {
        if (value) {
            setRecaptchaValue(value);
            onVerify(value);
        } else {
            setRecaptchaValue(null);
        }
    };

    return (

        <div className=" recaptcha w-full flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <ReCAPTCHA
                    sitekey={siteKey}
                    onChange={handleRecaptchaChange}
                />
            </div>
        </div>

    );
};

export default RecaptchaComponent;
