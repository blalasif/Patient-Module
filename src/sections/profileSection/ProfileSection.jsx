'use client'
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2'
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3'
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const ProfileSection = () => {

    const { firstName, lastName, email, phonenumber, address, country } = useSelector((state) => state.signup.signupData);




    return (
        <>

            <div

                className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-10 w-full max-w-[550px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


            >
                <div className='flex justify-between'>
                    <div><StyledHeadingH3 text="About You" textColor="text-fade-blue" /></div>
                    <Link href="/edit-profile">
                        <div className=' pt-4 cursor-pointer'>
                            <StyledHeadingH6 text="Edit" textColor='text-dark-sky' fontWeight='font-semibold' />
                        </div>

                    </Link>

                </div>


                <div>
                    <div className='flex pt-7 border-b border-light-gray pb-7  flex-col gap-1'>
                        <div className='text-gray'>
                            <StyledSmText text='First Name' textColor='text-gray' />
                        </div>
                        <StyledHeadingH6 text="Bilal" textColor='text-fade-blue' fontWeight='font-bold' />

                    </div>
                    <div className='flex pt-7 border-light-gray pb-6  flex-col gap-1'>
                        <div className='text-gray'>
                            <StyledSmText text='Last Name' textColor='text-gray' />
                        </div>
                        <StyledHeadingH6 text="Asif " textColor='text-fade-blue' fontWeight='font-bold' />

                    </div>


                    <div>
                        <div className='pt-2'>
                            <StyledHeadingH3 text="Contact Information" textColor="text-fade-blue" />

                        </div>
                        <div className='flex pt-7 border-b border-light-gray pb-7  flex-col gap-1'>
                            <div className='text-gray'>
                                <StyledSmText text='Email' textColor='text-gray' />
                            </div>
                            <StyledHeadingH6 text="bilaljee684@gmail.com" textColor='text-fade-blue' fontWeight='font-bold' />

                        </div>
                        <div className='flex pt-7  flex-col gap-1'>
                            <div className='text-gray'>
                                <StyledSmText text='Phone' textColor='text-gray' />
                            </div>

                            <StyledHeadingH6 text="+923095071914" textColor='text-fade-blue' fontWeight='font-bold' />

                        </div>
                    </div>



                    <div>
                        <div className='pt-7'>
                            <StyledHeadingH3 text="Address" textColor="text-fade-blue" />

                        </div>
                        <div className='flex pt-7 border-b border-light-gray pb-7  flex-col gap-1'>
                            <div className='text-gray'>
                                <StyledSmText text='Region' textColor='text-gray' />
                            </div>
                            <StyledHeadingH6 text="United Kingdom" textColor='text-fade-blue' fontWeight='font-bold' />

                        </div>
                        <div className='flex pt-7  flex-col gap-1'>
                            <div className='text-gray'>
                                <StyledSmText text='Address' textColor='text-gray' />
                            </div>
                            <StyledHeadingH6 text="Lahore" textColor='text-fade-blue' fontWeight='font-bold' />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProfileSection

