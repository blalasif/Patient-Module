import { useInfiniteQuery } from "@tanstack/react-query";
import { getAndFormatEtnicities } from "@/api/service/patient";

export const useGetEthnicities = () => {
    return useInfiniteQuery({
        queryKey: ['ethnicities'],
        queryFn: ({ pageParam = 1 }) => getAndFormatEtnicities({ pageParam }),
        getNextPageParam: (lastPage) => {
            console.log(lastPage);

            // Adjust based on your pagination data structure
            const { currentPage, totalPages } = lastPage.meta;
            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
    });
};
