import { postResetPassword } from "@/api/service/auth"
import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"


export const usePostResetPassword = () => {
    const { mutate } = useMutation({
        mutationFn: (vars) => postResetPassword(vars),
        onSuccess: (data) => {
            toast.success(data?.message, { autoClose: 3000 })
        },

        onError: (error) => {
            const errorMessage = error?.response?.data?.message
            toast.error(errorMessage)
        }
    })
    return { mutate }
}