import React from 'react';
import Image from 'next/image';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import StyledHeadingH6 from '@/common/components/StyledHeadingH6/StyledHeadingH6';
import StyledSmText from '@/common/components/StyledSmText/StyledSmText';

const MedicationTable = ({ medications = [], onDelete }) => {
    if (!Array.isArray(medications)) {
        console.error('Expected medications to be an array but got:', typeof medications);
        return null;
    }

    return (
        <div className='w-full'>
            {medications.map((medication, index) => (
                <div key={index} className='w-full gap-3 relative lg:flex mt-2 px-6 pt-5 pb-2 rounded-[12px] border border-[#E3E3E3]'>
                    <div className='text-gray w-1/3 gap-3 flex flex-col'>
                        <StyledSmText className="border-b pb-3 border-light-gray"  text="Medication" />
                        <StyledSmText className="border-b pb-3 border-light-gray"  text="Strength" />
                        <StyledSmText className="border-b pb-3 border-light-gray"  text="Formulation" />
                        <StyledSmText className="border-b pb-3 border-light-gray"  text="Dosage" />
                        <StyledSmText className=" pt-2"  text="Status" />
                    </div>

                    <div className='w-full gap-2.5 flex flex-col'>
                        <StyledHeadingH6 className='border-b pb-2.5 border-light-gray' fontWeight='font-bold' text={medication.name || ''} textColor='text-blue' />
                        <StyledHeadingH6 className='border-b pb-2.5 border-light-gray' fontWeight='font-bold' text={medication.strength || ''} textColor='text-blue' />
                        <StyledHeadingH6 className='border-b  pb-2.5 border-light-gray' fontWeight='font-bold' text={medication.formulation || ''} textColor='text-blue' />
                        <StyledHeadingH6 className='border-b pt-1 pb-2.5 border-light-gray' fontWeight='font-bold' text={medication.dosage || ''} textColor='text-blue' />
                        <StyledHeadingH6 className='pt-2 pb-5' fontWeight='font-bold' text={medication.isChecked ? 'Currently taking medication' : 'Not taking '} textColor='text-blue' />
                    </div>
                    <div className='relative left-2.5 bottom-2'>
                        <Image
                            onClick={() => onDelete(index)}
                            style={{ cursor: 'pointer' }}
                            src="/assets/svg/delete-icon.svg"
                            alt='delete-icon'
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            ))}
        </div>

      


    );
};

export default MedicationTable;
