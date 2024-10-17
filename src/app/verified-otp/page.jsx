
import React from 'react';
import SimpleAuthLayout from '@/Layout/SimpleAuthLayout';
import Image from 'next/image';
import VerifiedEmail from '@/components/verifiedEmail/VerifiedEmail';

const Page = () => {
    const nextLink = "/"
    return (
        <SimpleAuthLayout>


            <div className='flex justify-center'>
                <div className='flex flex-col'>
                    <div className=''>
                        <Image src="/assets/svg/logo_blue.svg" width={356} height={84} alt="" />
                    </div>
                </div>
            </div>

                <VerifiedEmail nextPageLink={nextLink} />

        </SimpleAuthLayout>
    );
}

export default Page;



