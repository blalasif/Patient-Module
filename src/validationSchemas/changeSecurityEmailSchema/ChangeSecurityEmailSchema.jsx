import * as Yup from 'yup';

const ChangeSecurityEmailSchema = Yup.object({
    new_email: Yup.string()
        .email("Invalid email format")
        .matches(/.+\..+/, "Email must contain a '.' character")
        .matches(/@(yahoo\.com|gmail\.com|hotmail\.com)$/, "Email must be from yahoo, gmail, or hotmail")
        .required("Email is required"),
    current_password: Yup.string().required("Current password is required")
})

export default ChangeSecurityEmailSchema