
import React, { useState } from 'react';
import Image from 'next/image';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import CustomInputField from '../customInputFieldDropdown/CustomInputField';
import InputFieldsimple from '../InputField/InputFieldsimple';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import ButtonStyled from '@/common/components/button/Button';
import ToggleButton from '@/common/components/toggle/ToggleButton ';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';

const AllergyModal = ({ onSave }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [AllergyModalData, setAllergyModalData] = useState({
        allergicTo: '',
        specify: '',
        reaction: '',
        stillAllergic: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false);
        // Reset the state
        setAllergyModalData({
            allergicTo: '',
            specify: '',
            formulation: '',
            reaction: '',
            isChecked: false
        });
        setErrors({});
        setTouched({});
    };

    const validate = () => {
        const newErrors = {};
        const newTouched = {};

        if (!AllergyModalData.allergicTo) {
            newErrors.allergicTo = 'The Allergy is required';
            newTouched.allergicTo = true;
        }

        if (!AllergyModalData.specify) {
            newErrors.specify = 'The Allergy specification is required';
            newTouched.specify = true;
        }

        if (!AllergyModalData.reaction) {
            newErrors.reaction = 'The Allergy reaction is required';
            newTouched.reaction = true;
        }

        setErrors(newErrors);
        setTouched(newTouched);

        return Object.keys(newErrors).length === 0;
    };

    const handleDropdownSelect = (name, value) => {
        setAllergyModalData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error on change
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAllergyModalData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error on change
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));

        if (!touched[name]) {
            setTouched(prevTouched => ({
                ...prevTouched,
                [name]: true
            }));
        }
    };

    const handleToggleChange = () => {
        setAllergyModalData(prevData => ({
            ...prevData,
            stillAllergic: !prevData.stillAllergic
        }));
    };

    const handleAllergySave = () => {
        if (validate()) {
            if (onSave) {
                onSave({
                    ...AllergyModalData,
                    stillAllergic: AllergyModalData.stillAllergic // Ensure isChecked is included
                }); // Pass data to parent
            }

            setAllergyModalData({
                allergicTo: '',
                specify: '',
                reaction: '',
                stillAllergic: false
            });
            setErrors({});
            setTouched({});
            closeModal();
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className="p-2 flex gap-2 bg-transparent border-none cursor-pointer"
            >
                <Image
                    src="/assets/svg/add-icon.svg"
                    alt="Add Icon"
                    width={24}
                    height={24}
                />
                <StyledHeadingH6 text="Add new" fontWeight='font-semibold' textColor='text-dark-sky' />

            </button>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white px-12 py-9 rounded-3xl shadow-lg w-full md:w-[564px] relative">
                        <button
                            type="button"
                            className="absolute top-4 right-4"
                            onClick={closeModal}
                        >
                            <Image
                                src="/assets/svg/close-icon.svg"
                                alt="Close Icon"
                                width={24}
                                height={24}
                            />
                        </button>
                        <StyledHeadingH1 text="Add New Allergy" textColor="text-blue" />
                        <form className='flex flex-col gap-3'>
                            <div className='pt-4'>
                                <CustomInputField
                                    label="What are you allergic to?"
                                    textColor={errors.allergicTo ? 'text-red' : 'text-black'}
                                    background={errors.allergicTo ? 'bg-inputErrBg' : 'bg-sky-blue'}
                                    border={`${errors.allergicTo ? 'border-red' : 'border-transparent'}`}
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' }
                                    ]}
                                    name="allergicTo"
                                    error={errors.allergicTo}
                                    touched={touched.allergicTo}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('allergicTo', value)}
                                    value={AllergyModalData.allergicTo}
                                    onFocus={() => setErrors(prevErrors => ({
                                        ...prevErrors,
                                        allergicTo: ''
                                    }))}
                                />
                                {errors.allergicTo && touched.allergicTo && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledHeadingH6 text={errors.allergicTo} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div>
                                <InputFieldsimple
                                    label="Please Specify"
                                    width='w-full'
                                    height='h-[55px]'
                                    rounded='rounded-xl'
                                    background={errors.specify ? 'bg-inputErrBg' : 'bg-sky-blue'}
                                    textColor={errors.specify ? 'text-red' : 'text-black'}
                                    border={`${errors.specify ? 'border-red' : 'border-transparent'}`}
                                    required
                                    name="specify"
                                    error={errors.specify}
                                    touched={touched.specify}
                                    onChange={handleInputChange}
                                    value={AllergyModalData.specify}
                                    onFocus={() => setErrors(prevErrors => ({
                                        ...prevErrors,
                                        specify: ''
                                    }))}
                                />
                                {errors.specify && touched.specify && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledHeadingH6 text={errors.specify} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div>
                                <InputFieldsimple
                                    label="Reaction"
                                    width='w-full'
                                    height='h-[55px]'
                                    rounded='rounded-xl'
                                    background="bg-sky-blue"
                                    required
                                    error={errors.reaction}
                                    touched={touched.reaction}
                                    name="reaction"
                                    value={AllergyModalData.reaction}
                                    onChange={handleInputChange}
                                    onFocus={() => setErrors(prevErrors => ({
                                        ...prevErrors,
                                        reaction: ''
                                    }))}
                                />
                                {errors.reaction && touched.reaction && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledHeadingH6 text={errors.reaction} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <StyledHeadingH3 text="Status" textColor="text-blue" />
                                <ToggleButton
                                    checked={AllergyModalData.stillAllergic}
                                    onChange={handleToggleChange}
                                    label="Still allergic?"
                                />
                            </div>

                            <div className='mt-2'>
                                <ButtonStyled
                                    text='Save'
                                    onClick={handleAllergySave}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default AllergyModal;
