// 'use client'
// import * as Yup from 'yup';
// import { useState } from 'react';
// const [isexceciseChecked, setIsexceciseChecked] = useState(false);

// const numericValueWithUnit = Yup.string()
//     .matches(/^\d+(\.\d+)?\s?(Inches|Cm|Feet|lbs|kg)$/, 'Must be a valid number with a unit')
//     .required('This field is required');


// export const MedicalHistorySchema = Yup.object().shape({
//     height: numericValueWithUnit,
//     weight: numericValueWithUnit,
//     bloodGroup: Yup.string().required("Blood Group is required"),
//     Ethnicity: Yup.string().required("Ethnicity is required"),
//     rateOverallHealth: Yup.string().required("Rate overall health is requied"),
//     sleepinghours: Yup.string().required("Sleeping Hour is required"),
//     improvesleep: Yup.string().required("Improve Sleep is required"),


//     // other validations
//     howoftenexercise: isexceciseChecked ? Yup.string().required('How often do you exercise is required') : Yup.string(),
//     physicalactivites: isexceciseChecked ? Yup.array().min(1, 'At least one physical activity is required') : Yup.array(),

// });




import * as Yup from 'yup';

export const createMedicalHistorySchema = (isexceciseChecked, issmokedChecked, isalcohalChecked) => {

    return Yup.object().shape({
        height: Yup.number().required('Height value is required'),
        heightUnit: Yup.string().oneOf(['Inches', 'Cm', 'Feet'], 'Invalid unit').required('Height unit is required'),
        weight: Yup.number().required('Weight value is required'),
        weightUnit: Yup.string().oneOf(['lbs', 'kg'], 'Invalid unit').required('Weight unit is required'),
        bloodGroup: Yup.string().required("Blood Group is required"),
        ethnicity: Yup.string().required("Ethnicity is required"),
        overallHealth: Yup.string().required("OverallHealth is required"),
        avgNightSleep: Yup.string().required("Rate overall health is required"),
        // sleepinghours: Yup.string().required("Sleeping Hour is required"),
        helpInImprovingSleep: Yup.string().required("Improve Sleep is required"),


        // Conditional validations

        // Conditional validation
        howoftenexercise: isexceciseChecked
            ? Yup.string().required('How often do you exercise is required')
            : Yup.string(),
        physicalActivities: isexceciseChecked
            ? Yup.array().min(1, 'At least one physical activity is required')
            : Yup.array(),
        // howoftenexercise: isexceciseChecked ? Yup.string().required('How often do you exercise is required') : Yup.string(),
        // physicalactivites: isexceciseChecked ? Yup.array().required('physical activity is required') : Yup.array(),


        fruitsAndVegetablesConsumption: Yup.string().required("Fruit & vegetables diet required"),
        fastFoodOrTakeout: Yup.string().required("Fast Food descrption required"),
        twoLiterWaterADay: Yup.string().required("Water Habits is required"),
        helpInLoseWeight: Yup.string().required("Weght Lose description is required"),
        workLifeBalance: Yup.string().required("Work Life balance is required"),
        enoughTimeForHobbiesAndInterests: Yup.string().required("Intersts and Hobbies are required"),
        stressInYourDailyLife: Yup.string().required("How to handle Stress is required"),
        helpInStressManagement: Yup.string().required("How to handle Stress management is required"),
        spendTimeWithFriendsAndFamily: Yup.string().required("Friends and Family time is required"),
        feelSenseOfCommunity: Yup.string().required(" sense of community or belonging where you live is required"),

        // Conditional validation for smoking fields
        // doyousmoke: issmokedChecked
        //     ? Yup.string().required('What do you smoke is required')
        //     : Yup.string(),
        smokeType: issmokedChecked
            ? Yup.string().required('How often do you smoke is required')
            : Yup.string(),
        oftenDoYouSmoke: issmokedChecked
            ? Yup.string().required('How long have you been smoking is required')
            : Yup.string(),
        beenSmokingFor: issmokedChecked
            ? Yup.string().required("beenSmokingFor is required") : Yup.string(),

        // Conditional validations for alcohol
        oftenDoYouDrinkAlcohol: isalcohalChecked ? Yup.string().required('How often do you drink alcohol is required') : Yup.string(),
        howMuchDoYouDrink: isalcohalChecked ? Yup.string().required('How much do you drink is required') : Yup.string(),


    });
};
