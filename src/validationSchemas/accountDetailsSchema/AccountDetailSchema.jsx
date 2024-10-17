import * as Yup from 'yup';

const AccountDetailSchema = Yup.object({

    userName: Yup.string()
        .min(6, "User Name must be at least 6 characters")
        .max(10, "User Name must not be greater than 10 characters")
        .required('User Name is required'),

    password: Yup.string()
        .min(10, "Password must be at least 10 characters long")
        .max(20, "Password must not be greater than 20 characters long")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
        .test('no-forbidden-words', "Password cannot contain the words 'Password' or 'BlockMed Pro'", value => {
            if (!value) return false;
            const forbiddenWords = ['password', 'blockmedpro'];
            return !forbiddenWords.some(word => value.toLowerCase().includes(word));
        })
        .required("Password is required"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords must match")
        .required("Confirm Password is required"),

    address: Yup.string()

        .required("Address is required"),



    city: Yup.string()
        .min(5, "City must be at least 5 characters")
        .max(13, "City must not be greater than  13 characters")
        .required("City is required"),


    postalCode: Yup.string()
        .matches(/^\d{5}(-\d{4})?$/, "Postal Code must be in the format: 12345 or 12345-6789") // Example for US postal codes
        .required("Postal Code is required"),

    securityQuestions: Yup.array().of(
        Yup.object().shape({
            question: Yup.string().required('Security question is required'),
            answer: Yup.string().required('Answer is required')
        })
    ).min(1, 'At least one security question is required'),

    country: Yup.string().required('Country location is required'),
    consultationLocation: Yup.object({
        country: Yup.string().required('Country is required'),
        phoneNumber: Yup.string()
            .required('Phone number is required')
            .matches(/^\+\d{7,20}$/, 'Phone number must be in international format, starting with + followed by 7 to 15 digits'),
        language: Yup.string().required('Preferred language is required')
    })
})

export default AccountDetailSchema