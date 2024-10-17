import { postLogin } from "@/api/service/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"


export const useLogin = () => {

    const { mutate } = useMutation({
        mutationFn: (vars) => postLogin(vars),
        onSuccess: (data) => {
            toast.success(data?.message, { autoClose: 3000 })
        },
        onError: (error) => {
            const errorMessage = error?.response?.data?.message || error.message || "An unexpected error occurred.";
            toast.error(errorMessage, { autoClose: 3000 });
        }

    })
    return { mutate }

}