'use client'
import React, { useState } from 'react'
import PasswordInputField from '../passwordInputField/PasswordInputField'
import ButtonStyled from '@/common/components/button/Button'
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2'
import { useFormik } from 'formik'
import ChangeSecurityPasswordSchema from '@/validationSchemas/changeSecurityPasswordSchema/ChangeSecuritypasswordSchema'
import Image from 'next/image'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'

const ChangeSecurityPassword = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const formik = useFormik({
        initialValues: {
            old_password: '',
            new_password: '',
            confirm_password: '',
        },
        validationSchema: ChangeSecurityPasswordSchema,
        onSubmit: (values) => {
            console.log(" submitted with values:", values);
            formik.resetForm()
        },

    })
    const { values, errors, resetForm, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;



    const handleDropdownSelect = (value) => {
        setSelectedValue(value);
        console.log("Selected value:", value);
    };


    return (
        <>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} action=""

                    className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[400px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


                >
                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <StyledHeadingH2
                                className="text-2xl md:text-2xl lg:text-3xl"

                                text="Change Password" textColor="text-blue" />
                        </div>
                        <div className="w-full flex flex-col gap-5">

                            <div className="w-full">
                                <PasswordInputField
                                    label="Old password"
                                    placeholder="Enter Old Password"
                                    required={true}
                                    name="old_password"
                                    value={values.old_password}
                                    error={errors.old_password}
                                    touched={touched.old_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.old_password && touched.old_password ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.old_password} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="New password"
                                    placeholder="Enter New Password"
                                    required={true}
                                    strengthChecker={true}
                                    name="new_password"
                                    value={values.new_password}
                                    error={errors.new_password}
                                    touched={touched.new_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.new_password && touched.new_password ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.new_password} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="Confirm Password"
                                    placeholder="Enter Confirm Password"
                                    required={true}
                                    name="confirm_password"
                                    value={values.confirm_password}
                                    error={errors.confirm_password}
                                    touched={touched.confirm_password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirm_password && touched.confirm_password ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.confirm_password} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>


                        </div>
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

export default ChangeSecurityPassword