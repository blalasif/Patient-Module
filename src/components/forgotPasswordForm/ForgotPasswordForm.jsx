'use client';
import React from 'react';
import InputFieldsimple from '../InputField/InputFieldsimple';
import ButtonStyled from '@/common/components/button/Button';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import { ForgotPasswordSchema } from '@/validationSchemas/forgotPasswordSchema/ForgotPasswordSchema';
import { usePostForgotPassword } from '@/hooks/api/usePostForgotPassword';

const initialValues = {
    email: '',
};

const ForgotPasswordForm = () => {
    const { mutate } = usePostForgotPassword()
    const router = useRouter();
    const { email } = useSelector((state) => state.signup.signupData);
    console.log("email from state:", email);

    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
        initialValues: initialValues,
        validationSchema: ForgotPasswordSchema,

        onSubmit: (values) => {
            console.log("Submitted values:", values);
            mutate(values, {
                onSuccess: () => {
                    resetForm();
                    router.push('/otp');
                },

            });


        }
    });

    return (



        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-3xl p-8 md:p-12 w-full max-w-[564px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px] my-6'
            >

                <div className='flex flex-col gap-5'>
                    <div className='w-full'>
                        <InputFieldsimple
                            type="email"
                            placeholder="Enter your email address"
                            label="Email"
                            name="email"
                            required
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={errors.email}
                            touched={touched.email}
                        />
                        {errors.email && touched.email && (
                            <div className='flex items-center gap-2 font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={errors.email} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        )}
                    </div>
                    <div>
                        <ButtonStyled
                            text="Recover Password"
                            type='submit'
                            className='w-full py-3 text-base sm:text-lg md:text-xl' // Responsive text size
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
