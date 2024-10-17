import HomeLayout from '@/Layout/HomeLayout'
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import React from 'react'
import { Content } from '@/data'
import HeroReward from '@/sections/heroSectionTwo/HeroReward';
const page = () => {
    const heroReward = Content.find(item => item.section === 'reward-hero');


    return (
        <HomeLayout>
            <div>
                <div className='flex justify-center px-3 py-10'>
                    <div className='bg-blue py-6 rounded-3xl flex justify-center w-full max-w-[564px]'>
                        <StyledHeadingH1 text="Rewards" textColor="text-white" />
                    </div>
                </div>

                <div className=' mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mb-6 '>


                    <HeroReward
                        data={heroReward?.data}

                    />

                </div>

            </div>
        </HomeLayout>

    )
}

export default page