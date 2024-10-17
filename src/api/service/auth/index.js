import { callAuth } from "@/api/callApi";


export const postSignUp = async (request) => {
    try {

        const response = await callAuth('/auth/patient/register', 'POST', request)
        return response?.data;


    } catch (error) {
        throw error

    }

}

export const postSignUpOtpVerification = async (request) => {

    try {
        const response = await callAuth('/auth/patient/account-verification', 'POST', request)
        return response?.data
    } catch (error) {
        throw error
    }
}


export const postSignUpResendOtp = async (request) => {
    try {
        const response = await callAuth('/auth/patient/resend-otp', 'POST', request)
        return response?.data

    } catch (error) {
        throw error
    }
}

export const postLogin = async (request) => {

    try {
        const response = await callAuth('/auth/patient/login', 'POST', request)

        return response?.data


    } catch (error) {
        throw error
    }

}


export const postForgotPassword = async (request) => {
    try {

        const response = await callAuth('/auth/patient/forgot-password', 'POST', request);

        return response?.data

    } catch (error) {

        throw error
    }

}

export const postForgotPasswordOtp = async (request) => {

    try {
        const response = await callAuth('/auth/patient/verify-otp', 'POST', request);
        return response?.data

    } catch (error) {
        throw error
    }
}


export const postResetPassword = async (request) => {
    try {
        const response = await callAuth('/auth/patient/reset-password','POST', request);
        return response?.data

    } catch (error) {
        throw error
    }
}




export const postLogout = async (request) => {
    try {
        const response = await callAuth('/auth/patient/logout', 'POST', request);
        return response?.data

    } catch (error) {
        throw error
    }
}
