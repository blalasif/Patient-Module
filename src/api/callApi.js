import axios from "axios";

export const AuthAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_AUTH_URL,
    withCredentials: true
})

export const callAuth = async (url, method = 'GET', payload = {}, params = {}) => {
    try {
        const res = await AuthAPI({
            url,
            method,
            data: payload,
            params
        });
        console.log("🚀 ~ callAuth ~ res:", res);
        return res;
    } catch (error) {
        console.log("🚀 ~ callAuth ~ error:", error);
        throw error;
    }
};


export const PatientAPI = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PATIENT_URL,
    withCredentials: true
})

export const callPatient = async (url, method = 'GET', payload, params = {}) => {
    try {

        const res = await PatientAPI({
            url,
            method,
            data: payload,
            params
        })

        return res

    } catch (error) {
        console.log("🚀 ~ callPatient ~ error:", error)

    }
}




