import React from 'react';
import { Content } from '@/data';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';

const EarnBanner = () => {
    const earnData = Content.find(item => item.section === 'Earn from my Info');
    if (!earnData || !earnData.data || !earnData.data.image || !earnData.data.heading) {
        return (
            <div className="p-4 text-center">
                <p>Error: Missing data</p>
            </div>
        );
    }

    const bannerStyle = {
        backgroundImage: `url(${earnData.data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '2.125rem',
        color: 'white',
        width: '100%'
    };
    // px-4 sm:px-6 md:px-8 lg:px-14 py-12 sm:py-16 md:py-20 lg:py-36
    return (
        <div className=" w-full" style={bannerStyle}>
            <div className='w-[90%] px-5 py-5 md:px-20 flex items-center md:min-h-[60vh] min-h-[40vh] '>
                <StyledHeadingH1
                    text="Monetise Your Data By Sharing Your Medical Information To Earn Rewards"
                    textColor='text-white'
                    className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-center sm:text-left'
                />
            </div>



        </div>
    );
};

export default EarnBanner;
