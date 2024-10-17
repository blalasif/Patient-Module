import AuthBanner from '@/sections/authBanner/AuthBanner'
import ProfileSection from '@/sections/profileSection/ProfileSection'
import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'

const page = () => {
    return (
        <HomeLayout>
            <>
                <div className='flex px-3 pt-10  justify-center'>
                    <div>
                        <AuthBanner
                            heading="Profile"
                            text="You can change your sign in and security questions here"
                            paddingX="px-14"
                            py='py-6'

                        />
                    </div>

                </div>
                <div className='flex py-5 px-3 justify-center'>
                    <ProfileSection />

                </div>

            </>

        </HomeLayout>
    )
}

export default page