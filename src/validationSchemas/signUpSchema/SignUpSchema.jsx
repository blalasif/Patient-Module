import * as Yup from 'yup';

const signupSchema = Yup.object({
    firstName: Yup.string()

        .required('First Name is required'),
    lastName: Yup.string()

        .required('Last Name is required'),
    email: Yup.string()
        .email("Invalid email format")
        .matches(/.+\..+/, "Email must contain a '.' character")
        .matches(/@(yahoo\.com|gmail\.com|hotmail\.com)$/, "Email must be from yahoo, gmail, or hotmail")
        .required("Email is required"),
    gender: Yup.string().required('Gender at birth is required'),

    dateOfBirth: Yup.date()
        .transform(function (value, originalValue) {
            if (this.isType(value)) return value;
            const parsedDate = Date.parse(originalValue);
            return !isNaN(parsedDate) ? new Date(parsedDate) : null;
        })
        .required('Please enter a valid Date of Birth')
        .nullable(),

    

});

export default signupSchema;

