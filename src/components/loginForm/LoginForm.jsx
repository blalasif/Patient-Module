import React, { useState } from 'react';
import InputFieldsimple from '../InputField/InputFieldsimple';
import PasswordInputField from '../passwordInputField/PasswordInputField';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import Link from 'next/link';
import Image from 'next/image';
import ButtonStyled from '@/common/components/button/Button';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import { useFormik } from 'formik';
import { LoginInSchema } from '@/validationSchemas/loginSchema/LoginSchema';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import RecaptchaComponent from '../recaptcha/RecaptchaComponent';
import { toast } from 'react-toastify';
import { useLogin } from '@/hooks/api/useLogin';
import { useRouter } from 'next/navigation';


const initialValues = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const { mutate } = useLogin();

    const router = useRouter();

    const [recaptchaToken, setRecaptchaToken] = useState(null);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginInSchema,
        onSubmit: (values) => {
            if (!recaptchaToken) {
                toast.error("Please complete the reCAPTCHA verification.", { autoClose: 3000 });
                return;
            }

            mutate(values, {
                onSuccess: () => {
                    resetForm();
                    router.push('/home')

                },
            });
        }
    });

    const handleRecaptchaVerify = (token) => {
        setRecaptchaToken(token);
    };

    return (




        <form onSubmit={handleSubmit} className='bg-white shadow-lg w-full   lg:px-12 md:px-7 px-7  py-7 rounded-3xl'>
            <div className="w-full flex flex-col gap-5">
                <div>
                    <StyledHeadingH2 text="Log In" textColor="text-blue" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <div className="w-full">
                        <InputFieldsimple
                            type="email"
                            placeholder="Enter your email address"
                            label="Email address"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                        {errors.email && touched.email ? (
                            <div className='flex items-center gap-2 font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={errors.email} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}
                    </div>
                    <div className="w-full">
                        <PasswordInputField
                            placeholder="Enter your password"
                            label="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            touched={touched.password}
                            error={errors.password}
                        />
                        {errors.password && touched.password ? (
                            <div className='flex items-center gap-2 font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='Error message' width={20} height={20} />
                                <StyledSmText text={errors.password} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}
                    </div>
                    <Link className="w-fit" href="/forgot-password">
                        <StyledHeadingH6 fontWeight="font-semibold" text="Forgot Password ?" textColor="text-dark-sky" />
                    </Link>
                </div>
            </div>
            <div className=' pt-5'>
                <RecaptchaComponent onVerify={handleRecaptchaVerify} />
            </div>
            <div className='btn mt-4'>
                <ButtonStyled
                    text="Login"
                    type="submit"
                />
            </div>
            <div className='flex text-gray justify-center items-center gap-2 pt-5 w-full'>
                <div className='flex-1'><hr className='w-full h-[1px] text-light-gray ' /></div>
                <div><p className='relative '>or</p></div>
                <div className='flex-1'><hr className='w-full h-[1px] text-light-gray' /></div>
            </div>
            <Link className="flex justify-center pt-2" href="/signup">
                <StyledHeadingH6 fontWeight='font-bold' className="underline-dark-sky" text="Create a new account" textColor="text-dark-sky" />
            </Link>
        </form>

    );
};

export default LoginForm;
