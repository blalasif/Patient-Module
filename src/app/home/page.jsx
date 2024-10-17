// pages/home.js or any other page file
import React from 'react';
import HomeLayout from '@/Layout/HomeLayout';
import HeroSection from './heroSection/HeroSection';
import { Content } from '@/data';

const HomePage = () => {
    const heroData = Content.find(section => section.section === 'hero-section')?.data || {}
    return (
        <HomeLayout>
            <div className=' mx-auto max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[70%] lg:my-24 my-5'>

                <HeroSection data={heroData} />
            </div>



        </HomeLayout>
    );
}

export default HomePage;
