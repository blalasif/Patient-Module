import React from 'react';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import Link from 'next/link';
import CookieModal from '@/components/cookieModal/CookieModal';

const AuthFooter = ({ showModal, setShowModal, module }) => {
    const handleModalClose = (accepted) => {
        setShowModal(false);
        if (accepted) {
            localStorage.setItem('cookieAccepted', 'true');
        } else {
            localStorage.setItem('cookieAccepted', 'false');
        }
    };

    const footerBgColor = module === 'auth' ? 'bg-white' : 'bg-transparent';

    return (
        <>
            {showModal && <CookieModal onClose={handleModalClose} />}
            <div className={`w-full flex p-7 gap-3 flex-wrap flex-col md:flex-row items-center md:items-start justify-evenly ${footerBgColor}`}>
                <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
                    <Link href="#">
                        <StyledSmText text="© 2024 BlockMed Pro™. All Rights Reserved." textColor="text-fade-blue" />
                    </Link>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
                    <Link href="#">
                        <StyledSmText text="Terms of Service" textColor="text-fade-blue" />
                    </Link>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0 text-center sm:text-left">
                    <Link href="#">
                        <StyledSmText text="Notice of Privacy Practices" textColor="text-fade-blue" />
                    </Link>
                </div>
                <div className="w-full sm:w-auto text-center sm:text-left">
                    <Link href="#">
                        <StyledSmText text="Notice of Non-Discrimination and Language Assistance" textColor="text-fade-blue" />
                    </Link>
                </div>
            </div>
           



        </>
    );
};

export default AuthFooter;
