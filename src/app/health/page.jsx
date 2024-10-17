
import React from 'react';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import Link from 'next/link';
import SimpleAuthLayout from '@/Layout/SimpleAuthLayout';
import ButtonStyled from '@/common/components/button/Button';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import Image from 'next/image';
import BeginYourCare from './begionYourCare/BeginYourCare';


const Page = () => {
    return (
        <SimpleAuthLayout>
            <div className="flex justify-center lg:justify-start lg:ms-20 top-3">
                <Image src="/assets/svg/logo_blue.svg" alt="Logo" width={278} height={65} />
            </div>



            <div className='w-1/2 pt-8 lg:pt-10 px-2 lg:px-14'>
                <div>
                    <Link className='flex flex-row gap-3 items-center px-2 sm:px-4 md:px-4 lg:px-8' href="/">
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

         


            <div className=' my-10'>
                <BeginYourCare />
            </div>
        </SimpleAuthLayout  >
    );
}

export default Page;


