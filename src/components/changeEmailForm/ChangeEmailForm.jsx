'use client'
import React, { useState } from 'react'
import PasswordInputField from '../passwordInputField/PasswordInputField'
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2'
import ButtonStyled from '@/common/components/button/Button'
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6'
import InputFieldsimple from '../InputField/InputFieldsimple'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import { useFormik } from 'formik'
import ChangeSecurityEmailSchema from '@/validationSchemas/changeSecurityEmailSchema/ChangeSecurityEmailSchema'
import Image from 'next/image'


const ChangeEmailForm = () => {


    const formik = useFormik({
        initialValues: {
            new_email: '',
            current_password: ''
        },
        validationSchema: ChangeSecurityEmailSchema,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();

        }

    })


    const { values, errors, resetForm, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;




    return (
        <>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} action=""

                    className='bg-white shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[410px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


                >
                    <div className="w-full flex flex-col">
                        <div>
                            <StyledHeadingH2
                                className="text-2xl md:text-2xl lg:text-3xl"
                                text="Current Email Address" textColor="text-blue" />
                            <StyledHeadingH6  className='font-medium lg:font-bold py-3' text="Jhon123@gmail.com" textColor='text-gray' fontWeight='font-bold' />
                        </div>
                        <div className="w-full flex flex-col gap-5">

                            <div className="w-full">
                                <InputFieldsimple
                                    label="New email address"
                                    placeholder="Enter new email address"
                                    required={true}
                                    name="new_email"
                                    value={values.new_email}
                                    error={errors.new_email}
                                    touched={touched.new_email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.new_email && touched.new_email ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.new_email} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>

                            <div className="w-full">
                                <PasswordInputField
                                    label="Current password"
                                    placeholder="Enter Current Password"
                                    required={true}
                                    name="current_password"

                                    value={values.current_password}
                                    error={errors.current_password}
                                    touched={touched.current_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.current_password && touched.current_password ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.current_password} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}

                            </div>



                        </div>
                    </div>

                    <div className='pt-1.5 text-gray'>
                        <StyledSmText text='To save your updated email address, please enter your current
password'  fontWeight="font-normal" />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-2 btn mt-5'>
                        <ButtonStyled
                            background='bg-white'
                            textColor='text-gray'
                            text="Cancel"
                            border="border border-gray"
                        />
                        <ButtonStyled
                            type="submit"
                            text="Save"
                        />
                    </div>





                </form>
            </div>
        </>
    )
}

export default ChangeEmailForm