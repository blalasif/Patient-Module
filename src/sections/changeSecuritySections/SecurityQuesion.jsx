import React from 'react';
import Link from 'next/link';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import { Content } from '@/data';

const SecurityQuesion = () => {
    const securityQuestionData = Content.find(item => item.section === 'security-question').data;

    return (
        <div

            className='bg-white  shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[550px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


        >

            <div className='flex justify-between pt-4 pb-5 gap-1'>
                <div className='flex flex-col gap-2.5'>
                    <StyledHeadingH2 className="text-2xl md:text-2xl lg:text-3xl"  text={securityQuestionData.heading} textColor="text-fade-blue" fontWeight="font-bold" />
                </div>

                <Link href={securityQuestionData.editLink}>
                    <div className='cursor-pointer pt-3'>
                        <StyledHeadingH6  text="Edit" textColor='text-dark-sky' fontWeight='font-semibold' />
                    </div>
                </Link>
            </div>

            <div>
                {securityQuestionData.questions.map((question, index) => (
                    <div
                        key={index}
                        className={`flex justify-between pt-7 pb-5 gap-1 ${index !== securityQuestionData.questions.length - 1 ? 'border-b border-light-gray' : ''}`}
                    >
                        <div className='flex flex-col gap-2.5'>
                            <div className='text-gray'><StyledSmText text={question.label} textColor='text-gray' /></div>

                            <StyledHeadingH6 text={question.text} textColor='text-fade-blue' fontWeight='font-bold' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecurityQuesion;

