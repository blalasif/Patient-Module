import React from 'react';
import ButtonStyled from '@/common/components/button/Button';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
const CookieModal = ({ onClose }) => {
    const handleAccept = () => {
        onClose(true);
    };

    const handleDeny = () => {
        onClose(false);
    };

    return (
        <div className='fixed inset-0 top-auto  flex justify-center items-center z-50'>
            <div className=' flex justify-around flex-wrap  bg-blue p-8  rounded shadow-lg'>

                <div className='w-1/2'>
                    <StyledSmText
                        text="By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyse site usage, and assist in our marketing efforts. View our Cookies Policy for more information."
                        textColor=" text-white"

                    />

                </div>
                {/* <div className='flex border md:flex-col sm:flex-col w-1/2 justify-end gap-4 '>
                    <ButtonStyled
                        width='w-3/4'
                        height='h-[54px]'

                        fontWeight='font-medium'
                        rounded='rounded-lg'
                        text='Accept'
                        onClick={handleAccept}
                    />

                    <ButtonStyled
                        width='w-3/4'
                        height='h-[54px]'
                        textColor="text-white"
                        background="bg-transparent"
                        rounded='rounded-lg'
                        fontWeight='font-medium'
                        text='Deny'
                        onClick={handleDeny}
                        border="border"
                    />
                </div> */}

                <div className='flex flex-col md:flex-row w-full md:w-1/2 justify-end gap-4'>
                    {/* Responsive container that stacks on smaller screens */}

                    <ButtonStyled
                        width='w-[143px] md:w-full'  
                        height='h-[54px]'
                        fontWeight='font-medium'
                        rounded='rounded-lg'
                        text='Accept'
                        onClick={handleAccept}
                    />

                    <ButtonStyled
                        width='w-[143px] md:w-full'  
                        height='h-[54px]'
                        textColor="text-white"
                        background="bg-transparent"
                        rounded='rounded-lg'
                        fontWeight='font-medium'
                        text='Deny'
                        onClick={handleDeny}
                        border="border"
                    />
                </div>

            </div>
        </div>
    );
};

export default CookieModal;

