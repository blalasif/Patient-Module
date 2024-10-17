import * as Yup from 'yup';

const ChangePasswordSchema = Yup.object({
    question: Yup.string().required('Security question is required'),
    answer: Yup.string().required('Answer is required'),
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
});

export default ChangePasswordSchema