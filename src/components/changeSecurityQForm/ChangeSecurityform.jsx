'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik';
import PasswordInputField from '../passwordInputField/PasswordInputField'
import ButtonStyled from '@/common/components/button/Button'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import CustomInputField from '../customInputFieldDropdown/CustomInputField'
import ChangeSecuritySchema from '@/validationSchemas/changeSecuritySchema/ChangeSecuritySchema';
import Image from 'next/image';

const ChangeSecurityform = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const formik = useFormik({
        initialValues: {
            securityQuestion1: '',
            answer1: '',
            securityQuestion2: '',
            answer2: '',
            securityQuestion3: '',
            answer3: '',
            currentPassword: '',
        },
        validationSchema: ChangeSecuritySchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
            formik.resetForm();
        },
    });


    const { values, errors, resetForm, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

    const handleDropdownSelect = (name, value) => {
        formik.setFieldValue(name, value);
        formik.validateField(name);  // Force validation after setting the value
    };


    const handleDropdownToggle = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };
    return (
        <>
            <div className='flex justify-center'>
                <form onSubmit={handleSubmit} action=""

                    className='bg-white shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[470px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


                >
                    <div className="w-full flex flex-col gap-5">
                        <div>
                            <StyledHeadingH3 text="Change Security Questions" textColor="text-fade-blue" />
                        </div>
                        <div className="w-full flex flex-col gap-5">

                            <div className=''>
                                <CustomInputField
                                    label="Security question 1"
                                    placeholder='Enter Security Question 1'
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('securityQuestion1', value)}
                                    name="securityQuestion1"
                                    value={values.securityQuestion1}
                                    error={errors.securityQuestion1}
                                    touched={touched.securityQuestion1}
                                    isOpen={openDropdown === 'dropdown1'}
                                    onDropdownToggle={() => handleDropdownToggle('dropdown1')}
                                />
                                {errors.securityQuestion1 && touched.securityQuestion1 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.securityQuestion1} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>

                            <div className="w-full">
                                <PasswordInputField
                                    label="Answer 1"
                                    required={true}
                                    placeholder="Type your answer here"
                                    name="answer1"
                                    value={values.answer1}
                                    error={errors.answer1}
                                    touched={touched.answer1}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.answer1 && touched.answer1 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.answer1} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className=''>
                                <CustomInputField
                                    label="Security question 2"
                                    placeholder='Enter Security Question 2'
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('securityQuestion2', value)}
                                    isOpen={openDropdown === 'dropdown1'}
                                    onDropdownToggle={() => handleDropdownToggle('dropdown1')}
                                    name="securityQuestion2"
                                    value={values.securityQuestion2}
                                    error={errors.securityQuestion2}
                                    touched={touched.securityQuestion2}

                                />
                                {errors.securityQuestion2 && touched.securityQuestion2 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.securityQuestion2} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}

                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="Answer 2"
                                    placeholder="Type your answer here"
                                    required={true}
                                    name="answer2"
                                    value={values.answer2}
                                    error={errors.answer2}
                                    touched={touched.answer2}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {errors.answer2 && touched.answer2 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.answer2} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className=''>
                                <CustomInputField
                                    label="Security question 3"
                                    placeholder="Enter Security Question 3"
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                        { value: 'option4', label: 'Option 4' },
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('securityQuestion3', value)}
                                    isOpen={openDropdown === 'dropdown1'}
                                    onDropdownToggle={() => handleDropdownToggle('dropdown1')}
                                    name="securityQuestion3"
                                    value={values.securityQuestion3}
                                    error={errors.securityQuestion3}
                                    touched={touched.securityQuestion3}


                                />
                                {errors.securityQuestion3 && touched.securityQuestion3 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.securityQuestion3} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>

                            <div className="w-full">
                                <PasswordInputField
                                    label="Answer 3"
                                    required={true}
                                    placeholder="Type your answer here"
                                    name="answer3"
                                    value={values.answer3}
                                    error={errors.answer3}
                                    touched={touched.answer3}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {errors.answer3 && touched.answer3 ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.answer3} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="Current password"
                                    placeholder="Enter Current Password"
                                    required={true}
                                    name="currentPassword"
                                    value={values.currentPassword}
                                    error={errors.currentPassword}
                                    touched={touched.currentPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.currentPassword && touched.currentPassword ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.currentPassword} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>

                        </div>
                    </div>

                    <div className='pt-1.5 text-gray'>
                        <StyledSmText text='To save your updated email address, please enter your current
    password' textColor='text-gray' fontWeight="font-normal" />
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

export default ChangeSecurityform