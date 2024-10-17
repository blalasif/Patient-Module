import React from 'react';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import Link from 'next/link';
import { Content } from '@/data';
const ChangeSignIn = () => {
    const profileData = Content.find(section => section.section === 'profile-section').data;

    return (
        <div
        
        className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[550px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'

        
        >
            <div className='flex'>
                <div className=''>
                    <StyledHeadingH2 text="Sign In" textColor="text-fade-blue" />
                </div>
            </div>

            <div>
                <div className='flex justify-between pt-7 border-b border-light-gray pb-5 gap-1'>
                    <div className='flex flex-col gap-2.5'>
                        <div className='text-gray'><StyledSmText text='Email address' textColor='text-gray' /></div>
                        
                        <StyledHeadingH6 text={profileData.email} textColor='text-fade-blue' fontWeight='font-bold' />
                    </div>
                    <Link href={profileData.changeEmailLink}>
                        <div className='cursor-pointer pt-5'>
                            <StyledHeadingH6 text="Change" textColor='text-dark-sky' fontWeight='font-semibold' />
                        </div>
                    </Link>
                </div>

                <div className='flex justify-between pt-4 pb-5 gap-1'>
                    <div className='flex flex-col gap-2.5'>
                        <div className='text-gray'><StyledSmText text='Password' textColor='text-gray' /></div>
                        
                        <StyledHeadingH6 text={profileData.password} textColor='text-fade-blue' fontWeight='font-bold' />
                    </div>
                    <Link href={profileData.changePasswordLink}>
                        <div className='cursor-pointer pt-5'>
                            <StyledHeadingH6 text="Change" textColor='text-dark-sky' fontWeight='font-semibold' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ChangeSignIn;
