
import React from 'react';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import OtpForm from '@/components/otpForm/OtpForm';
import SimpleAuthLayout from '@/Layout/SimpleAuthLayout';
import Link from 'next/link';
import Image from 'next/image';
import SignupOtp from '@/components/signupOtp/SignupOtp';
const Page = () => {
    return (
        <SimpleAuthLayout>
           


            <div className='flex flex-col-reverse md:flex-col'>
                <div className='relative ps-2 lg:ps-24 top-5 lg:top-14'>
                    <Link
                        className='flex items-center  gap-4 '
                        href="/forgot-password"
                    >
                        <Image
                            src="/assets/svg/back-icon.svg"
                            alt="Back Icon"
                            width={7}
                            height={12}
                        />
                        <StyledHeadingH6 fontWeight='font-semibold' text="Back" textColor="text-dark-sky" />
                    </Link>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='flex flex-col'>

                        <Image src="/assets/svg/logo_blue.svg" alt='logo' width={278} height={65} />
                    </div>
                </div>
            </div>
            <div>



                <div className=' mb-7 mt-6'>
                    <SignupOtp />
                </div>
            </div>
        </SimpleAuthLayout>
    );
}

export default Page;



