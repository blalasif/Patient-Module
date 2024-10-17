import * as Yup from 'yup';

const EditProfileSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phonenumber: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    country: Yup.string().required('Required')
})

export default EditProfileSchema