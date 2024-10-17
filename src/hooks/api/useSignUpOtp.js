import { postSignUpOtpVerification } from "@/api/service/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify";


export const useSignUpOtp = (onSuccessCallback) => {

    const { mutate } = useMutation({
        mutationFn: (vars) => postSignUpOtpVerification(vars),
        onSuccess: (data) => {
            toast.success(data?.message, { autoClose: 3000 });
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        },

        onError: (error) => {
            toast.error(error?.response?.data?.message)
            console.log(error);

        }
    })

    return { mutate }
}