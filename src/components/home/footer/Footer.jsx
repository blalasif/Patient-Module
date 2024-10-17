import React from 'react';
import Image from 'next/image';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import InputWithSuffix from './InputWithSuffix';
import Link from 'next/link';
import StyledHeadingH5 from '@/common/components/styledHeadingH5/StyledHeadingH5';

const Footer = ({ data }) => {
    const {
        logoSrc,
        tagline,
        usefulLinks,
        otherLinks,
        communityHeading,
        communityInputPlaceholder,
        communityInputSuffix,
        footerText
    } = data;

    return (
        // <div className="bg-footer-bg bg-cover bg-center pt-5">
        //     <div className="w-full flex flex-col lg:flex-row lg:justify-between px-4 sm:px-8 md:px-16 lg:px-28 xl:px-28 py-8 sm:py-12 md:py-16">
        //         <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0 w-full lg:w-auto">
        //             <Image src={logoSrc} height={50} width={248} alt="Logo" />
        //             <span className="text-xs text-light-gray font-normal mt-4 lg:mt-2">{tagline}</span>
        //         </div>

        //         <div className="flex flex-col gap-5 mb-8 lg:mb-0 w-full lg:w-auto">
        //             <StyledHeadingH6 text="Useful Links" textColor='text-white' fontWeight='font-bold' />
        //             {usefulLinks.map((link, index) => (
        //                 <Link key={index} href={link.href}>
        //                     <span className="text-sm text-light-gray font-normal">{link.text}</span>
        //                 </Link>
        //             ))}
        //         </div>

        //         <div className="flex flex-col gap-5 mb-8 lg:mb-0 w-full lg:w-auto">
        //             <StyledHeadingH6 text="Others" textColor='text-white' fontWeight='font-bold' />
        //             {otherLinks.map((link, index) => (
        //                 <Link key={index} href={link.href}>
        //                     <span className="text-sm text-light-gray font-normal">{link.text}</span>
        //                 </Link>
        //             ))}
        //         </div>

        //         {/* Community Section */}
        //         <div className="flex flex-col gap-5 mb-8 lg:mb-0 w-full lg:w-auto">
        //             <StyledHeadingH5 text={communityHeading} textColor="text-white" fontWeight="font-bold" />
        //             <InputWithSuffix placeholder={communityInputPlaceholder} suffix={communityInputSuffix} />
        //         </div>
        //     </div>

        //     <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-28 mt-8 text-center">
        //         <hr className="border-gray mx-auto" />
        //         <span className="block py-2.5 text-sm text-light-gray">{footerText}</span>
        //     </div>
        // </div>




        <div className="bg-footer-bg bg-cover bg-center pt-5">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-28 py-8 sm:py-12 md:py-16">

                {/* Logo and Tagline */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Image src={logoSrc} height={50} width={248} alt="Logo" />
                    <span className="text-xs ps-4 text-light-gray font-normal lg:mt-2">{tagline}</span>
                </div>

                {/* Useful Links */}
                <div className="flex flex-col gap-5">
                    <StyledHeadingH6 text="Useful Links" textColor='text-white' fontWeight='font-bold' />
                    {usefulLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <span className="text-sm text-light-gray font-normal">{link.text}</span>
                        </Link>
                    ))}
                </div>

                {/* Other Links */}
                <div className="flex flex-col gap-5">
                    <StyledHeadingH6 text="Others" textColor='text-white' fontWeight='font-bold' />
                    {otherLinks.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <span className="text-sm text-light-gray font-normal">{link.text}</span>
                        </Link>
                    ))}
                </div>

                {/* Community Section */}
                <div className="flex flex-col gap-5">
                    <StyledHeadingH5 text={communityHeading} textColor="text-white" fontWeight="font-bold" />
                    <InputWithSuffix placeholder={communityInputPlaceholder} suffix={communityInputSuffix} />
                </div>
            </div>

            <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-28 mt-8 text-center">
                <hr className="border-gray mx-auto" />
                <span className="block py-2.5 text-sm text-light-gray">{footerText}</span>
            </div>
        </div>





    );
};

export default Footer;
