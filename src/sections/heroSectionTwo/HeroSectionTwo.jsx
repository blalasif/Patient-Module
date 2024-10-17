// import Image from 'next/image';
// import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
// import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
// import StyledSmText from '@/common/components/styledSmText/StyledSmText';
// import ButtonStyled from '@/common/components/button/Button';
// import Link from 'next/link';

// const HeroSectionTwo = ({ data }) => {
//     const { heading, subheading, image, subheadingColor, miniheading, miniheadingcolor, button } = data;

//     return (
//         <div className="flex justify-center w-full">
//             <div className="flex flex-col md:flex-row w-full max-w-screen-xl bg-white shadow-lg rounded-2xl overflow-hidden">
//                 <div className="flex-1 p-4 sm:p-6 md:p-8">
//                     <StyledHeadingH1
//                         className="leading-tight text-2xl sm:text-3xl md:text-4xl"
//                         text={heading}
//                         textColor="text-fade-blue"
//                     />
//                     <div className="mt-2">
//                         <StyledHeadingH6
//                             textColor={subheadingColor || 'text-gray'}
//                             fontWeight="font-medium"
//                             text={subheading}
//                         />
//                     </div>

//                     {miniheading && (
//                         <div className="mt-4 text-gray leading-tight">
//                             <StyledSmText
//                                 textColor={miniheadingcolor || 'text-gray-700'}
//                                 text={miniheading}
//                             />
//                         </div>
//                     )}

//                     <div className="pt-4">
//                         <Link href={button.href || "/rewards"}>
//                             <ButtonStyled
//                                 width="w-full sm:w-1/2 md:w-1/3"
//                                 text="Allow"
//                                 fontWeight="font-semibold"
//                                 height="h-[50px]"
//                                 rounded="rounded-xl"
//                                 label={button.label}
//                                 className={button.className || "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}
//                             />
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="flex-1 relative h-48 md:h-auto">
//                     <Image
//                         src={image}
//                         layout="fill"
//                         objectFit="cover"
//                         alt="Hero Image"
//                     />
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default HeroSectionTwo;

import Image from 'next/image';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import Link from 'next/link';
import ButtonStyled from '@/common/components/button/Button';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';

const HeroSectionTwo = ({ data }) => {
    const { heading, subheading, image, subheadingColor, miniheading, miniheadingcolor, button } = data;

    return (
        <div className="w-full">
            <div className='bg-white shadow-lg flex flex-col md:flex-row w-full rounded-2xl'>
                <div className='w-full lg:w-3/4 px-5 lg:px-12 xl:px-14 py-4 md:py-9'>
                    <div>
                    <StyledHeadingH1
                        className="leading-tight text-2xl sm:text-3xl md:text-4xl"
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
                    
                     {miniheading && (
                        <div className="mt-4 text-gray leading-tight">
                            <StyledSmText
                                textColor={miniheadingcolor || 'text-gray-700'}
                                text={miniheading}
                            />
                        </div>
                    )}

                    <div className="pt-4">
                         <Link href={button.href || "/rewards"}>
                            <ButtonStyled
                                width="w-full md:w-1/2"
                                text="Allow"
                                fontWeight="font-semibold"
                                height="h-[50px]"
                                rounded="rounded-xl"
                                label={button.label}
                                className={button.className || "px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"}
                            />
                        </Link>
                    </div>
                </div>

                <div className='w-full md:w-3/4  relative h-64 md:h-auto'>
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

export default HeroSectionTwo;

