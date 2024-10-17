import Footer from '@/components/home/footer/Footer';
import Navbar from '@/components/home/navbar/Navbar';
import React from 'react';
import { Content } from '@/data';

const bgStyle = {
    backgroundImage: "url('/assets/svg/home_bg.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
};

const HomeLayout = ({ children }) => {
    const navbarData = Content.find(section => section.section === 'navbar')?.data || {};
    const footerData = Content.find(section => section.section === 'footer-section')?.data || {};

    return (
        <>
            <div
                className="flex flex-col min-h-screen h-full bg-cover bg-center bg-no-repeat"
                style={bgStyle}
            >
                <Navbar data={navbarData} />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer data={footerData} />
            </div>
        </>
    );
};

export default HomeLayout;
