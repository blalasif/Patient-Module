'use client'
import React, { useState, useRef, useEffect, useCallback } from 'react';
import DropDownButton from '../heightInput/HeightInput';
import CustomInputField from '@/components/customInputFieldDropdown/CustomInputField';
import MedicationTable from '../medicationTable/MedicationTable';
import StyledHeadingH6 from '@/common/components/styledHeadingH6/StyledHeadingH6';
import MedicationModal from '../medicationModal/MedicationModal';
import AllergyTable from '../allergyTable/AllergyTable';
import AllergyModal from '../allergyModal/AllergyModal';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';
import ToggleButton from '@/common/components/toggle/ToggleButton ';
import InputFieldsimple from '../InputField/InputFieldsimple';
import HealthProblemSection from '@/sections/healthProblemSection/HealthProblemSection';
import FamilyHistorySection from '@/sections/familyHistoySection/FamilyHistorySection';
import ButtonStyled from '@/common/components/button/Button';
import { Formik, useFormik } from 'formik';
import StyledSmText from '@/common/components/styledSmText/StyledSmText';
import Image from 'next/image';
import { createMedicalHistorySchema } from '@/validationSchemas/medicalHistorySchema/MedicalHistorySchema';
import { useDispatch } from 'react-redux';
import { setMedicalHistory } from '@/redux/slices/medicalHistorySlice';
import { useGetEthnicities } from '@/hooks/api/useGetEthnicities';

