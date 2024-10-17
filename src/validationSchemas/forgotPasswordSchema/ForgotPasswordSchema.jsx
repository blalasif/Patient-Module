import * as Yup from 'yup'

export const ForgotPasswordSchema = Yup.object({
    email: Yup.string()

        .required("Email is required"),
})