
import AuthBanner from '@/sections/authBanner/AuthBanner'
import MedicalHistoryForm from '@/components/medicalHistoryForm/MedicalHistoryForm'
import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'

const page = () => {
    return (
        <>
            <HomeLayout>
                <div className='flex justify-center mt-14 mb-7 '>
                    <AuthBanner
                        heading="Your Medical History"
                        text="A complete and accurate medical history is important for our providers
     to ensure they have the information they need to provide you with the best care possible."
                        height="133px"
                        width="w-[564px]"
                        paddingX="px-14"
                        py="py-6"
                    />
                </div>
                <div className='mb-4'>
                    <MedicalHistoryForm />
                </div>


            </HomeLayout>

        </>
    )
}

export default page