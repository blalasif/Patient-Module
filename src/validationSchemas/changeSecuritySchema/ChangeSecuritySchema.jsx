// validationSchema.js
import * as Yup from 'yup';

const ChangeSecuritySchema = Yup.object({
    securityQuestion1: Yup.string().required('Security question 1 is required'),
    answer1: Yup.string().required('Answer 1 is required'),
    securityQuestion2: Yup.string().required('Security question 2 is required'),
    answer2: Yup.string().required('Answer 2 is required'),
    securityQuestion3: Yup.string().required('Security question 3 is required'),
    answer3: Yup.string().required('Answer 3 is required'),
    currentPassword: Yup.string().required('Current password is required'),
});

export default ChangeSecuritySchema;
