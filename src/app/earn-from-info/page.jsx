import EarnBanner from '@/sections/earnBanner/EarnBanner'
import HomeLayout from '@/Layout/HomeLayout'
import React from 'react'
import { Content } from '@/data'
import HeroSectionTwo from '@/sections/heroSectionTwo/HeroSectionTwo'
const page = () => {
    const heroTwo = Content.find(item => item.section === 'hero-sectiontwo');

    return (
        <>

            <HomeLayout>
                <div className='flex justify-center'>


                    <div className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] my-8'>

                        <EarnBanner />
                    </div>

                </div>


                {/* <div className='lg:mb-8 mx-4 sm:mx-6 md:mx-8 lg:mx-36 xl:mx-36'>
                    <HeroSectionTwo data={heroTwo?.data} />
                </div> */}

                {/* <div className="sm:px-4 px-3 xl:px-16 mx-auto mb-6 lg:py-12"> */}
                <div className=' mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-6 '>

                    <HeroSectionTwo data={heroTwo?.data} />
                </div>

            </HomeLayout>


        </>
    )
}

export default page