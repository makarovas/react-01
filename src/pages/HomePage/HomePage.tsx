import { Navigate, Route, Routes } from 'react-router-dom';
import { CocktailDetails } from '../../features/cocktail/ui/CocktailDetails';
import { CocktailMenu } from '../../features/cocktail/ui/CocktailMenu';
import { NotFoundPage } from '../../features/cocktail/ui/NotFoundPage/NotFoundPage';
import { DEFAULT_COCKTAIL } from '../../shared/config/menu';
import { ValidateRoute } from '../../shared/ui/ValidateRoute';
import styles from './HomePage.module.scss';
export const HomePage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <CocktailMenu />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Navigate to={`/${DEFAULT_COCKTAIL}`} />} />
          <Route
            path='/:cocktailCode'
            element={
              <ValidateRoute>
                <CocktailDetails />
              </ValidateRoute>
            }
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  );
};
