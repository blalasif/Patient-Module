import Image from 'next/image';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';

const HeroSection = ({ data }) => {
    const { heading, subheading, image, subheadingColor } = data;

    return (
        <div className="w-full">
            <div className='bg-white h-full shadow-lg flex flex-col md:flex-row w-full rounded-2xl'>
                <div className='w-full py-3 md:py-0  flex flex-col justify-center items-center lg:w-1/2 px-5 lg:px-12 xl:px-14'>
                    <div className=''>
                        <StyledHeadingH1
                            className="leading-tight"
                            text={heading}
                            textColor="text-fade-blue"
                        />
                    </div>
                    <div className='relative top-2'>
                        <StyledHeadingH6
                            textColor={subheadingColor || 'text-gray'}
                            fontWeight='font-medium'
                            text={subheading}
                        />
                    </div>
                </div>

                <div className='w-full  lg:w-1/2 h-auto relative'>  
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="Hero Image"
                        objectFit='cover'

                    />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;

