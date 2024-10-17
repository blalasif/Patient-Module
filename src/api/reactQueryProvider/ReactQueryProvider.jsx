"use client"; // Ensures this is a client component

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const queryClientConfig = {
    defaultOptions: {
        queries: {
            staleTime: 60000
        }
    }
};

export default function ReactQueryProvider({ children }) {
    const [queryClient] = useState(() => new QueryClient(queryClientConfig));

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
