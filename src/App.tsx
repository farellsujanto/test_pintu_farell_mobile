import React from 'react';
import Routes from './Routes';
import { QueryClientProvider } from '@tanstack/react-query'
import { defaultQueryClient } from './configs/queryClient';

const App = () => {
    return (
        <QueryClientProvider client={defaultQueryClient}>
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