const MedicalHistoryForm = () => {
    const [medications, setMedications] = useState([])
    const [allergies, setAllergies] = useState([])
    const [wantToQuitChecked, setWantToQuitChecked] = useState(false);

    const [healthProblemsData, setHealthProblemsData] = useState([]);
    const [familyHistoryData, setFamilyHistoryData] = useState([])
    const [showCurrent, setShowCurrent] = useState(false);
    const [allergyCurrent, setAllergyCurrent] = useState(false)

    //mutations
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetEthnicities();
    // Flatten pages to generate options for the dropdown
    const ethnicityOptions = data
        ? data.pages.flatMap(page =>
            page.items.map(item => ({
                value: item.option,
                label: item.option,
            }))
        )
        : [];


    // Handle scroll event to fetch more data
    const containerRef = useRef(null);

    // Load more data when scrolled to bottom
    const loadMore = useCallback(() => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 50) {
                if (hasNextPage && !isFetchingNextPage) {
                    fetchNextPage();
                }
            }
        }
    }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

    // Add scroll event listener to container
    useEffect(() => {
        const container = containerRef.current;
        container?.addEventListener('scroll', loadMore);
        return () => container?.removeEventListener('scroll', loadMore);
    }, [loadMore]);







    //redux

    const dispatch = useDispatch();




    const [healtherrors, setHealtherrors] = useState({});

    const handleAllergySave = (newAllergy) => {
        setAllergies(prevData => {
            const updatedData = [...prevData, newAllergy];
            formik.setValues(prevValues => ({
                ...prevValues,
                allergies: updatedData,
            }));
            return updatedData;
        });
        setAllergyCurrent(newAllergy.isChecked);
    };


    const DeleteAllergyTable = (index) => {
        setAllergies(prevData => {
            const updatedData = prevData.filter((_, i) => i !== index);
            formik.setValues(prevValues => ({
                ...prevValues,
                allergies: updatedData,
            }));
            return updatedData;
        });
    };


    const handleMedicationSave = (newMedication) => {
        setMedications(prevData => {
            const updatedData = [...prevData, newMedication];
            formik.setValues(prevValues => ({
                ...prevValues,
                medications: updatedData,
            }));
            return updatedData;
        });
        setShowCurrent(newMedication.isChecked);
    };



    const DeleteMedicationTable = (index) => {
        setMedications(prevData => {
            const updatedData = prevData.filter((_, i) => i !== index);
            formik.setValues(prevValues => ({
                ...prevValues,
                medications: updatedData,
            }));
            return updatedData;
        });
    };

    const [openDropdown, setOpenDropdown] = useState(null);
    //select states for values selection
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedExcercise, setSelectedExcercise] = useState('')
    const [selectedSmoke, setSelectedSmoke] = useState('')
    const [selectedAlcohal, setSelectedAlcohal] = useState('')
    const [isexceciseChecked, setIsexceciseChecked] = useState(false);
    const [issmokedChecked, setIsSmokeChecked] = useState(false)
    const [isalcohalChecked, setIsAlcohalChecked] = useState(false)
    //formik
    const formik = useFormik({
        initialValues: {


            height: '',  // e.g., "5.7"
            heightUnit: '',   // e.g., "Feet"
            weight: '',  // e.g., "60"
            weightUnit: '',   // e.g., "lbs"
            bloodGroup: '',
            ethnicity: '',
            medications: [],
            allergies: [],
            overallHealth: '',
            avgNightSleep: '',
            helpInImprovingSleep: '',
            doYouExercise: false,
            howoftenexercise: '',
            physicalActivities: [],
            fruitsAndVegetablesConsumption: '',
            fastFoodOrTakeout: '',
            twoLiterWaterADay: '',
            helpInLoseWeight: '',
            workLifeBalance: '',
            enoughTimeForHobbiesAndInterests: '',
            stressInYourDailyLife: '',
            helpInStressManagement: '',
            spendTimeWithFriendsAndFamily: '',
            feelSenseOfCommunity: '',
            doYouSmoke: false,
            smokeType: '',
            oftenDoYouSmoke: '',
            beenSmokingFor: '',
            wantToQuit: false,
            oftenDoYouDrinkAlcohol: '',
            howMuchDoYouDrink: '',
            healthProblems: {
                selectedProblems: [],
                otherProblem: '',
                additionalInputs: []
            },
            familyHistory: [],



        },
        validationSchema: createMedicalHistorySchema(isexceciseChecked, issmokedChecked, isalcohalChecked),

        onSubmit: (values, { resetForm }) => {
            // Combine values for submission
            const formattedValues = {
                height: values.height,
                heightUnit: values.heightUnit,
                weight: values.weight,
                weightUnit: values.weightUnit,
                ...values // Spread the rest of the values
            };


            console.log("🚀 ~ MedicalHistoryForm ~ values:", formattedValues);
            resetForm();
        }

    });
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = formik;

    const handleHealthProblemsChange = (data) => {
        setHealthProblemsData(data);
        // Directly update formik values
        formik.values.healthProblems = data;
    };


    const handleFamilyHistoryChange = (data) => {
        setFamilyHistoryData(data)
        // formik.setFieldValue('family history data', data)
        formik.values.familyHistory = data;
    }

    //formik

    const handleToggleSmoke = () => {
        const newChecked = !issmokedChecked;

        // Update the Formik state with the new value of doYouSmoke
        formik.setFieldValue('doYouSmoke', newChecked);

        if (!newChecked) {
            // If toggle is being turned off, reset related fields
            formik.setFieldValue('smokeType', '');
            formik.setFieldValue('oftenDoYouSmoke', '');
        }

        setIsSmokeChecked(newChecked);

        // Trigger validation if needed
        formik.validateForm();
    };


    const handleToggleExcersise = () => {
        setIsexceciseChecked((prev) => {
            const newChecked = !prev;

            // Update the Formik state with the new value of doYouExercise
            formik.setFieldValue('doYouExercise', newChecked);

            if (!newChecked) {
                // If toggle is being turned off, reset the fields
                formik.setFieldValue('howoftenexercise', '');
                formik.setFieldTouched('howoftenexercise', false);
                formik.setFieldValue('physicalActivities', '');
                formik.setFieldTouched('physicalActivities', false);
            }

            return newChecked;
        });
    };

    const handleToggleWantToQuit = () => {
        const newChecked = !wantToQuitChecked;

        // Update the Formik state based on the toggle's new state
        formik.setFieldValue('wantToQuit', newChecked);

        setWantToQuitChecked(newChecked);
    };



    const handleToggleAlcohal = () => {
        setIsAlcohalChecked((prev) => {
            const newCheckedState = !prev;

            // Update the formik field value based on the toggle state
            formik.setFieldValue('drinkAlcohol', newCheckedState);

            if (!newCheckedState) {
                // If toggle is being turned off, reset the related fields
                formik.setFieldValue('howMuchDoYouDrink', '');
                formik.setFieldTouched('howMuchDoYouDrink', false);

                formik.setFieldValue('oftenDoYouDrinkAlcohol', '');
                formik.setFieldTouched('oftenDoYouDrinkAlcohol', false);

                // Optionally close the dropdowns if necessary
                setOpenDropdown(null);
            }

            return newCheckedState;
        });
    };



    // Handle dropdown selection
    const handleDropdownSelect = (name, value, selectedOption) => {
        console.log('Selected:', value, selectedOption);
        // Add logic to handle selected value here
    };


    // const handleDropdownSelect = (name, value,selectedOption) => {
    //     // setFieldValue(name, value);
    //     formik.setFieldValue(name, selectedOption.label);
    //     setSelectedValue(value);
    //     setOpenDropdown(null);
    // };



    const handleDropdownToggle = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };




    return (
        <div className='flex justify-center'>
            <form
                onSubmit={handleSubmit}
                className='bg-white shadow-lg rounded-3xl p-10 md:p-12 w-full max-w-[564px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px] mt-5'
            >               
            
             <div className="w-full flex flex-col gap-5">

                    <div className='z-20'>
                        <DropDownButton
                            label="Height"
                            placeholder="Enter Your Height"
                            options={['Inches', 'Cm', 'Feet']}
                            value={`${formik.values.height} ${formik.values.heightUnit}`}
                            onChange={value => {
                                const [inputValue, option] = value.split(' ');
                                formik.setFieldValue('height', inputValue);
                                formik.setFieldValue('heightUnit', option);
                            }}
                            required
                            rounded='rounded-xl'
                            error={formik.errors.height}
                            touched={formik.touched.height}
                        />
                        {formik.errors.height && formik.touched.height ? (
                            <div className='flex items-center gap-2 font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={formik.errors.height} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}
                    </div>

                    <div className='z-10'>
                        <DropDownButton
                            label="Weight"
                            placeholder="Enter Your Weight"
                            options={['lbs', 'kg']}
                            value={`${formik.values.weight} ${formik.values.weightUnit}`}
                            onChange={value => {
                                const [inputValue, option] = value.split(' ');
                                formik.setFieldValue('weight', inputValue);
                                formik.setFieldValue('weightUnit', option);
                            }}
                            required
                            rounded='rounded-xl'
                            error={formik.errors.weight}
                            touched={formik.touched.weight}
                        />
                        {formik.errors.weight && formik.touched.weight ? (
                            <div className='flex items-center gap-2 font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={formik.errors.weight} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}
                    </div>


                    <div className=''>
                        <CustomInputField
                            label="Blood Group"
                            placeholder="Select"
                            options={[
                                { value: 'option1', label: 'Option 1' },
                                { value: 'option2', label: 'Option 2' },
                                { value: 'option3', label: 'Option 3' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                                { value: 'option4', label: 'Option 4' },
                            ]}
                            name="bloodGroup"
                            required={true}
                            onSelect={(value) => handleDropdownSelect('bloodGroup', value)}
                            value={values.bloodGroup}
                            isOpen={openDropdown === 'dropdown1'}
                            onDropdownToggle={() => handleDropdownToggle('dropdown1')}
                            error={formik.errors.bloodGroup}
                            touched={formik.touched.bloodGroup}

                        />
                        {formik.errors.bloodGroup && formik.touched.bloodGroup ? (
                            <div className='flex items-center gap-2  font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={formik.errors.bloodGroup} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}

                    </div>
                    <div ref={containerRef} className=''>
                        <CustomInputField
                            label="Ethnicity"
                            placeholder="Select"
                            options={ethnicityOptions}
                            name="ethnicity"
                            required={true}
                            onSelect={(value, selectedOption) => handleDropdownSelect('ethnicity', value, selectedOption)} // Ensure correct parameters
                            value={values.ethnicity}
                            isOpen={openDropdown === 'dropdown2'}
                            onDropdownToggle={() => handleDropdownToggle('dropdown2')}
                            error={formik.errors.ethnicity}
                            touched={formik.touched.ethnicity}

                        />
                        {formik.errors.ethnicity && formik.touched.ethnicity ? (
                            <div className='flex items-center gap-2  font-semibold mt-2'>
                                <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                <StyledSmText text={formik.errors.ethnicity} textColor='text-fade-blue' fontWeight="font-normal" />
                            </div>
                        ) : null}

                    </div>

                    <div>
                        {/* <MedicationTable /> */}
                        <div className='flex px-1 gap-2'>
                            <StyledHeadingH3 text="Medications" textColor="text-blue" />

                        </div>
                        {medications.length > 0 && (
                            <div className="">
                                <MedicationTable medications={medications} onDelete={DeleteMedicationTable} />
                            </div>
                        )}


                        <div className='flex pt-1'>

                            <MedicationModal onSave={handleMedicationSave} />

                        </div>
                        <div className='flex px-1 gap-2'>
                            <StyledHeadingH3 text="Allergies" textColor="text-blue" />
                        </div>


                        {allergies.length > 0 && (
                            <div className='pt-2'>
                                <AllergyTable allergy={allergies} onDelete={DeleteAllergyTable} />
                            </div>
                        )}
                        <div className='flex pt-2'>
                            <AllergyModal onSave={handleAllergySave} />



                        </div>

                        <div className=' pt-3.5 pb-5'>
                            <StyledHeadingH3 text="General Health And Well-Being" textColor="text-blue" />
                        </div>

                        <div className='pt-4'>
                            <CustomInputField
                                label="How would you rate your overall health?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                ]}
                                required={true}
                                name="overallHealth"
                                onSelect={(value) => handleDropdownSelect('overallHealth', value)}
                                value={values.overallHealth}
                                isOpen={openDropdown === 'dropdown3'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown3')}
                                error={formik.errors.overallHealth}
                                touched={formik.touched.overallHealth}

                            />

                            {formik.errors.overallHealth && formik.touched.overallHealth ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.overallHealth} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <CustomInputField
                                label="How many hours of sleep do you get on average night?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                ]}
                                required={true}
                                name="avgNightSleep"
                                onSelect={(value) => handleDropdownSelect('avgNightSleep', value)}
                                value={values.avgNightSleep}
                                isOpen={openDropdown === 'dropdown4'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown4')}
                                error={formik.errors.avgNightSleep}
                                touched={formik.touched.avgNightSleep}

                            />
                            {formik.errors.avgNightSleep && formik.touched.avgNightSleep ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.avgNightSleep} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}

                        </div>
                        <div className='pt-4'>
                            <CustomInputField
                                label="Would you like help with improving your sleep?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option4', label: 'Option 4' },
                                ]}
                                required={true}
                                name="helpInImprovingSleep"
                                onSelect={(value) => handleDropdownSelect('helpInImprovingSleep', value)}
                                value={values.helpInImprovingSleep}
                                isOpen={openDropdown === 'dropdown5'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown5')}
                                error={formik.errors.helpInImprovingSleep}
                                touched={formik.touched.helpInImprovingSleep}
                            />
                            {formik.errors.helpInImprovingSleep && formik.touched.helpInImprovingSleep ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.helpInImprovingSleep} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}

                        </div>

                        <div className='pt-3'>

                            <ToggleButton
                                checked={formik.values.doYouExercise}
                                onChange={handleToggleExcersise}
                                label="Do you exercise?"
                            />

                        </div>

                        {isexceciseChecked && (
                            <>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="How often do you exercise?"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                        ]}
                                        required={true}
                                        name="howoftenexercise"
                                        onSelect={(value) => setFieldValue('howoftenexercise', value)}
                                        value={values.howoftenexercise}
                                        error={formik.errors.howoftenexercise}
                                        touched={formik.touched.howoftenexercise}
                                    />
                                    {formik.errors.howoftenexercise && formik.touched.howoftenexercise ? (
                                        <div className='flex items-center gap-2  font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.howoftenexercise} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}

                                </div>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="What types of physical activities do you regularly participate in?"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                        ]}
                                        required={true}
                                        name="physicalActivities"
                                        multipleCheck={true}
                                        onSelect={(value) => setFieldValue('physicalActivities', value)}
                                        value={values.physicalActivities}
                                        error={formik.errors.physicalActivities}
                                        touched={formik.touched.physicalActivities} />
                                    {formik.errors.physicalActivities && formik.touched.physicalActivities ? (
                                        <div className='flex items-center gap-2  font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.physicalActivities} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}

                                </div>
                            </>
                        )}




                        {/* <div className='pt-3'>
                            <ToggleButton
                                checked={isexceciseChecked}
                                onChange={handleToggleExcersise}
                                label="Do you exercise?"
                            />
                        </div>

                        {isexceciseChecked && (
                            <>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="How often do you exercise?"
                                        width="w-full"
                                        height="h-[55px]"
                                        rounded="rounded-xl"
                                        textColor="text-black"
                                        background="bg-sky-blue"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                            // Add more options if needed
                                        ]}
                                        required={true}
                                        name="howoftenexercise"
                                        onSelect={(value) => handleDropdownSelect('howoftenexercise', value)}
                                        value={values.howoftenexercise}
                                        isOpen={openDropdown === 'dropdown6'}
                                        onDropdownToggle={() => handleDropdownToggle('dropdown6')}
                                    />
                                </div>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="What types of physical activities do you regularly participate in?"
                                        width="w-full"
                                        height="h-[55px]"
                                        rounded="rounded-xl"
                                        textColor="text-black"
                                        background="bg-sky-blue"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                            // Add more options if needed
                                        ]}
                                        required={true}
                                        name="physicalactivites"
                                        multipleCheck={true} // Enable multiple checkboxes
                                        onSelect={(value) => handleDropdownSelect('physicalactivites', value)}
                                        value={values.physicalactivites}
                                        isOpen={openDropdown === 'dropdown7'}
                                        onDropdownToggle={() => handleDropdownToggle('dropdown7')}

                                    />
                                </div>
                            </>

                        )} */}

                        <div className='pt-4'>
                            <StyledHeadingH3 text="Diet" textColor="text-blue" />
                        </div>
                        <div className='pt-4'>
                            <CustomInputField
                                label="How many servings of fruits and vegetables do you consume daily?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="fruitsAndVegetablesConsumption"
                                onSelect={(value) => handleDropdownSelect('fruitsAndVegetablesConsumption', value)}
                                value={values.fruitsAndVegetablesConsumption}
                                error={formik.errors.fruitsAndVegetablesConsumption}
                                touched={formik.touched.fruitsAndVegetablesConsumption}
                                isOpen={openDropdown === 'dropdown8'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown8')}
                            />

                            {formik.errors.fruitsAndVegetablesConsumption && formik.touched.fruitsAndVegetablesConsumption ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.fruitsAndVegetablesConsumption} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <CustomInputField
                                label="How often do you eat fast food or takeout?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="fastFoodOrTakeout"
                                onSelect={(value) => handleDropdownSelect('fastFoodOrTakeout', value)}
                                value={values.fastFoodOrTakeout}
                                error={formik.errors.fastFoodOrTakeout}
                                touched={formik.touched.fastFoodOrTakeout}
                                isOpen={openDropdown === 'dropdown9'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown9')}
                            />
                            {formik.errors.fastFoodOrTakeout && formik.touched.fastFoodOrTakeout ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.fastFoodOrTakeout} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <CustomInputField
                                label="Do you drink at least 2 liter of water a day?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="twoLiterWaterADay"
                                onSelect={(value) => handleDropdownSelect('twoLiterWaterADay', value)}
                                value={values.twoLiterWaterADay}
                                error={formik.errors.twoLiterWaterADay}
                                touched={formik.touched.twoLiterWaterADay}
                                isOpen={openDropdown === 'dropdown10'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown10')}
                            />
                            {formik.errors.twoLiterWaterADay && formik.touched.twoLiterWaterADay ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.twoLiterWaterADay} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>


                        <div className='pt-4'>
                            <CustomInputField
                                label="Would you like help to lose weight?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name='helpInLoseWeight'
                                onSelect={(value) => handleDropdownSelect('helpInLoseWeight', value)}
                                value={values.helpInLoseWeight}
                                error={formik.errors.helpInLoseWeight}
                                touched={formik.touched.helpInLoseWeight}
                                isOpen={openDropdown === 'dropdown11'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown11')}
                            />
                            {formik.errors.helpInLoseWeight && formik.touched.helpInLoseWeight ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.helpInLoseWeight} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <StyledHeadingH3 text="Work-Life Balance" textColor="text-blue" />
                        </div>


                        <div className='pt-4'>
                            <CustomInputField
                                label="How satisfied are you with your work-life balance?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="workLifeBalance"
                                onSelect={(value) => handleDropdownSelect('workLifeBalance', value)}
                                value={values.workLifeBalance}
                                error={formik.errors.workLifeBalance}
                                touched={formik.touched.workLifeBalance}
                                isOpen={openDropdown === 'dropdown12'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown12')}
                            />
                            {formik.errors.workLifeBalance && formik.touched.workLifeBalance ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.workLifeBalance} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>


                        <div className='pt-4'>
                            <CustomInputField
                                label="Do you have enough time to pursue hobbies or interests outside of work?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="enoughTimeForHobbiesAndInterests"
                                onSelect={(value) => handleDropdownSelect('enoughTimeForHobbiesAndInterests', value)}
                                value={values.enoughTimeForHobbiesAndInterests}
                                error={formik.errors.enoughTimeForHobbiesAndInterests}
                                touched={formik.touched.enoughTimeForHobbiesAndInterests}
                                isOpen={openDropdown === 'dropdown13'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown13')}
                            />
                            {formik.errors.enoughTimeForHobbiesAndInterests && formik.touched.enoughTimeForHobbiesAndInterests ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.enoughTimeForHobbiesAndInterests} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <CustomInputField
                                label="How often do you experience stress in your daily life?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="stressInYourDailyLife"
                                onSelect={(value) => handleDropdownSelect('stressInYourDailyLife', value)}
                                value={values.stressInYourDailyLife}
                                error={formik.errors.stressInYourDailyLife}
                                touched={formik.touched.stressInYourDailyLife}
                                isOpen={openDropdown === 'dropdown14'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown14')}
                            />
                            {formik.errors.stressInYourDailyLife && formik.touched.stressInYourDailyLife ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.stressInYourDailyLife} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className='pt-4'>
                            <CustomInputField
                                label="Would you like help with stress management?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="helpInStressManagement"
                                onSelect={(value) => handleDropdownSelect('helpInStressManagement', value)}
                                value={values.helpInStressManagement}
                                error={formik.errors.helpInStressManagement}
                                touched={formik.touched.helpInStressManagement}
                                isOpen={openDropdown === 'dropdown15'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown15')}
                            />

                            {formik.errors.helpInStressManagement && formik.touched.helpInStressManagement ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.helpInStressManagement} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>

                        <div className='pt-4'>
                            <StyledHeadingH3 text="Social Connections" textColor="text-blue" />
                        </div>
                        <div className='pt-4'>
                            <CustomInputField
                                label="How often do you spend time with friends and family?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="spendTimeWithFriendsAndFamily"
                                onSelect={(value) => handleDropdownSelect('spendTimeWithFriendsAndFamily', value)}
                                value={values.spendTimeWithFriendsAndFamily}
                                error={formik.errors.spendTimeWithFriendsAndFamily}
                                touched={formik.touched.spendTimeWithFriendsAndFamily}
                                isOpen={openDropdown === 'dropdown16'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown16')}
                            />

                            {formik.errors.spendTimeWithFriendsAndFamily && formik.touched.spendTimeWithFriendsAndFamily ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.spendTimeWithFriendsAndFamily} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>
                        <div className='pt-4'>
                            <CustomInputField
                                label="Do you feel a sense of community or belonging where you live?"
                                placeholder="Select"
                                options={[
                                    { value: 'option1', label: 'Option 1' },
                                    { value: 'option2', label: 'Option 2' },
                                    { value: 'option3', label: 'Option 3' },
                                    { value: 'option4', label: 'Option 4' },
                                    { value: 'option5', label: 'Option 5' },
                                    { value: 'option6', label: 'Option 6' },
                                    // Add more options if needed
                                ]}
                                required={true}
                                name="feelSenseOfCommunity"
                                onSelect={(value) => handleDropdownSelect('feelSenseOfCommunity', value)}
                                value={values.feelSenseOfCommunity}
                                error={formik.errors.feelSenseOfCommunity}
                                touched={formik.touched.feelSenseOfCommunity}
                                isOpen={openDropdown === 'dropdown17'}
                                onDropdownToggle={() => handleDropdownToggle('dropdown17')}
                            />

                            {formik.errors.feelSenseOfCommunity && formik.touched.feelSenseOfCommunity ? (
                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                    <StyledSmText text={formik.errors.feelSenseOfCommunity} textColor='text-fade-blue' fontWeight="font-normal" />
                                </div>
                            ) : null}
                        </div>





                        <div className='pt-3'>
                            <ToggleButton
                                checked={issmokedChecked}
                                onChange={handleToggleSmoke}
                                label="Do you smoke/ use tobacco?"
                            />
                        </div>

                        {issmokedChecked && (
                            <>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="What do you smoke?"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                        ]}
                                        required={true}
                                        name="smokeType"
                                        onSelect={(value) => handleDropdownSelect('smokeType', value)}

                                        value={formik.values.smokeType}
                                        error={formik.errors.smokeType}
                                        touched={formik.touched.smokeType}
                                        isOpen={openDropdown === 'dropdown18'}
                                        onDropdownToggle={() => handleDropdownToggle('dropdown18')}
                                    />
                                    {formik.errors.smokeType && formik.touched.smokeType ? (
                                        <div className='flex items-center gap-2  font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.smokeType} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}
                                </div>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="How often do you smoke?"
                                        placeholder="Select"
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                        ]}
                                        required={true}
                                        name="oftenDoYouSmoke"
                                        onSelect={(value) => handleDropdownSelect('oftenDoYouSmoke', value)}

                                        value={formik.values.oftenDoYouSmoke}
                                        error={formik.errors.oftenDoYouSmoke}
                                        touched={formik.touched.oftenDoYouSmoke}
                                        isOpen={openDropdown === 'dropdown19'}
                                        onDropdownToggle={() => handleDropdownToggle('dropdown19')}
                                    />
                                    {formik.errors.oftenDoYouSmoke && formik.touched.oftenDoYouSmoke ? (
                                        <div className='flex items-center gap-2  font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.oftenDoYouSmoke} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}
                                </div>
                                <div className='pt-4'>
                                    <CustomInputField
                                        label="How long have you been smoking for?"
                                        required
                                        placeholder="Select"
                                        name="beenSmokingFor"
                                        onSelect={(value) => handleDropdownSelect('beenSmokingFor', value)}
                                        options={[
                                            { value: 'option1', label: 'Option 1' },
                                            { value: 'option2', label: 'Option 2' },
                                            { value: 'option3', label: 'Option 3' },
                                            { value: 'option4', label: 'Option 4' },
                                            { value: 'option5', label: 'Option 5' },
                                            { value: 'option6', label: 'Option 6' },
                                        ]}
                                        isOpen={openDropdown === 'dropdown20'}
                                        onDropdownToggle={() => handleDropdownToggle('dropdown20')}
                                        value={formik.values.beenSmokingFor}
                                        error={formik.errors.beenSmokingFor}
                                        touched={formik.touched.beenSmokingFor}

                                    />
                                    {formik.errors.beenSmokingFor && formik.touched.beenSmokingFor ? (
                                        <div className='flex items-center gap-2  font-semibold mt-2'>
                                            <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                            <StyledSmText text={formik.errors.beenSmokingFor} textColor='text-fade-blue' fontWeight="font-normal" />
                                        </div>
                                    ) : null}
                                </div>

                                <div className='pt-3'>
                                    <ToggleButton
                                        checked={wantToQuitChecked}
                                        onChange={handleToggleWantToQuit}
                                        label="Do you want to quit?"
                                    />
                                </div>

                                <div className='pt-3'>
                                    <ToggleButton
                                        checked={isalcohalChecked}
                                        onChange={handleToggleAlcohal}
                                        label="Do you drink alcohol?"
                                    />
                                </div>

                                {isalcohalChecked && (
                                    <>
                                        <div className='pt-2'>
                                            <CustomInputField
                                                label="How often do you drink alcohol?"
                                                placeholder="Select"
                                                options={[
                                                    { value: 'option1', label: 'Option 1' },
                                                    { value: 'option2', label: 'Option 2' },
                                                    { value: 'option3', label: 'Option 3' },
                                                    { value: 'option4', label: 'Option 4' },
                                                    { value: 'option5', label: 'Option 5' },
                                                    { value: 'option6', label: 'Option 6' },
                                                    // Add more options if needed
                                                ]}
                                                required={true}
                                                name="oftenDoYouDrinkAlcohol"
                                                onSelect={(value) => handleDropdownSelect('oftenDoYouDrinkAlcohol', value)}
                                                value={values.oftenDoYouDrinkAlcohol}
                                                error={formik.errors.oftenDoYouDrinkAlcohol}
                                                touched={formik.touched.oftenDoYouDrinkAlcohol}
                                                isOpen={openDropdown === 'dropdown21'}
                                                onDropdownToggle={() => handleDropdownToggle('dropdown21')}
                                            />
                                            {formik.errors.oftenDoYouDrinkAlcohol && formik.touched.oftenDoYouDrinkAlcohol ? (
                                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                                    <StyledSmText text={formik.errors.oftenDoYouDrinkAlcohol} textColor='text-fade-blue' fontWeight="font-normal" />
                                                </div>
                                            ) : null}



                                        </div>
                                        <div className='pt-2'>
                                            <CustomInputField
                                                label="How much do you drink?"
                                                placeholder="Select"
                                                options={[
                                                    { value: 'option1', label: 'Option 1' },
                                                    { value: 'option2', label: 'Option 2' },
                                                    { value: 'option3', label: 'Option 3' },
                                                    { value: 'option4', label: 'Option 4' },
                                                    { value: 'option5', label: 'Option 5' },
                                                    { value: 'option6', label: 'Option 6' },
                                                    // Add more options if needed
                                                ]}
                                                required={true}
                                                name="howmuchdrink"
                                                onSelect={(value) => handleDropdownSelect('howMuchDoYouDrink', value)}
                                                value={values.howMuchDoYouDrink}
                                                error={formik.errors.howMuchDoYouDrink}
                                                touched={formik.touched.howMuchDoYouDrink}
                                                isOpen={openDropdown === 'dropdown22'}
                                                onDropdownToggle={() => handleDropdownToggle('dropdown22')}
                                            />

                                            {formik.errors.howMuchDoYouDrink && formik.touched.howMuchDoYouDrink ? (
                                                <div className='flex items-center gap-2  font-semibold mt-2'>
                                                    <Image src="/assets/svg/validation-icon.svg" alt='validation error' width={20} height={20} />
                                                    <StyledSmText text={formik.errors.howMuchDoYouDrink} textColor='text-fade-blue' fontWeight="font-normal" />
                                                </div>
                                            ) : null}
                                        </div>




                                    </>
                                )}

                            </>
                        )}



                    </div>









                    <div className=''>
                        <HealthProblemSection onHealthProblemsChange={handleHealthProblemsChange} />

                    </div>





                    <div>
                        <FamilyHistorySection onFamilyHistoryChange={handleFamilyHistoryChange} />

                    </div>

                    <div className=' pt-5'>
                        <ButtonStyled
                            width='w-full'
                            height='h-[55px]'
                            background='bg-gradient-btn'
                            text='Save'
                            fontWeight='font-semibold'
                            rounded='rounded-xl'
                            textColor="text-white"
                            type='submit'

                        />
                    </div>


                </div>
            </form>
        </div>
    );
}

export default MedicalHistoryForm;
