'use client';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StyledHeadingH2 from '@/common/components/styledHeadingH2/StyledHeadingH2';
import InputFieldsimple from '../InputField/InputFieldsimple';
import ButtonStyled from '@/common/components/button/Button';
import { MdLock } from "react-icons/md";
import { editProfile } from '@/redux/slices/signupSlice';
import EditProfileSchema from '@/validationSchemas/editProfileSchema/EditProfileSchema';
import StyledHeadingH3 from '@/common/components/styledHeadingH3/StyledHeadingH3';

const EditProfileForm = () => {
    const dispatch = useDispatch();
    const { firstName, lastName, email, phonenumber, address, country } = useSelector((state) => state.signup.signupData);

    const formik = useFormik({
        initialValues: {
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            phonenumber: phonenumber || '',
            address: address || '',
            country: country || ''
        },
        validationSchema: EditProfileSchema,
        onSubmit: (values) => {
            dispatch(editProfile(values)); // Dispatch updated profile data
        }
    });

    const { errors, touched } = formik;
    useEffect(() => {
        // Update Formik values when Redux data changes
        formik.setValues({
            firstName: firstName || '',
            lastName: lastName || '',
            email: email || '',
            phonenumber: phonenumber || '',
            address: address || '',
            country: country || ''
        });
    }, [firstName, lastName, email, phonenumber, address, country]);

    return (
        <div className='flex justify-center'>
            <form onSubmit={formik.handleSubmit}
                className='bg-white shadow-lg rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-[470px] sm:max-w-[550px]  md:max-w-[550px] lg:max-w-[550px]'


            >
                {/* {JSON.stringify(errors, undefined, 2)} */}
                <div className="w-full flex flex-col gap-5">
                    <div>
                        <StyledHeadingH2 text="About You" textColor="text-blue" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full">
                            <InputFieldsimple
                                name="firstName"
                                label="First Name"
                                placeholder="Enter Your First Name"
                                icon={<MdLock size={20} className='text-fade-blue' />}
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && formik.errors.firstName}
                            />
                        </div>
                        <div className="w-full">
                            <InputFieldsimple
                                label="Last Name"
                                placeholder="Enter Your Last Name"
                                icon={<MdLock size={20} className='text-fade-blue' />}
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && formik.errors.lastName}
                            />
                        </div>
                        <div className='pt-6 pb-3'>
                            {/* <StyledHeadingH2  text="Contact Information" textColor="text-fade-blue" /> */}
                            <StyledHeadingH2
                                text="Contact Information"
                                textColor="text-fade-blue"
                                className="text-2xl md:text-2xl lg:text-3xl"
                            />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className="w-full">
                                <InputFieldsimple
                                    name="email"
                                    placeholder="Enter Your Email"
                                    label="Email"
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && formik.errors.email}
                                />
                            </div>
                            <div className="w-full">
                                <InputFieldsimple
                                    name="phonenumber"
                                    label="Phone no."
                                    placeholder="Enter Your Phone no"
                                    required
                                    value={formik.values.phonenumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.phonenumber && formik.errors.phonenumber}
                                />
                            </div>
                        </div>
                        <div className='pt-6 pb-3'>
                            <StyledHeadingH2 text="Address" textColor="text-fade-blue" />
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className="w-full">
                                <InputFieldsimple
                                    name="country"
                                    label="Region"
                                    placeholder="Enter your region"
                                    required
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && formik.errors.country}
                                />
                            </div>
                            <div className="w-full">
                                <InputFieldsimple
                                    name="address"
                                    label="Address"
                                    placeholder="Enter your address"
                                    required
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.address && formik.errors.address}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-2 btn mt-5'>
                    <ButtonStyled
                        background='bg-white'
                        textColor='text-gray'
                        text="Cancel"
                        border="border border-gray"
                    />
                    <ButtonStyled
                        type="submit"
                        text="Save"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditProfileForm;
