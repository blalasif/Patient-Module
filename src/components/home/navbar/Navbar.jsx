'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import ProfileDropDown from '../profile/ProfileDropDown';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import icons
import ButtonStyled from '@/common/components/button/Button';
import LogoutButton from '@/common/components/logout/LogoutButton';

const Navbar = ({ data }) => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    return (


        // <div className='w-full flex justify-center'>
        //     <div className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]'>

        //         <main className='w-full relative'>
        //             {/* Blur Overlay */}
        //             {isSidebarOpen && (
        //                 <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40' onClick={toggleSidebar}></div>
        //             )}

        //             <div className='bg-[#FAFDFF] px-3 shadow-xl h-[67px] flex items-center justify-between relative'>
        //                 <div className='absolute inset-x-0 bottom-0 gradient-shadow-bottom' />

        //                 {/* Navbar Content */}
        //                 <div className='hidden md:flex items-center justify-between w-full'>
        //                     <div className='flex items-center gap-7'>
        //                         <div className='flex-shrink-0'>
        //                             <Image
        //                                 src={data.logo}
        //                                 layout='responsive'
        //                                 width={190}
        //                                 height={30}
        //                                 alt="Logo"
        //                                 className='object-contain'
        //                             />
        //                         </div>
        //                         <div className='flex gap-7'>
        //                             {data.links.map((link, index) => (
        //                                 <Link key={index} href={link.href}>
        //                                     <StyledHeadingH6
        //                                         className='hover:text-dark-sky whitespace-nowrap'
        //                                         fontWeight='font-semibold'
        //                                         text={link.text}
        //                                         textColor={pathname === link.href ? 'text-dark-sky' : 'text-fade-blue'}
        //                                     />
        //                                 </Link>
        //                             ))}
        //                         </div>
        //                     </div>
        //                     <div className=''>
        //                         {data.profileDropdown && <ProfileDropDown />}
        //                     </div>
        //                 </div>

        //                 {/* Mobile Menu Button */}
        //                 <div className='md:hidden flex items-center'>
        //                     <button onClick={toggleSidebar} className='text-gray'>
        //                         {isSidebarOpen ? (
        //                             <XMarkIcon className='w-6 h-6' />
        //                         ) : (
        //                             <Bars3Icon className='w-6 h-6' />
        //                         )}
        //                     </button>
        //                 </div>
        //             </div>

        //             {/* <div className={`fixed top-0 sm:w-[50%] w-[70%] left-0 h-full bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50 ${isSidebarOpen ? 'w-[80%]' : 'w-[90%]'} sm:w-[60%]`}> */}
        //             <div className={`fixed top-0 left-0 h-full sm:w-[50%] w-[80%] bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}>

        //                 <div className='flex flex-col h-full'>
        //                     <div className='flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4'>
        //                         {/* Logo */}
        //                         <div className='flex-shrink-0'>
        //                             <Image
        //                                 src={data.logo}
        //                                 layout='responsive'
        //                                 width={200}
        //                                 height={40}
        //                                 alt="Logo"
        //                                 className='object-contain'
        //                             />
        //                         </div>
        //                         {/* Close Button */}
        //                         <button onClick={toggleSidebar} className='text-black'>
        //                             <XMarkIcon className='w-7 h-7' />
        //                         </button>
        //                     </div>
        //                     <hr className='text-light-gray mx-5' />

        //                     <div className='flex flex-col p-6 flex-grow'>
        //                         <div className='flex flex-col gap-5'>
        //                             {data.links.map((link, index) => (
        //                                 <React.Fragment key={index}>
        //                                     <ul className='list-disc pl-6'>
        //                                         <li className={`relative pl-2 ${pathname === link.href ? 'text-black' : 'text-gray'}`}>
        //                                             <Link href={link.href} onClick={toggleSidebar}>
        //                                                 <StyledHeadingH6
        //                                                     className={`hover:text-dark-sky ${pathname === link.href ? 'text-black' : 'text-gray'}`}
        //                                                     fontWeight='font-semibold'
        //                                                     text={link.text}
        //                                                     textColor={pathname === link.href ? 'text-black' : 'text-gray-500'}
        //                                                 />
        //                                             </Link>
        //                                         </li>
        //                                     </ul>
        //                                     <hr className='text-light-gray' />
        //                                 </React.Fragment>
        //                             ))}
        //                         </div>
        //                     </div>

        //                     <div className='p-6' >
        //                         <LogoutButton />
        //                     </div>

        //                 </div>
        //             </div>


        //             {/* Profile Dropdown Outside the Sidebar */}
        //             {data.profileDropdown && (
        //                 <div className='md:hidden absolute top-3 right-4'>
        //                     <ProfileDropDown />
        //                 </div>
        //             )}
        //         </main>
        //     </div>
        // </div>

        <div className='w-full flex justify-center'>
            <div className='w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]'>

                <main className='w-full relative'>
                    {/* Blur Overlay */}
                    {isSidebarOpen && (
                        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40' onClick={toggleSidebar}></div>
                    )}

                    <div className='bg-[#FAFDFF] px-3 shadow-xl h-[67px] flex items-center justify-between relative'>
                        {/* After-shadow effect */}
                        <div className='absolute inset-x-0 bottom-[-10px] h-[20px] bg-gradient-to-t bg-opacity-20 from-light-gray to-[#FFFF] z-30' />

                        {/* Navbar Content */}
                        <div className='hidden md:flex items-center justify-between w-full'>
                            <div className='flex items-center gap-7'>
                                <div className='flex-shrink-0'>
                                    <Image
                                        src={data.logo}
                                        layout='responsive'
                                        width={190}
                                        height={30}
                                        alt="Logo"
                                        className='object-contain'
                                    />
                                </div>
                                <div className='flex gap-7'>
                                    {data.links.map((link, index) => (
                                        <Link key={index} href={link.href}>
                                            <StyledHeadingH6
                                                className='hover:text-dark-sky whitespace-nowrap'
                                                fontWeight='font-semibold'
                                                text={link.text}
                                                textColor={pathname === link.href ? 'text-dark-sky' : 'text-fade-blue'}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className=''>
                                {data.profileDropdown && <ProfileDropDown />}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className='md:hidden flex items-center'>
                            <button onClick={toggleSidebar} className='text-gray'>
                                {isSidebarOpen ? (
                                    <XMarkIcon className='w-6 h-6' />
                                ) : (
                                    <Bars3Icon className='w-6 h-6' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className={`fixed top-0 left-0 h-full sm:w-[50%] w-[80%] bg-white shadow-lg transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-50`}>
                        <div className='flex flex-col h-full'>
                            <div className='flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4'>
                                {/* Logo */}
                                <div className='flex-shrink-0'>
                                    <Image
                                        src={data.logo}
                                        layout='responsive'
                                        width={200}
                                        height={40}
                                        alt="Logo"
                                        className='object-contain'
                                    />
                                </div>
                                {/* Close Button */}
                                <button onClick={toggleSidebar} className='text-black'>
                                    <XMarkIcon className='w-7 h-7' />
                                </button>
                            </div>
                            <hr className='text-light-gray mx-5' />

                            <div className='flex flex-col p-6 flex-grow'>
                                <div className='flex flex-col gap-5'>
                                    {data.links.map((link, index) => (
                                        <React.Fragment key={index}>
                                            <ul className='list-disc pl-6'>
                                                <li className={`relative pl-2 ${pathname === link.href ? 'text-black' : 'text-gray'}`}>
                                                    <Link href={link.href} onClick={toggleSidebar}>
                                                        <StyledHeadingH6
                                                            className={`hover:text-dark-sky ${pathname === link.href ? 'text-black' : 'text-gray'}`}
                                                            fontWeight='font-semibold'
                                                            text={link.text}
                                                            textColor={pathname === link.href ? 'text-black' : 'text-gray-500'}
                                                        />
                                                    </Link>
                                                </li>
                                            </ul>
                                            <hr className='text-light-gray' />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <div className='p-6'>
                                <LogoutButton />
                            </div>
                        </div>
                    </div>

                    {/* Profile Dropdown Outside the Sidebar */}
                    {data.profileDropdown && (
                        <div className='md:hidden absolute top-3 right-4'>
                            <ProfileDropDown />
                        </div>
                    )}
                </main>
            </div>
        </div>


    );
}

export default Navbar;
