import { Suspense } from 'react';
import { AppRouter } from './providers/router/ui/AppRouter';
import { StoreProvider } from './providers/StoreProvider';

export const App = () => {
  return (
    <StoreProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </StoreProvider>
  );
}; 