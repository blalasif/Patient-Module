import EmailOtp from '@/components/emailOtp/EmailOtp'
import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'
import Link from 'next/link'
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6'
import Image from 'next/image'
import OtpForm from '@/components/otpForm/OtpForm'

const page = () => {
    return (
        <>
            <HomeLayout>
                <div className='relative w-full'>
                    <div className='absolute left-4 top-6 sm:left-4 sm:top-8  md:left-8 md:top-11 lg:left-14 lg:top-2'>
                        <Link className='flex flex-row gap-4 items-center px-2 py-4 lg:py-10 sm:px-4 md:px-4 lg:px-24' href="/change-email">
                            <Image
                                src="/assets/svg/back-icon.svg"
                                alt="Back Icon"
                                width={7}
                                height={12}
                            />
                            <StyledHeadingH6 fontWeight='font-semibold' text="Back" textColor="text-dark-sky" />
                        </Link>
                    </div>
                </div>

                <div className='flex justify-center items-center my-10 pt-8'>
                    <OtpForm/>
                </div>
            </HomeLayout>
        </>
    )
}

export default page