import VerifiedEmail from '@/components/verifiedEmail/VerifiedEmail'
import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'

const page = () => {
    const nextLink = "/changeSecurity-question"
    return (
        <>
            <HomeLayout>

                <div className='px-3 md:my-10'>
                    <VerifiedEmail nextPageLink={nextLink} />
                </div>

            </HomeLayout>
        </>
    )
}

export default page