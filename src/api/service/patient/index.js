import { callPatient } from "@/api/callApi";

export const getAndFormatSecurityQuestions = async () => {
    try {
        const response = await callPatient('/patient/options/security-questions', 'GET');

        const data = response?.data;


        if (Array.isArray(data)) {
            const formattedQuestions = data.map((question) => ({
                value: question?.option || 'Unknown',
                label: question?.option || 'Unknown',
            }));

            return formattedQuestions;
        }
    } catch (error) {
        console.error('Error fetching security questions:', error);
    }
};


export const getAndFormatCountriesAndRegions = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,region');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const countries = await response.json();

        const formattedCountries = countries.map((country) => ({
            value: country.name.common,
            label: country.name.common
        }));

        const regions = [...new Set(countries.map(country => country.region))].filter(region => region); // Unique and non-empty regions
        const formattedRegions = regions.map((region) => ({
            value: region,
            label: region
        }));

        return { formattedCountries, formattedRegions }
    } catch (error) {
        console.log(error);
    }

};


export const getAndFormatEtnicities = async ({ pageParam = 1 }) => {
    try {
        const response = await callPatient(`/patient/options/ethnicities?page=${pageParam}&limit=10`, 'GET');
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching ethnicities');
    }
};

