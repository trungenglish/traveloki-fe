import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import './index.css';
import App from './App';
import { FallbackComponent } from './components/FallbackComponent';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <App />
      </ErrorBoundary>
    </StrictMode>
  </QueryClientProvider>
);
