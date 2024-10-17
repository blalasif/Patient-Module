import * as Yup from 'yup'

export const LoginInSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email format")
        .matches(/.+\..+/, "Email must contain a '.' character")
        .required("Email is required"),

    password: Yup.string()
        .required("Password is required"),
})