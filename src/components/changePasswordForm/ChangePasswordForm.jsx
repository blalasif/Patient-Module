'use client'
import React, { useState, useEffect } from 'react'
import PasswordInputField from '../passwordInputField/PasswordInputField'
import ButtonStyled from '@/common/components/button/Button'
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2'
import CustomInputField from '../customInputFieldDropdown/CustomInputField'
import { useFormik } from 'formik'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { setPassword } from '@/redux/slices/signupSlice';
import ChangePasswordSchema from '@/validationSchemas/changePasswordSchema/ChangePasswordSchema'
import { useGetSecurityQuestions } from '@/hooks/api/useGetSecurityQuestions'
import { usePostResetPassword } from '@/hooks/api/usePostResetPassword'

const ChangePassword = () => {
    const { data: securityQuestion } = useGetSecurityQuestions();
    const { mutate } = usePostResetPassword();
    const signupData = useSelector((state) => state.signup.signupData);
    const [selectedValue, setSelectedValue] = useState('');
    console.log(signupData);


    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (securityQuestion) {
            const mappedOptions = mapToOptions(securityQuestion);
            setOptions(mappedOptions);
        }
    }, [securityQuestion]);


    const mapToOptions = (questions) => {
        return questions.map((question) => ({
            value: question.value,
            label: question.label,
        }));
    };

    const getAvailableOptions = (selectedQuestions) => {
        // Ensure selectedQuestions is always an array
        if (!Array.isArray(selectedQuestions)) {
            return options;
        }
        if (selectedQuestions.length === 0) {
            return options;
        }

        const selectedValues = selectedQuestions.map(q => q.question).filter(q => q);
        const availableOptions = options.filter(option => !selectedValues.includes(option.value));

        return availableOptions.length > 0 ? availableOptions : [{ value: '', label: 'No options available' }];
    };



    const formik = useFormik({
        initialValues: {
            question: '',
            answer: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: ChangePasswordSchema,

        onSubmit: (values) => {
            const payload = {
                ...values,
                email: signupData?.email
            };
            mutate(payload, {
                onSuccess: () => {
                    {
                        resetForm();
                    }
                }
            })
        },
    });

    const { values, errors, resetForm, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

    const handleDropdownSelect = (value) => {
        setSelectedValue(value);
        formik.setFieldValue('question', value);
    };




    return (
        <>
            <div className='flex justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className='bg-white shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[350px] md:w-[564px] sm:max-w-[540px] lg:max-w-[544px] my-6'
                >

                    <div className="w-full flex flex-col ">
                        <div>
                            <StyledHeadingH2
                                text="Change Password"
                                textColor="text-blue"
                                className="text-xl md:text-3xl"
                            />
                        </div>
                        <div className="w-full flex flex-col gap-5">
                            <div className="w-full">
                                <CustomInputField
                                    label="Select a security question"
                                    placeholder="Select"
                                    options={getAvailableOptions(formik.values.question)}
                                    name="question"
                                    required={true}
                                    onSelect={handleDropdownSelect}
                                    value={values.question}
                                    error={errors.question}
                                    touched={touched.question}
                                />
                                {errors.question && touched.question ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.question} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}

                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    placeholder="Enter your answer here"
                                    label="Answer"
                                    required={true}
                                    name="answer"
                                    value={values.answer}
                                    error={errors.answer}
                                    touched={touched.answer}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.answer && touched.answer ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.answer} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="Password"
                                    placeholder="Enter your password"
                                    required={true}
                                    strengthChecker={true}
                                    name="password"
                                    value={values.password}
                                    error={errors.password}
                                    touched={touched.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.password} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>
                            <div className="w-full">
                                <PasswordInputField
                                    label="Confirm Password"
                                    placeholder="Enter your password"
                                    required={true}
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    error={errors.confirmPassword}
                                    touched={touched.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.confirmPassword} textColor='text-fade-blue' fontWeight="font-normal" />
                                    </div>
                                ) : null}
                            </div>


                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-2  mt-4'>
                        <ButtonStyled


                            textColor="text-gray"
                            background="bg-white"
                            text="Cancel"
                            border=" border border-gray"

                        />
                        <ButtonStyled
                            text="Save"
                            type='submit'
                        />
                    </div>





                </form>
            </div>
        </>
    )
}

export default ChangePassword