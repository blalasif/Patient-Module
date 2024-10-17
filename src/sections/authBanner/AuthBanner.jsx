import React from 'react';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';

const AuthBanner = ({ heading, text, paddingX = 'px-4 sm:px-10 md:px-14', py = ' py-6' }) => {
    return (
        <div className={`bg-blue shadow-lg border gap-1 w-full max-w-[550px] sm:w-[564px] md:w-[564px] lg:w-[980px] rounded-3xl flex flex-col justify-center ${paddingX} ${py}`}>
            <StyledHeadingH1
                className=" leading-tight sm:leading-tight md:leading-normal"
                text={heading} textColor="text-white"
            />
            <StyledHeadingH6 fontWeight='font-medium' text={text} textColor='text-white' />
        </div>
    );
};

export default AuthBanner;



// text-2xl sm:text-4xl md:text-5xl