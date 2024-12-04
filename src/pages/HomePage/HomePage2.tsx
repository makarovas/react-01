import { Navigate, Route, Routes } from 'react-router-dom';
import { CocktailDetails } from '../../features/cocktail/ui/CocktailDetails';
import { CocktailMenu } from '../../features/cocktail/ui/CocktailMenu';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const defaultCocktail = 'margarita';
  return (
    <main className={styles.main}>
      <div className={styles.menu}>
        <CocktailMenu />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Navigate to={`/${defaultCocktail}`} />} />
          <Route path='/:cocktailCode' element={<CocktailDetails />} />
        </Routes>
      </div>
    </main>
  );
};
