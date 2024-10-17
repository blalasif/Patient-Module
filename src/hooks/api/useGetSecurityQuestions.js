import { getAndFormatSecurityQuestions } from "@/api/service/patient"
import { useQuery } from "@tanstack/react-query"

export const useGetSecurityQuestions = () => {
    return useQuery({
        queryKey: ['securityQuestions'],
        queryFn: () => getAndFormatSecurityQuestions(),
    })
}