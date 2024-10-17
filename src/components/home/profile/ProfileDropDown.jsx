'use client'
import React, { useState, useEffect, useRef } from 'react';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import Image from 'next/image';
import Link from 'next/link';
import { Content } from '@/data';
import { Icon } from '@iconify/react';
import { usePostPatientLogout } from '@/hooks/api/usePostPatietnLogout';

const ProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { mutate } = usePostPatientLogout();

  const profileData = Content.find(item => item.section === 'profile-dropdown')?.data;

  if (!profileData) {
    return null;
  }

  const { profile } = profileData;

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option) => {
    if (option.isLogout) {
      mutate(null, {
        onSuccess: () => {
          setIsOpen(false);
        }
      });
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        className='flex relative items-center cursor-pointer gap-1.5'
        onClick={toggleDropdown}
      >
        <Image src="/assets/svg/profile-icon.svg" alt='profile' width={36} height={36} />
        <div className='flex flex-col ml-2'>
          <span className='text-xs font-normal text-gray'>{profile.text}</span>
          <span className='text-xs font-normal text-dark-sky'>{profile.accountText}</span>
        </div>
        <Image className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          src="/assets/svg/down-icon.svg" alt='down-icon' width={12} height={7.41} />
        {isOpen && (
          <div className={`absolute top-16  right-0 bg-white rounded-2xl shadow-xl z-10 
          ${isOpen ? 'block' : 'hidden'} w-[90%] sm:w-[80%] md:w-[250px] lg:w-[279px] min-w-[220px] max-w-[300px]`}>
            {/* Use flex classes for centering on mobile */}
            <ul className='mx-3 my-3 '>
              {profile.options.map((option, index) => (
                <React.Fragment key={index}>
                  <Link href={option.href}>
                    <li
                      className={`flex gap-7 px-3 py-4 cursor-pointer group rounded-2xl transition-colors ${option.isLogout ? 'hover:bg-red hover:text-white' : 'hover:bg-fade-blue hover:text-white'}`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <Icon
                        className={`stroke-current ${option.isLogout ? 'text-red group-hover:text-white ml-2' : 'text-fade-blue group-hover:text-white'}`}
                        icon={option.svg}
                        width={option.isLogout ? "23" : "25"}
                        height={option.isLogout ? "23" : "25"}
                      />
                      <StyledHeadingH6
                        fontWeight='font-semibold'
                        text={option.text}
                        // className='pt-0.5'
                        textColor={`${option.isLogout ? 'text-red group-hover:text-white' : 'text-fade-blue group-hover:text-white'}`}
                      />
                    </li>
                  </Link>
                  {index < profile.options.length - 1 && (
                    <hr className='my-2 w-full border-light-gray' />
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        )}
      </div>


    </div>
  );
};

export default ProfileDropDown;
