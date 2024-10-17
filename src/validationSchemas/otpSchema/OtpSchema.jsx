
import * as Yup from 'yup';

// Validation Schema using Yup
export const OtpSchema = Yup.object().shape({
    otp: Yup.array()
        .of(Yup.string().length(1, 'Each field must contain a single digit'))
        .test('all-or-none', 'Please fill out all the fields', value => {
            // Ensure value is always an array of strings
            const otpArray = Array.isArray(value) ? value : [];

            // Ensure every item in otpArray is a string
            if (otpArray.some(item => typeof item !== 'string')) {
                return false;
            }

            // Check if all fields are filled or none are filled
            const filledCount = otpArray.filter(field => field.trim().length > 0).length;
            return filledCount === 0 || filledCount === otpArray.length;
        })
});



