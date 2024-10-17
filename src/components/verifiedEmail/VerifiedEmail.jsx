import React from 'react';
import Image from 'next/image';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import Link from 'next/link';
import ButtonStyled from '@/common/components/button/Button';

const VerifiedEmail = ({ nextPageLink }) => {
    return (
        <div className='flex justify-center items-center   min-h-[90vh]'> 
            <form
                action=""
                className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[420px] md:w-[564px] sm:max-w-[550px] lg:max-w-[544px]'
            >
                <div className='flex flex-col items-center justify-center'>
                    <Image
                        src="/assets/svg/verify-icon.svg"
                        width={109}
                        height={109}
                        alt="Verified"
                    />
                    <StyledHeadingH2 className="pt-5" text="Verified" textColor="text-blue" />
                    <StyledSmText text="Your email is successfully verified." textColor="text-gray" />
                </div>
                <div className='mt-5'>
                    <Link href={nextPageLink}>
                        <ButtonStyled
                            text="Next"
                        />
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default VerifiedEmail;
