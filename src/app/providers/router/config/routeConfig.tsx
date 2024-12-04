import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '../../../../features/cocktail/ui/NotFoundPage';
import { HomePage } from '../../../../pages/HomePage';
import { CocktailDetails } from '../../../../features/cocktail/ui/CocktailDetails';

export enum AppRoutes {
  DEFAULT = 'default',
  HOME = 'home',
  COCKTAIL = 'cocktail',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.DEFAULT]: '/',
  [AppRoutes.HOME]: '/margarita',
  [AppRoutes.COCKTAIL]: '/:cocktailCode',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.DEFAULT]: {
    path: RoutePath.default,
    element: <HomePage />,
  },
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <CocktailDetails />,
  },
  [AppRoutes.COCKTAIL]: {
    path: RoutePath.cocktail,
    element: <CocktailDetails />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
