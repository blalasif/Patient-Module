'use client'
import React, { useState } from 'react';
import ButtonStyled from '@/common/components/button/Button';
import InputFieldsimple from '../InputField/InputFieldsimple';
import CustomInputField from '../customInputFieldDropdown/CustomInputField';
import { useFormik } from 'formik';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import SignupSchema from '@/validationSchemas/signUpSchema/SignUpSchema'
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '@/redux/slices/signupSlice';

const SignUP = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();
    const signupData = useSelector((state) => state.signup.signupData);
    // Formik hook for handling form state and validation
    const formik = useFormik({
        initialValues: {
            firstName: signupData.firstName || '',
            lastName: signupData.lastName || '',
            email: signupData.email || '',
            gender: signupData.gender || '',
            dateOfBirth: signupData.dateOfBirth || '',
        },
        validationSchema: SignupSchema,
        onSubmit: (values) => {

            const formattedValues = {
                ...values,
                dateOfBirth: typeof values.dateOfBirth === 'object' && values.dateOfBirth instanceof Date
                    ? values.dateOfBirth.toISOString()
                    : values.dateOfBirth,
            };

            dispatch(setSignupData(formattedValues))
            setSelectedValue('')
            router.push('/account-details')
        }
    });

    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

    const handleDropdownSelect = (value, name) => {
        setFieldValue(value, name);
        setSelectedValue(value);
    };



    return (
        <div className='flex justify-center'>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[320px] md:w-[564px] sm:max-w-[550px] lg:max-w-[544px] mt-5'
            >
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col gap-5">
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="Enter Your First Name"
                                label="First Name"
                                name="firstName"
                                required
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.firstName}
                                touched={touched.firstName}
                            />
                            {errors.firstName && touched.firstName ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.firstName} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="Enter Your Last Name"
                                label="Last Name"
                                name="lastName"
                                required
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.lastName}
                                touched={touched.lastName}
                            />
                            {errors.lastName && touched.lastName ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.lastName} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="Enter Your email address"
                                label="Email"
                                type="email"
                                name="email"
                                required
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
                            <CustomInputField
                                label="Sex Assigned At Birth"
                                placeholder="Select"
                                required
                                options={[
                                    { value: 'Male', label: 'Male' },
                                    { value: 'Female', label: 'Female' },
                                    { value: 'Others', label: 'Others' },
                                ]}
                                onSelect={(value) => handleDropdownSelect('gender', value)}
                                value={values.gender}
                                name="gender"
                                error={errors.gender}
                                touched={touched.gender}
                            />
                            {errors.gender && touched.gender ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.gender} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className="w-full">

                            <InputFieldsimple
                                label="Date of birth"
                                type="date"
                                placeholder="DD/MM/YYYY"
                                name="dateOfBirth"
                                required
                                additionalText="DD/MM/YYYY"
                                value={values.dateOfBirth}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.dateOfBirth}
                                touched={touched.dateOfBirth}
                            />
                            {errors.dateOfBirth && touched.dateOfBirth ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.dateOfBirth} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 mt-8'>
                    <ButtonStyled
                        width="w-full"
                        height="h-[55px]"
                        textColor="text-white"
                        background="bg-gradient-btn"
                        fontWeight="font-semibold"
                        rounded="rounded-[12px]"
                        text="Next"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default SignUP;
