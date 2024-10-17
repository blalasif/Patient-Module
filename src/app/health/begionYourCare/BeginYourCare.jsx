
import ButtonStyled from '@/common/components/button/Button'
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2'
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import Link from 'next/link'
import React from 'react'

const BeginYourCare = () => {
    return (
        <>

            <div className='flex justify-center'>
                <div className='bg-white  shadow-lg w-full lg:px-24 md:px-14 px-6  py-11 md:w-[638px]  rounded-3xl'>
                    <div><StyledHeadingH2  text="Begin Your Care Journey, John?" textColor="text-blue" />                    </div>
                    <div className=' pt-4'><StyledSmText textColor="text-gray"
                        text="Before you see a doctor, share some information about your health, lifestyle and family history. This just takes a few minutes, and you’ll only need to do it once." />
                    </div>
                    <div className='mt-10'>
                        <Link href="/medical-history">
                            <ButtonStyled
                                text="Complete medical history"
                            />
                        </Link>
                    </div>
                </div>

            </div>

       




        </>
    )
}

export default BeginYourCare