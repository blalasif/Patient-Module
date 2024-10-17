
'use client'
import React, { useEffect, useState, useCallback } from 'react';
import ButtonStyled from '@/common/components/button/Button';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import Link from 'next/link';
import OTPInput from '../otpInputField/OtpInput';
import Timer from '@/common/components/timer/Timer';
import { useFormik } from 'formik';
import { OtpSchema } from '@/validationSchemas/otpSchema/OtpSchema';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import ResendButton from '@/common/components/resendButton/ResendButton';
import { usepostForgotPasswordOtp } from '@/hooks/api/usePostForgotPasswordOtp';
import { useSignUpResendOtp } from '@/hooks/api/useSignUpResendOtp';

const OtpForm = () => {
    const { mutate } = usepostForgotPasswordOtp()
    const { mutate: resendMutate, isLoading: isResendLoading } = useSignUpResendOtp();
    const signupData = useSelector((state) => state.signup.signupData);
    const router = useRouter();
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);
    const [initialTimerStart, setInitialTimerStart] = useState(null);
    const [resendTimerStart, setResendTimerStart] = useState(null);

    const totalInputs = 6;
    const initialValues = Array(totalInputs).fill('');

    const { values, errors, touched, handleSubmit, resetForm, setFieldValue } = useFormik({
        initialValues: { otp: initialValues },
        validationSchema: OtpSchema,
        onSubmit: (values) => {
            const payload = {
                otp: values.otp.join(''),
                email: signupData?.email,
            }

            mutate(payload, {
                onSuccess: () => {
                    resetForm();
                    router.push('/change-password');
                },

            });
        }
    });

    const handleOtpChange = (index, value) => {
        const newOtp = [...values.otp];
        newOtp[index] = value;
        setFieldValue('otp', newOtp);
    };
    const handleTimerExpire = useCallback(() => {
        setIsButtonEnabled(true);
    }, []);

    const handleResendClick = () => {
        const email = signupData?.email;

        if (email) {
            resendMutate({ email });
            setIsButtonEnabled(false);
            const now = Date.now();
            setResendTimerStart(now);
            localStorage.setItem('resendTimerStart', now.toString());
        } else {
            toast.error("Email not available.");
        }
    };

    useEffect(() => {
        const storedInitialTimerStart = localStorage.getItem('initialTimerStart');
        const now = Date.now();

        if (!storedInitialTimerStart) {
            localStorage.setItem('initialTimerStart', now.toString());
            setInitialTimerStart(now);
        } else {
            setInitialTimerStart(parseInt(storedInitialTimerStart, 10));
        }

        // Initialize resend timer
        const storedResendTimerStart = localStorage.getItem('resendTimerStart');
        if (storedResendTimerStart) {
            setResendTimerStart(parseInt(storedResendTimerStart, 10));
        }
    }, []);

    useEffect(() => {
        // Update button state based on timer expiration
        setIsButtonEnabled(isResendTimerExpired());
    }, [resendTimerStart]);

    const isInitialTimerExpired = () => {
        if (initialTimerStart) {
            return Date.now() - initialTimerStart > 119 * 1000;
        }
        return false;
    };

    const isResendTimerExpired = () => {
        if (resendTimerStart) {
            return Date.now() - resendTimerStart > 119 * 1000;
        }
        return false;
    };


    const otpError = errors.otp && touched.otp;

    return (
        <div className='flex justify-center mt-5'>
            <form onSubmit={handleSubmit}

                className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[420px] md:w-[564px] sm:max-w-[550px] lg:max-w-[544px]'
            >
                <StyledHeadingH2 text="Enter Your OTP" textColor="text-fade-blue" />
                <div className='flex flex-wrap justify-between'>
                    <div>
                        <StyledSmText text={signupData?.email ? signupData?.email : "No email "} textColor="text-gray" />
                    </div>
                    <div className='flex flex-wrap gap-2'>
                        <Timer
                            initialTime={119}
                            onExpire={handleTimerExpire}
                            reset={isInitialTimerExpired()}
                            className=" font-semibold lg:font-bold text-dark-sky text-md"
                        />
                        <ResendButton
                            disabled={!isButtonEnabled}
                            onClick={handleResendClick}
                            isLoading={isResendLoading}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-11'>

                    <div className='flex flex-nowrap lg:gap-2.5 gap-1  mt-8 '>
                        {Array.from({ length: totalInputs }).map((_, index) => (
                            <OTPInput
                                key={index}
                                index={index}
                                value={values.otp[index]}
                                onChange={handleOtpChange}
                                error={otpError && values.otp[index] === ''}
                                isError={otpError && values.otp[index] === ''}
                                isFirst={index === 0}
                                totalInputs={totalInputs}
                            />
                        ))}
                    </div>

                    {otpError && (
                        <div className='flex items-center gap-2 font-semibold mt-2'>
                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                            <StyledSmText text={errors.otp} textColor='text-fade-blue' fontWeight="font-normal" />
                        </div>
                    )}

                    <div>
                        <ButtonStyled
                            text="Submit"
                            type="submit"
                        />
                    </div>
                </div>
                <div className='flex flex-wrap gap-0.5 justify-center  pt-4'>
                    <StyledSmText className='pt-0.5' text="Want to change email?" textColor="text-gray" />
                    <Link href="/forgot-password">
                        <StyledSmText

                            className="underline-dark-sky font-semibold "
                            text="Click Here"
                            textColor="text-dark-sky"
                        />
                    </Link>
                </div>
            </form>
        </div>



    );
};

export default OtpForm;
