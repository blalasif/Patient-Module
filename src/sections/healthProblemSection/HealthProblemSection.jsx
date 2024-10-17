import React, { useState, useEffect } from 'react';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import CustomCheckbox from '@/common/components/checkBox/CheckBox';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import InputFieldsimple from '@/components/InputField/InputFieldsimple';
import Image from 'next/image';
import { Content } from '@/data';

const HealthProblemSection = ({ onHealthProblemsChange, errors, touched }) => {
    const [selectedProblems, setSelectedProblems] = useState([]);
    const [otherProblem, setOtherProblem] = useState('');
    const [additionalInputs, setAdditionalInputs] = useState([]);


    useEffect(() => {
        setSelectedProblems([]);
        setOtherProblem('');
        setAdditionalInputs([]);
    }, []); 

    const handleCheckboxChange = (problem) => {
        setSelectedProblems(prev => {
            const updatedProblems = prev.includes(problem)
                ? prev.filter(item => item !== problem)
                : [...prev, problem];

            if (!updatedProblems.includes('Other')) {
                setOtherProblem('');
                setAdditionalInputs([]);
            }

            const formattedHealthProblems = [
                ...updatedProblems.filter(p => p !== 'Other'), 
                ...additionalInputs, 
                otherProblem 
            ].filter(Boolean);

            const data = {
                healthProblems: formattedHealthProblems
            };
            onHealthProblemsChange(data);

            return updatedProblems;
        });
    };

    const handleOtherInputChange = (e) => {
        const value = e.target.value;
        setOtherProblem(value);

        const formattedHealthProblems = [
            ...selectedProblems.filter(p => p !== 'Other'),
            value, 
            ...additionalInputs 
        ].filter(Boolean); 

        const data = {
            healthProblems: formattedHealthProblems
        };
        onHealthProblemsChange(data);
    };

    const handleAdditionalInputChange = (index, value) => {
        setAdditionalInputs(prevInputs => {
            const newInputs = [...prevInputs];
            newInputs[index] = value;

            const formattedHealthProblems = [
                ...selectedProblems.filter(p => p !== 'Other'), 
                otherProblem, 
                ...newInputs 
            ].filter(Boolean); 

            const data = {
                healthProblems: formattedHealthProblems
            };
            onHealthProblemsChange(data);

            return newInputs;
        });
    };

    const handleAddInputField = () => {
        setAdditionalInputs(prev => {
            const newInputs = [...prev, ''];

            const formattedHealthProblems = [
                ...selectedProblems.filter(p => p !== 'Other'), 
                otherProblem,
                ...newInputs 
            ].filter(Boolean); 

            const data = {
                healthProblems: formattedHealthProblems
            };
            onHealthProblemsChange(data);

            return newInputs;
        });
    };

    const handleDeleteInputField = (index) => {
        setAdditionalInputs(prev => {
            const newInputs = prev.filter((_, i) => i !== index);

            const formattedHealthProblems = [
                ...selectedProblems.filter(p => p !== 'Other'), 
                otherProblem, 
                ...newInputs 
            ].filter(Boolean); 

            const data = {
                healthProblems: formattedHealthProblems
            };
            onHealthProblemsChange(data);

            return newInputs;
        });
    };

   
    const healthData = Content.find(section => section.section === 'health-problems')?.data || {};
    const healthProblems = healthData.problems || [];

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className='border-b border-gray py-7'>
                <StyledHeadingH3 text="Health Problems" textColor="text-fade-blue" />
            </div>
            <div className='w-full'>
                {healthProblems.map(problem => (
                    <div key={problem} className='flex items-center py-6 border-b border-gray justify-between'>
                        <div className='flex justify-between cursor-pointer w-full' onClick={() => handleCheckboxChange(problem)}>
                            <StyledHeadingH6 fontWeight='font-bold' text={problem} textColor='text-blue' />
                            <CustomCheckbox
                                label=""
                                checked={selectedProblems.includes(problem)}
                                onChange={() => handleCheckboxChange(problem)}
                            />
                        </div>
                    </div>
                ))}

                {selectedProblems.includes('Other') && (
                    <div className='mt-5'>
                        <InputFieldsimple
                            type='text'
                            width='w-full'
                            height='h-[55px]'
                            background='bg-sky-blue'
                            placeholder="Type disease name"
                            required
                            label="Please Describe"
                            value={otherProblem}
                            onChange={handleOtherInputChange}
                           
                        />
                        <div className='w-full'>
                            {additionalInputs.map((inputValue, index) => (
                                <div key={index} className=''>
                                    <div className='flex justify-end relative top-6'>
                                        <button
                                            type='button'
                                            onClick={() => handleDeleteInputField(index)}
                                            className="text-red-500"
                                        >
                                            <Image src="/assets/svg/delete-icon.svg" alt='Delete Icon' width={20} height={20} />
                                        </button>
                                    </div>
                                    <div className='flex items-center border-gray w-full'>
                                        <div className='w-full'>
                                            <InputFieldsimple
                                                type='text'
                                                width='w-full'
                                                height='h-[55px]'
                                                background='bg-sky-blue'
                                                placeholder="Type disease name"
                                                required
                                                label="Please Describe"
                                                value={inputValue}
                                                onChange={(e) => handleAdditionalInputChange(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                type='button'
                                onClick={handleAddInputField}
                                className="mt-4 flex items-center text-blue-500"
                            >
                                <Image src="/assets/svg/add-icon.svg" alt='Add' width={24} height={24} />
                                <span style={{ paddingLeft: '8px' }} className="font-semibold text-dark-sky">Add new</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HealthProblemSection;
