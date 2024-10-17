
import React from 'react';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import AuthBanner from '@/sections/authBanner/AuthBanner';
import Link from 'next/link';
import SimpleAuthLayout from '@/Layout/SimpleAuthLayout';
import ChangePasswordForm from '@/components/changePasswordForm/ChangePasswordForm'
import Image from 'next/image';

const Page = () => {
  return (
    <SimpleAuthLayout>
      <div className="flex justify-center lg:justify-start lg:ms-20 top-3">
        <Image src="/assets/svg/logo_blue.svg" alt="Logo" width={278} height={65} />
      </div>



      <div className='w-1/2 pt-7 lg:pt-10 px-2 lg:px-14'>
        <div>
          <Link className='flex flex-row gap-3 items-center px-2 sm:px-4 md:px-4 lg:px-8' href="/">
            <Image
              src="/assets/svg/back-icon.svg"
              alt="Back Icon"
              width={7}
              height={12}
            />
            <StyledHeadingH6 fontWeight='font-semibold' text="Back" textColor="text-dark-sky" />
          </Link>
        </div>
      </div>

      <div className='flex justify-center pt-5'>
        <div className='flex flex-col'>

          <AuthBanner
            heading="Change Password"
            text="You can change your security password"
          />

        </div>
      </div>
      <div className=' mt-4'>
        <ChangePasswordForm />
      </div>
    </SimpleAuthLayout  >
  );
}


export default Page;


