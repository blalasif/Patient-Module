import { getAndFormatCountriesAndRegions } from "@/api/service/patient"
import { useQuery } from "@tanstack/react-query"


export const useGetCountriesRegions = () => {
    return useQuery({
        queryKey: ['countriesAndRegions'],
        queryFn: () => getAndFormatCountriesAndRegions(),
    })
}