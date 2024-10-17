import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'
import Image from 'next/image'
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1'
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6'
const page = () => {
    return (
        <>
            <HomeLayout>
                <div className='flex  py-14 flex-col  justify-center items-center'>
                    <Image src="/assets/svg/comming-soon.svg" alt='comming soon' width={280} height={300} />
                    <div className='pt-5 '>
                        <StyledHeadingH1 text="Coming Soon" textColor="text-btn-gradient" />
                    </div>

                    <StyledHeadingH6 className=' md:text-base text-sm' textColor='text-gray' fontWeight='font-medium' text="This feature is coming soon. Stay tuned for " />
                    <div className='flex w-[60%]   justify-center'>
                        <StyledHeadingH6 className='md:text-base text-sm' fontWeight='font-medium' text="updates!" textColor='text-gray' />

                    </div>

                </div>








            </HomeLayout>
        </>
    )
}

export default page