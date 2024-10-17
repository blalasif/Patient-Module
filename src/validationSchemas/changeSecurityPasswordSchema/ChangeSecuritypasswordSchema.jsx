import * as Yup from 'yup';

const ChangeSecurityPasswordSchema = Yup.object({
    old_password: Yup.string()
        .required("Old Password is required"),

    new_password: Yup.string()
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
        .required("New Password is required"),

    confirm_password: Yup.string()
        .oneOf([Yup.ref('new_password'), null], "Passwords must match")
        .required("Confirm Password is required"),
});

export default ChangeSecurityPasswordSchema;
