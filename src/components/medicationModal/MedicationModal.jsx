
import React, { useState } from 'react';
import Image from 'next/image';
import StyledHeadingH1 from '@/common/components/styledHeadingH1/StyledHeadingH1';
import CustomInputField from '../customInputFieldDropdown/CustomInputField';
import InputFieldsimple from '../InputField/InputFieldsimple';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import ToggleButton from '@/common/components/toggle/ToggleButton ';
import ButtonStyled from '@/common/components/button/Button';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';

const MedicationModal = ({ onSave }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [MedicationModalData, setMedicationModalData] = useState({
        name: '',
        strength: '',
        formulation: '',
        dosage: '',
        status: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const openModal = () => setIsOpen(true);

    const closeModal = () => {
        setIsOpen(false);
        // Reset the state
        setMedicationModalData({
            name: '',
            strength: '',
            formulation: '',
            dosage: '',
            status: false
        });
        setErrors({});
        setTouched({});
    };

    const validate = () => {
        const newErrors = {};
        const newTouched = {};

        if (!MedicationModalData.name) {
            newErrors.name = 'Medication name is required';
            newTouched.name = true;
        }

        if (!MedicationModalData.strength) {
            newErrors.strength = 'Strength is required';
            newTouched.strength = true;
        }

        if (!MedicationModalData.formulation) {
            newErrors.formulation = 'Formulation is required';
            newTouched.formulation = true;
        }

        if (!MedicationModalData.dosage) {
            newErrors.dosage = 'Dosage is required';
            newTouched.dosage = true;
        }

        setErrors(newErrors);
        setTouched(newTouched);

        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMedicationModalData(prevData => ({
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

    const handleDropdownSelect = (name, value) => {
        setMedicationModalData(prevData => ({
            ...prevData,
            [name]: value
        }));
        // Clear error on change
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleToggleChange = () => {
        setMedicationModalData(prevData => ({
            ...prevData,
            status: !prevData.status
        }));
    };

    const handleSave = (e) => {
        e.preventDefault(); // Prevent default form submission
        if (validate()) {
            if (onSave) {
                onSave(MedicationModalData); // Pass data to parent
            }
            closeModal(); // Close the modal and reset state
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
                    <div className="bg-white px-12 py-5 rounded-3xl shadow-lg w-full md:w-[564px] relative">
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
                        <StyledHeadingH1 text="Add New Medication" textColor="text-blue" />
                        <form className='flex flex-col gap-3'>
                            <div className='pt-4'>
                                <CustomInputField
                                    label="Enter medication name"
                                    textColor={errors.name ? 'text-red' : 'text-fade-blue'}
                                    background={errors.name ? 'bg-inputErrBg' : 'bg-sky-blue'}
                                    border={`${errors.name ? 'border-red' : 'border-transparent'}`}
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' }
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('name', value)}
                                    value={MedicationModalData.name}
                                    error={errors.name}
                                    touched={touched.name}
                                />
                                {errors.name && touched.name && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.name} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div>
                                <InputFieldsimple
                                    label="Strength"
                                    width='w-full'
                                    height='h-[55px]'
                                    rounded='rounded-xl'
                                    background="bg-sky-blue"
                                    required
                                    name='strength'
                                    value={MedicationModalData.strength}
                                    onChange={handleInputChange}
                                    error={errors.strength}
                                    touched={touched.strength}
                                />
                                {errors.strength && touched.strength && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.strength} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div>
                                <CustomInputField
                                    label="Formulation"
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' }
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('formulation', value)}
                                    value={MedicationModalData.formulation}
                                    error={errors.formulation}
                                    touched={touched.formulation}
                                />
                                {errors.formulation && touched.formulation && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.formulation} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div>
                                <CustomInputField
                                    label="Dosage"
                                    border={`border ${errors.dosage ? 'border-red' : 'border-transparent'}`}
                                    options={[
                                        { value: 'option1', label: 'Option 1' },
                                        { value: 'option2', label: 'Option 2' },
                                        { value: 'option3', label: 'Option 3' },
                                        { value: 'option4', label: 'Option 4' }
                                    ]}
                                    required={true}
                                    onSelect={(value) => handleDropdownSelect('dosage', value)}
                                    value={MedicationModalData.dosage}
                                    error={errors.dosage}
                                    touched={touched.dosage}
                                />
                                {errors.dosage && touched.dosage && (
                                    <div className='flex items-center gap-2 font-semibold mt-2'>
                                        <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                        <StyledSmText text={errors.dosage} textColor='text-red' fontWeight="font-normal" />
                                    </div>
                                )}
                            </div>

                            <div className='flex items-center gap-2'>
                                <ToggleButton
                                    checked={MedicationModalData.status}
                                    onChange={handleToggleChange}
                                    label='Actively taking medication?'
                                />
                            </div>

                            <div className='mt-2'>
                                <ButtonStyled
                                    text='Save'
                                    onClick={handleSave}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default MedicationModal;
