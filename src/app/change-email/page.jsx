import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6'
import AuthBanner from '@/sections/authBanner/AuthBanner'
import ChangeEmailForm from '@/components/changeEmailForm/ChangeEmailForm'

const page = () => {
    return (
        <HomeLayout>
            <div className='relative w-full'>
                <div className='absolute left-2 top-3 sm:left-4 sm:top-3 md:left-9 md:top-9 lg:left-11 lg:top-3'>

                    <Link className='flex flex-row gap-4 items-center px-2 py-4 lg:py-10 sm:px-4 md:px-4 lg:px-24' href="/profile">
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


            {/* banner  */}
            <div className='flex px-3 justify-center mt-10'>
                <div className='flex flex-col'>

                    <div className='pt-7 '>
                        <AuthBanner 
                            heading="Change Email"
                            text="You can change your email address here"
                            paddingX="px-12"
                            py="py-8"
                        />



                    </div>
                </div>
            </div>

            <div className='px-3 my-8'>
                <ChangeEmailForm />
            </div>

        </HomeLayout>
    )
}

export default page