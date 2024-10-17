'use client'
import React, { useState, useEffect } from 'react';
import ButtonStyled from '@/common/components/button/Button';
import InputFieldsimple from '../InputField/InputFieldsimple';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import PasswordInputField from '../passwordInputField/PasswordInputField';
import CheckBox from '@/common/components/checkBox/CheckBox'
import CustomInputField from '../customInputFieldDropdown/CustomInputField';
import { useFormik } from 'formik';
import AccountDetailSchema from '@/validationSchemas/accountDetailsSchema/AccountDetailSchema';
import Image from 'next/image';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountDetails, clearData, setSignupData } from '@/redux/slices/signupSlice';
import { callPatient } from '@/api/callApi';
import { useGetSecurityQuestions } from '@/hooks/api/useGetSecurityQuestions';
import { useGetCountriesRegions } from '@/hooks/api/useGetCountriesRegions';
import { Content } from '@/data';
import { useSignUp } from '@/hooks/api/useSignUp'

const AccountDetailForm = () => {

    const { mutate } = useSignUp();

    const { data } = useGetCountriesRegions();
    const countryOptions = data?.formattedCountries || [];
    const regions = data?.formattedRegions || [];
    //fetching secuirty questions
    const { data: securityQuestionsData, isLoading } = useGetSecurityQuestions();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (securityQuestionsData) {
            const mappedOptions = mapToOptions(securityQuestionsData);
            setOptions(mappedOptions);
        }
    }, [securityQuestionsData]);


    const mapToOptions = (questions) => {
        return questions.map((question) => ({
            value: question.value,
            label: question.label,
        }));
    };

    const getAvailableOptions = (selectedQuestions) => {
        const selectedValues = selectedQuestions.map(q => q.question).filter(q => q);
        const availableOptions = options.filter(option => !selectedValues.includes(option.value));
        return availableOptions.length > 0 ? availableOptions : [{ value: '', label: 'No options available' }];
    };

    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch()
    const signupData = useSelector((state) => state.signup.signupData);

    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
            confirmPassword: '',
            address: '',
            addressLineTwo: '',
            city: '',
            postalCode: '',
            country: '',
            securityQuestions: [
                { question: '', answer: '' },
                { question: '', answer: '' },
                { question: '', answer: '' }
            ],
            consultationLocation: {
                country: '',
                phoneNumber: '',
                language: ''
            }
        },
        validationSchema: AccountDetailSchema,

        onSubmit: (values) => {
            const { confirmPassword, ...formValues } = values;
            const combinedData = { ...signupData, ...formValues };
            console.log("🚀 ~ AccountDetailForm ~ combinedData:", combinedData);

            // Define a success callback to reset the form
            const onSuccessCallback = () => {
                formik.resetForm();
                setSelectedValue('');
                router.push('/signup-otp');
            };

            // Pass the success callback to useSignUp
            mutate(combinedData, {
                onSuccess: onSuccessCallback,
            });

            // Save the form data in Redux
            dispatch(setSignupData(combinedData));
        }
    });

    // Extract language options from Content
    const languageSection = Content.find(section => section.section === 'Languages');
    const languageOptions = languageSection.data.languages.map(language => ({
        value: language,
        label: language
    }));

    //api
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

    const handleDropdownSelect = (name, value) => {
        setFieldValue(name, value);
        setSelectedValue(value);
        setSelectedQuestions(prevState => [...prevState, value]);
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className='flex justify-center'>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-md rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[330px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px] mt-5'
            >
                {/* {JSON.stringify(errors, undefined, 2)} */}
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <StyledHeadingH3 text="Create Your User Name And Password"
                            textColor="text-blue" required
                        />
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="Enter your user name"
                                label="User name"
                                required
                                name="userName"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.userName}
                                touched={touched.userName}
                            />
                            {errors.userName && touched.userName ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.userName} textColor='text-fade-blue' fontWeight="font-normal" />
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
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password}
                                touched={touched.password}
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
                                placeholder="Confirm password"
                                name="confirmPassword"
                                required={true}
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.confirmPassword}
                                touched={touched.confirmPassword}

                            />
                            {errors.confirmPassword && touched.confirmPassword ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.confirmPassword} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div>
                            <StyledHeadingH3
                                text="Enter Your Information"
                                textColor="text-blue"
                                required
                                extraClass="pt-5"
                            />

                        </div>
                        <div className="w-full">
                            <InputFieldsimple

                                placeholder="Enter your address"
                                label="Address"
                                name="address"
                                required
                                value={values.address}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.address}
                                touched={touched.address}
                            />
                            {errors.address && touched.address ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.address} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="XXXX-XXX"
                                name="addressLineTwo"
                                label="Address line 2 (Optional)"
                                value={values.addressLineTwo}
                                onChange={handleChange}
                            // required
                            />

                            {errors.addressLineTwo && touched.addressLineTwo ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.addressLineTwo} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="Enter your city"
                                label="City"
                                name="city"
                                required
                                value={values.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.city}
                                touched={touched.city}

                            />
                            {errors.city && touched.city ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.city} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>



                        <div className=''>
                            <CustomInputField
                                label="Country"
                                placeholder="Select"
                                options={countryOptions}
                                required={true}
                                name="country"
                                error={errors.country}
                                touched={touched.country}

                                onSelect={(value) => handleDropdownSelect('country', value)}
                                value={''} // Update with your state or form value if needed
                            />
                            {errors.country && touched.country ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.country} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className="w-full">
                            <InputFieldsimple
                                placeholder="XXXX-XXX"
                                label="Postal code (optional)"
                                // required
                                name="postalCode"
                                value={values.postalCode}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.postalCode}
                                touched={touched.postalCode}

                            />
                            {errors.postalCode && touched.postalCode ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={errors.postalCode} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div>
                            <StyledHeadingH3
                                text="Secure Your Account"
                                textColor="text-blue"
                                required
                                extraClass="pt-5"
                            />

                        </div>


                        {formik.values.securityQuestions.map((securityQuestion, index) => (
                            <div key={index} className='mb-4'>
                                <div className='mb-2'>
                                    <CustomInputField
                                        label={`Security Question ${index + 1}`}
                                        placeholder="Select"
                                        options={getAvailableOptions(formik.values.securityQuestions)} // Should be filtered correctly
                                        required={true}
                                        name={`securityQuestions[${index}].question`}
                                        error={formik.errors.securityQuestions?.[index]?.question}
                                        touched={formik.touched.securityQuestions?.[index]?.question}
                                        onSelect={(value) => formik.setFieldValue(`securityQuestions[${index}].question`, value)}
                                        value={securityQuestion.question}
                                    />
                                    {formik.errors.securityQuestions?.[index]?.question && formik.touched.securityQuestions?.[index]?.question ? (
                                        <div className='flex items-center gap-2 font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.securityQuestions[index].question} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}
                                </div>
                                <div className='w-full'>
                                    <PasswordInputField
                                        label={`Answer ${index + 1}`}
                                        placeholder="Type your answer here"
                                        required={true}
                                        name={`securityQuestions[${index}].answer`}
                                        value={securityQuestion.answer}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.errors.securityQuestions?.[index]?.answer}
                                        touched={formik.touched.securityQuestions?.[index]?.answer}
                                    />
                                    {formik.errors.securityQuestions?.[index]?.answer && formik.touched.securityQuestions?.[index]?.answer ? (
                                        <div className='flex items-center gap-2 font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.securityQuestions[index].answer} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                        <div>
                            <StyledHeadingH3
                                text="Preferred Consultation Location"
                                textColor="text-blue"
                                extraClass="pt-5"
                            />

                        </div>

                        <div className=''>
                            <CustomInputField
                                label="Country"
                                placeholder="Select"
                                options={regions}
                                required={true}
                                name="consultationLocation.country"
                                error={formik.errors.consultationLocation?.country}
                                touched={formik.touched.consultationLocation?.country}
                                onSelect={(value) => formik.setFieldValue('consultationLocation.country', value)}
                                value={formik.values.consultationLocation.country}
                            />
                            {formik.errors.consultationLocation?.country && formik.touched.consultationLocation?.country ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.consultationLocation.country} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                type='text'
                                placeholder="Enter your preferred phone no"
                                label="Preferred phone no"
                                required
                                name="consultationLocation.phoneNumber"
                                value={formik.values.consultationLocation?.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.errors.consultationLocation?.phoneNumber}
                                touched={formik.touched.consultationLocation?.phoneNumber}
                            />



                            {formik.errors.consultationLocation?.phoneNumber && formik.touched.consultationLocation?.phoneNumber ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.consultationLocation.phoneNumber} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>



                        <div className=''>
                            <CustomInputField
                                label="Preferred language for appointment"
                                placeholder="Select"
                                options={languageOptions}

                                required={true}
                                name="language"
                                error={formik.errors.consultationLocation?.language}
                                touched={formik.touched.consultationLocation?.language}
                                onSelect={(value) => formik.setFieldValue('consultationLocation.language', value)}
                                value={formik.values.consultationLocation.language}
                            />
                            {formik.errors.consultationLocation?.language && formik.touched.consultationLocation?.language ? (
                                <div className='flex items-center gap-2 font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.consultationLocation.language} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>


                        <div>
                            <CheckBox
                                label="I accept BlockMed Pro’s Terms & Condition."
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </div>



                    </div>
                    <div className='flex gap-2 mt-5'>
                        <ButtonStyled
                            type='submit'
                            text="Submit"
                            disabled={!isChecked}
                        />

                    </div>
                </div>



            </form>
        </div>
    );
}

export default AccountDetailForm;




