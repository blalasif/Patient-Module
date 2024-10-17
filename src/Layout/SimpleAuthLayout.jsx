import React from 'react';
import AuthFooter from '@/sections/authFooter/AuthFooter';
const bgStyle={
    backgroundImage: "url('/assets/svg/simpleauthbg.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed'
}

const SimpleAuthLayout = ({ children }) => {
    return (
        <>
            <div
                className="flex flex-col  h-full bg-cover bg-center bg-no-repeat"
                style={bgStyle}
            >
                <main className="flex-1 p-4">
                    {children}
                </main>
                {/* Ensure the footer is at the bottom */}
            </div>
            <hr className='text-gray' />
            <AuthFooter className="bg-transparent" />
        </>
    );
};

export default SimpleAuthLayout;
