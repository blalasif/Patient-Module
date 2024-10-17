
// import React, { useState, useEffect } from 'react';
// import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
// import CustomCheckbox from '@/common/components/checkBox/CheckBox';
// import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
// import InputFieldsimple from '@/components/InputField/InputFieldsimple';
// import CustomInputField from '@/components/customInputFieldDropdown/CustomInputField';
// import Image from 'next/image';
// import { Content } from '@/data';

// const FamilyHistorySection = ({ onFamilyHistoryChange }) => {
//     const [familyHistory, setFamilyHistory] = useState([])
//     const [otherHistory, setOtherHistory] = useState({ dropdown: '', description: '' });
//     const [additionalInputs, setAdditionalInputs] = useState([]);
//     const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

//     const handleDropdownSelect = (id, value) => {
//         if (id === -1) {
//             // Update otherHistory.dropdown when the first dropdown is selected
//             setOtherHistory(prev => ({ ...prev, dropdown: value }));
//         } else {
//             const updatedInputs = additionalInputs.map(input =>
//                 input.id === id ? { ...input, selectedValue: value } : input
//             );
//             setAdditionalInputs(updatedInputs);
//         }

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleCheckboxChange = (history) => {
//         setFamilyHistory(prev => {
//             const updatedHistory = prev.includes(history)
//                 ? prev.filter(item => item !== history)
//                 : [...prev, history];

//             if (!updatedHistory.includes('Other Family History')) {
//                 setOtherHistory({ dropdown: '', description: '' });
//                 setAdditionalInputs([]);
//                 setOpenDropdownIndex(null);
//             } else {
//                 setOpenDropdownIndex(-1);
//             }

//             return updatedHistory;
//         });

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleOtherHistoryChange = (e) => {
//         const value = e.target.value;
//         setOtherHistory(prev => ({ ...prev, description: value }));

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleAdditionalInputChange = (id, value) => {
//         const updatedInputs = additionalInputs.map(input =>
//             input.id === id ? { ...input, description: value } : input
//         );
//         setAdditionalInputs(updatedInputs);

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleAddInputField = () => {
//         const newId = Date.now();
//         const newInputs = [...additionalInputs, { id: newId, selectedValue: '', description: '' }];
//         setAdditionalInputs(newInputs);

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleDeleteInputField = (id) => {
//         const updatedInputs = additionalInputs.filter(input => input.id !== id);
//         setAdditionalInputs(updatedInputs);

//         // Trigger data change for logging
//         handleFamilyHistoryChange();
//     };

//     const handleFamilyHistoryChange = () => {
//         const data = {
//             familyHistory,
//             otherHistory,
//             additionalInputs: additionalInputs.map(input => ({
//                 id: input.id,
//                 selectedValue: input.selectedValue,
//                 description: input.description,
//             })),
//         };

//         // Log the data to the console
//         console.log('Family History Data:', data);

//         // Pass updated data to parent component
//         onFamilyHistoryChange(data);
//     };

//     const family_History = Content.find(item => item.section === 'family-history')?.data || [];

//     useEffect(() => {
//         // Trigger initial data change for logging
//         handleFamilyHistoryChange();
//     }, [familyHistory, otherHistory, additionalInputs]);

//     return (
//         <div className="w-full max-w-4xl mx-auto">
//             <div className='border-b border-gray py-7'>
//                 <StyledHeadingH3 text="Family History" textColor="text-fade-blue" />
//             </div>
//             <div className='w-full'>
//                 {family_History.map(history => (
//                     <div key={history} className='flex items-center py-6 border-b border-gray justify-between'>
//                         <div className='flex justify-between cursor-pointer w-full' onClick={() => handleCheckboxChange(history)}>
//                             <StyledHeadingH6 fontWeight='font-bold' text={history} textColor='text-blue' />
//                             <CustomCheckbox
//                                 label=""
//                                 checked={familyHistory.includes(history)}
//                                 onChange={() => handleCheckboxChange(history)}
//                             />
//                         </div>
//                     </div>
//                 ))}

//                 {familyHistory.includes('Other Family History') && (
//                     <div className='mt-5'>
//                         <div className='lg:flex md:flex-row gap-2.5'>
//                             <CustomInputField
//                                 label="Relationship"
//                                 width="lg:w-1/2 md:w-full"
//                                 placeholder="Select"
//                                 options={[
//                                     { value: 'option1', label: 'Option 1' },
//                                     { value: 'option2', label: 'Option 2' },
//                                     { value: 'option3', label: 'Option 3' },
//                                 ]}
//                                 onSelect={(value) => handleDropdownSelect(-1, value)}
//                                 value={otherHistory.dropdown}
//                                 isOpen={openDropdownIndex === -1}
//                                 onDropdownToggle={() => setOpenDropdownIndex(openDropdownIndex === -1 ? null : -1)}
//                                 multipleCheck={true}
//                             />
//                             <InputFieldsimple
//                                 type='text'
//                                 width='w-full'
//                                 height='h-[55px]'
//                                 background='bg-sky-blue'
//                                 placeholder="Type disease name"
//                                 required
//                                 label="Please Describe"
//                                 value={otherHistory.description}
//                                 onChange={handleOtherHistoryChange}
//                             />
//                         </div>
//                         <div className='w-full'>
//                             {additionalInputs.map(input => (
//                                 <div key={input.id} className=''>
//                                     <div className='flex justify-end relative top-6'>
//                                         <button
//                                             type='button'
//                                             onClick={() => handleDeleteInputField(input.id)}
//                                             className="text-red-500 hover:text-red-700"
//                                         >
//                                             <Image
//                                                 src='/assets/svg/delete-icon.svg'
//                                                 alt="Delete"
//                                                 width={16}
//                                                 height={16}
//                                             />
//                                         </button>
//                                     </div>
//                                     <div className='lg:flex md:flex-row gap-2.5'>
//                                         <CustomInputField
//                                             label="Relationship"
//                                             width="lg:w-1/2 md:w-full"
//                                             placeholder="Select"
//                                             options={[
//                                                 { value: 'option1', label: 'Option 1' },
//                                                 { value: 'option2', label: 'Option 2' },
//                                                 { value: 'option3', label: 'Option 3' },
//                                             ]}
//                                             onSelect={(value) => handleDropdownSelect(input.id, value)}
//                                             value={input.selectedValue}
//                                             isOpen={openDropdownIndex === input.id}
//                                             onDropdownToggle={() => setOpenDropdownIndex(openDropdownIndex === input.id ? null : input.id)}
//                                             multipleCheck={true}
//                                         />
//                                         <InputFieldsimple
//                                             type='text'
//                                             width='w-full'
//                                             height='h-[55px]'
//                                             background='bg-sky-blue'
//                                             placeholder="Type disease name"
//                                             required
//                                             label="Please Describe"
//                                             value={input.description}
//                                             onChange={(e) => handleAdditionalInputChange(input.id, e.target.value)}
//                                         />
//                                     </div>
//                                 </div>
//                             ))}
//                             <button
//                                 type='button'
//                                 onClick={handleAddInputField}
//                                 className="mt-4 flex items-center text-blue-500"
//                             >
//                                 <Image src="/assets/svg/add-icon.svg" alt="add" width={24} height={24} />
//                                 <StyledHeadingH6 style={{ paddingLeft: '8px' }} fontWeight='font-normal' text="Add More" />
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FamilyHistorySection;



import React, { useState, useEffect } from 'react';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import CustomCheckbox from '@/common/components/checkBox/CheckBox';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import InputFieldsimple from '@/components/InputField/InputFieldsimple';
import CustomInputField from '@/components/customInputFieldDropdown/CustomInputField';
import Image from 'next/image';
import { Content } from '@/data';

const FamilyHistorySection = ({ onFamilyHistoryChange }) => {
    const [familyHistory, setFamilyHistory] = useState([]);
    const [otherFamilyHistories, setOtherFamilyHistories] = useState([]);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const handleDropdownSelect = (id, value) => {
        const updatedOtherFamilyHistories = otherFamilyHistories.map(input =>
            input.id === id ? { ...input, relationship: value } : input
        );
        setOtherFamilyHistories(updatedOtherFamilyHistories);
        handleFamilyHistoryChange(updatedOtherFamilyHistories);
    };

    const handleCheckboxChange = (history) => {
        setFamilyHistory(prev => {
            const updatedHistory = prev.includes(history)
                ? prev.filter(item => item !== history)
                : [...prev, history];

            if (!updatedHistory.includes('Other Family History')) {
                setOtherFamilyHistories([]);
                setOpenDropdownIndex(null);
            } else if (prev.length === 0 || !prev.includes('Other Family History')) {
                handleAddInputField();
            }

            handleFamilyHistoryChange(updatedHistory);
            return updatedHistory;
        });
    };

    const handleOtherHistoryChange = (id, value) => {
        const updatedOtherFamilyHistories = otherFamilyHistories.map(input =>
            input.id === id ? { ...input, description: value } : input
        );
        setOtherFamilyHistories(updatedOtherFamilyHistories);
        handleFamilyHistoryChange(updatedOtherFamilyHistories);
    };

    const handleAddInputField = () => {
        const newId = Date.now();
        const newInputs = [...otherFamilyHistories, { id: newId, relationship: '', description: '' }];
        setOtherFamilyHistories(newInputs);
        setOpenDropdownIndex(newId);
    };

    const handleDeleteInputField = (id) => {
        const updatedInputs = otherFamilyHistories.filter(input => input.id !== id);
        setOtherFamilyHistories(updatedInputs);
        handleFamilyHistoryChange(updatedInputs);
    };

    const handleFamilyHistoryChange = (updatedOtherFamilyHistories = otherFamilyHistories) => {
        const data = {
            familyHistory,
            otherFamilyHistories: updatedOtherFamilyHistories.map(input => ({
                relationship: input.relationship,
                description: input.description,
            })),
        };

        // Log the data to the console
        console.log('Family History Data:', data);

        // Pass updated data to parent component
        onFamilyHistoryChange(data);
    };

    const family_History = Content.find(item => item.section === 'family-history')?.data || [];

    useEffect(() => {
        // Trigger initial data change for logging
        handleFamilyHistoryChange();
    }, [familyHistory]);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className='border-b border-gray py-7'>
                <StyledHeadingH3 text="Family History" textColor="text-fade-blue" />
            </div>
            <div className='w-full'>
                {family_History.map(history => (
                    <div key={history} className='flex items-center py-6 border-b border-gray justify-between'>
                        <div className='flex justify-between cursor-pointer w-full' onClick={() => handleCheckboxChange(history)}>
                            <StyledHeadingH6 fontWeight='font-bold' text={history} textColor='text-blue' />
                            <CustomCheckbox
                                label=""
                                checked={familyHistory.includes(history)}
                                onChange={() => handleCheckboxChange(history)}
                            />
                        </div>
                    </div>
                ))}

                {familyHistory.includes('Other Family History') && (
                    <div className='mt-5'>

                        {otherFamilyHistories.map(input => (
                            <div key={input.id} className=''>
                                <div className='flex justify-end relative top-6'>
                                    <button
                                        type='button'
                                        onClick={() => handleDeleteInputField(input.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <Image
                                            src='/assets/svg/delete-icon.svg'
                                            alt="Delete"
                                            width={16}
                                            height={16}
                                        />
                                    </button>
                                </div>
                                <div className='lg:flex md:flex-row gap-2.5'>
                                    <CustomInputField
                                        label="Relationship"
                                        width="lg:w-1/2 md:w-full"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                        ]}
                                        onSelect={(value) => handleDropdownSelect(input.id, value)}
                                        value={input.selectedValue}
                                        isOpen={openDropdownIndex === input.id}
                                        onDropdownToggle={() => setOpenDropdownIndex(openDropdownIndex === input.id ? null : input.id)}
                                        multipleCheck={true}
                                    />
                                    <InputFieldsimple
                                        type='text'
                                        width='w-full'
                                        height='h-[55px]'
                                        background='bg-sky-blue'
                                        placeholder="Type disease name"
                                        required
                                        label="Please Describe"
                                        value={input.description}
                                        onChange={(e) => handleOtherHistoryChange(input.id, e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                     


                        <button
                            type='button'
                            onClick={handleAddInputField}
                            className="mt-4 flex items-center text-blue-500"
                        >
                            <Image src="/assets/svg/add-icon.svg" alt="add" width={24} height={24} />
                            <StyledHeadingH6 textColor='text-dark-sky' style={{ paddingLeft: '8px' }} fontWeight='font-normal' text="Add More" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FamilyHistorySection;
