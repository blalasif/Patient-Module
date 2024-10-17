'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import ButtonStyled from '@/common/components/button/Button';

const HeroReward = ({ data }) => {
    const { heading, image, subheadingColor, button, initialBalance } = data;

    const [balance, setBalance] = useState(initialBalance || 0);

    useEffect(() => {
        if (initialBalance !== undefined) {
            setBalance(initialBalance);
        }
    }, [initialBalance]);

    const isBalanceZero = balance === 0;
    const buttonBackgroundColor = isBalanceZero ? 'bg-light-gray' : 'bg-gradient-btn';
    const buttonTextColor = isBalanceZero ? 'text-gray' : 'text-white';
    const buttonDisabled = isBalanceZero;
    const buttonType = isBalanceZero ? 'disabled' : 'submit';

    const formattedSubheading = `$ ${balance}`;

    return (
        <div className="w-full">
            <div className='bg-white shadow-lg flex flex-col md:flex-row w-full rounded-2xl'>
                <div className='w-full lg:w-3/4 lg:px-12 xl:px-14 px-4 py-4 md:py-9'>

                    <div>
                        <StyledHeadingH3
                            className="leading-tight"
                            text={heading}
                            textColor="text-fade-blue"
                        />
                    </div>
                    <div className='relative top-2'>
                        <StyledHeadingH1
                            textColor={subheadingColor || 'text-gray'}
                            fontWeight='font-medium'
                            text={formattedSubheading}
                        />
                    </div>

                    <div className='pt-4'>
                        <ButtonStyled
                            width=' w-full md:w-[60%]'
                            textColor={buttonTextColor}
                            text={button.text}
                            fontWeight='font-semibold'
                            background={buttonBackgroundColor}
                            label={button.label}
                            href={button.href}
                            type={buttonType}
                            disabled={buttonDisabled}
                            className={`px-6 py-3 ${buttonBackgroundColor} ${buttonTextColor} rounded-lg ${buttonDisabled ? 'cursor-not-allowed' : 'hover:bg-blue-600'}`}
                        />
                    </div>
                </div>

                <div className='w-full md:w-2/3 relative h-64 md:h-auto'>
                    <Image
                        src={image}
                        layout='fill'
                        objectFit='cover'
                        alt="Hero Image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroReward;
