'use client'
import React, { useState } from 'react';
import ButtonStyled from '@/common/components/button/Button';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import Link from 'next/link';
import OTPInput from '../otpInputField/OtpInput';
import Timer from '@/common/components/timer/Timer';
const EmailOtp = () => {
    const totalInputs = 6;
    const [otp, setOtp] = useState(Array(totalInputs).fill(''));

    const handleChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleTimerExpire = () => {
        console.log('Timer expired');
    };

    return (
        <>
            <div className='flex justify-center'>
                <form action="" className='bg-white shadow-md  px-14  py-8 w-full md:w-[540px] mt-5 rounded-3xl'>
                    <StyledHeadingH2 text="Enter OTP To Verify" textColor="text-blue" />
                    <div className='flex flex-wrap justify-between'>
                        <div>
                            <StyledSmText text="someone@gmail.com" textColor="text-gray" />
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <Timer
                                initialTime={119}
                                onExpire={handleTimerExpire}
                                className="font-bold text-dark-sky text-md"
                            />
                            <StyledSmText style={{ cursor: 'pointer', textDecoration: 'underline', fontWeight: "bold" }} text="Resend" textColor="text-gray" />
                        </div>
                    </div>
                    {/* Input fields */}
                    <div className='flex flex-wrap mt-8 justify-between'>
                        {Array.from({ length: totalInputs }).map((_, index) => (
                            <OTPInput
                                key={index}
                                index={index}
                                value={otp[index]}
                                onChange={handleChange}
                                isFirst={index === 0}
                                totalInputs={totalInputs}
                            />
                        ))}
                    </div>
                    <div className='parent'>
                        <div className='mt-7'>
                            <ButtonStyled
                               
                                rounded="rounded-[12px]"
                                text="Submit"
                            />
                        </div>
                    </div>
                    <div className='flex justify-center gap-1 pt-4'>
                        <StyledSmText text="Want to change email?" textColor="text-gray" />
                        <Link href="/forgot-p" className=''>
                            <StyledSmText
                                className="underline-dark-sky  font-semibold"
                                text="Click Here"
                                textColor="text-dark-sky"
                            />
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EmailOtp;
