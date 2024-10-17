
import React from 'react';
import StyledHeadingH6 from '@/common/components/StyledHeadingH6/StyledHeadingH6';
import StyledSmText from '@/common/components/StyledSmText/StyledSmText';
import Image from 'next/image';

const AllergyTable = ({ allergy = [], onDelete }) => {
  if (!Array.isArray(allergy)) {
    console.error('Expected allergy to be an array but got:', typeof allergy);
    return null;
  }

  return (
    <div className='w-full'>
      {allergy.map((item, index) => (
        <div key={index} className='w-full relative lg:flex mt-2 px-6 py-5 rounded-[12px] border border-[#E3E3E3] mb-4'>
          <div className='w-full gap-2.5 flex flex-col'>
            <div className='flex gap-5'>
              <StyledSmText textColor='text-gray' className="border-b pb-3 w-24 border-light-gray" text="Allergy" />
              <StyledHeadingH6 textColor='text-fade-blue' fontWeight='font-bold' className='border-b w-full pb-3 border-light-gray' text={item.allergicTo} />
              <div className='pr-3 pt-1 absolute right-0 cursor-pointer top-1'>
                <Image
                  onClick={() => onDelete(index)}
                  src="/assets/svg/delete-icon.svg"
                  alt='delete-icon'
                  width={20}
                  height={20}
                />
              </div>
            </div>

            <div className='flex gap-3'>
              <StyledSmText textColor='text-gray' className="border-b w-24  border-light-gray" text="Specification" />
              <div className='border-b w-full border-light-gray'>
                <StyledSmText textColor='text-gray' className='bg-sky-blue mb-2 w-full px-5 py-3 rounded-lg' text={item.specify} />
              </div>
            </div>

            <div className='flex gap-5'>
              <StyledSmText textColor='text-gray' className="border-b w-24 border-light-gray" text="Reaction" />
              <div className='border-b w-full border-light-gray'>
                <StyledSmText textColor='text-gray' className='bg-sky-blue mb-2 w-full px-5 py-3 rounded-lg' text={item.reaction} />
              </div>
            </div>

            <div className='flex gap-5'>
              <StyledSmText textColor='text-gray' className="w-24 border-light-gray" text="Status" />
              <div className='w-full border-light-gray'>
                <StyledHeadingH6 textColor='text-fade-blue' fontWeight='font-bold' className='w-full' text={item.stillAllergic ? 'Still Allergic' : 'Not Allergic'} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllergyTable;
