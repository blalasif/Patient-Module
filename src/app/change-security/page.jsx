import HomeLayout from '@/Layout/HomeLayout'
import AuthBanner from '@/sections/authBanner/AuthBanner'
import ChangeSignIn from '@/sections/changeSecuritySections/ChangeSignIn'
import SecurityQuesion from '@/sections/changeSecuritySections/SecurityQuesion'
import React from 'react'

const page = () => {
    return (
        <HomeLayout>
            <div>
                <div className=' flex justify-center px-3 pt-10'>
                    <AuthBanner
                        heading="Security & Sign In"
                        text="You can change your sign in and security questions here"
                        paddingX="px-14"
                        py='py-7'

                    />

                </div>

                <div className='flex justify-center px-3  pt-5'>
                    <ChangeSignIn />
                </div>

                <div className='flex justify-center px-3 py-5'>
                    <SecurityQuesion />

                </div>
            </div>
        </HomeLayout>
    )
}

export default page