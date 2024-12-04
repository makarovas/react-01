import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../../../../shared/ui/Loader';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
