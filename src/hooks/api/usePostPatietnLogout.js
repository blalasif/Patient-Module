import { postLogout } from "@/api/service/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"



export const usePostPatientLogout = () => {

    const { mutate } = useMutation({
        mutationFn: (vars) => postLogout(vars),
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