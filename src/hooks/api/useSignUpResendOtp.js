import { postSignUpResendOtp } from "@/api/service/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useSignUpResendOtp = (onSuccessCallback) => {
    const { mutate, isLoading, isError, data, error } = useMutation({
        mutationFn: (vars) => postSignUpResendOtp(vars),
        onSuccess: (data) => {
            toast.success(data?.message || "OTP resent successfully!", { autoClose: 3000 });
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        },
        onError: (error) => {
            toast.error(error?.response?.data?.message || "Failed to resend OTP.");
            console.error("Resend OTP Error:", error);
        }
    });

    return { mutate, isLoading, isError, data, error };
};
