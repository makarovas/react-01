import { useParams } from 'react-router-dom';
import { NotFoundPage } from '../../../features/cocktail/ui/NotFoundPage';
import { MENU_ITEMS, MenuItems } from '../../config/menu';

interface ValidateRouteProps {
  children: React.ReactNode;
}

export const ValidateRoute = ({ children }: ValidateRouteProps) => {
  const { cocktailCode } = useParams();
  if (!cocktailCode || !MENU_ITEMS.includes(cocktailCode as MenuItems)) {
    return <NotFoundPage />;
  }
  return <>{children}</>;
};
