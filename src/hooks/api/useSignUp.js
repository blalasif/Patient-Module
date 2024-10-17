import { postSignUp } from "@/api/service/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useSignUp = (onSuccessCallback) => {
    const { mutate } = useMutation({
        mutationFn: (vars) => postSignUp(vars),
        onSuccess: (data) => {
            toast.success(data?.message, { autoClose: 3000 });
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        },
        onError: (error) => {
            const errorMessage = error?.response?.data?.message;

            if (Array.isArray(errorMessage)) {
                errorMessage.forEach((msg) => toast.error(msg, { autoClose: 5000 }));
            } else {
                toast.error(`Sign-up failed: ${errorMessage}`, { autoClose: 5000 });
            }
            console.log("Sign-up failed", error.response?.data);
        }
    });

    return { mutate };
};
