
// pages/_app.js or wherever AuthLayout is used
"use client";
import React, { useState, useEffect } from 'react';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import StyledHeadingH5 from '@/common/components/styledHeadingH5/StyledHeadingH5';
import AuthFooter from '@/sections/authFooter/AuthFooter';
import Image from 'next/image';

const bgStyle = {
    backgroundImage: "url('/assets/svg/login_bg.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'

}


const AuthLayout = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        if (!cookieAccepted) {
            setShowModal(true);
        }
    }, []);

    return (
        <div className="flex flex-col min-h-[30vh]">
            <main className="flex-grow">
                <div style={bgStyle}
                    className="grid min-h-screen bg-cover bg-center bg-no-repeat">
                    <div className='grid lg:grid-cols-2 justify-items-center items-center min-h-screen p-4 lg:p-8'>
                        <div className=' flex flex-col gap-2  items-center lg:items-start '>
                            <div>
                                <Image src="/assets/svg/logo_white.svg" width={348} height={64} alt='signup' />
                            </div>
                            <div className=' ms-2 py-4 gap-2   flex flex-col text-center lg:text-left items-center lg:items-start'>
                                <div>

                                    <StyledHeadingH1
                                        className="w-[100%] lg:w-[67%] lg:font-bold  xs:w-full xs:leading-[1.2rem]"


                                        text="Your Health, Our Priority" textColor="text-white" />
                                </div>
                                <div>
                                    <StyledHeadingH5
                                        className="text-center font-normal lg:font-bolde"
                                        text="Secure, Empower, Thrive with BlockMed Pro"
                                        textColor="text-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='w-full py-4 lg:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <AuthFooter module="auth" showModal={showModal} setShowModal={setShowModal} />
        </div>

        
    );
};

export default AuthLayout;

