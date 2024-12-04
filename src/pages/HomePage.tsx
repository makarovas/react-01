import { Navigate, Route, Routes } from 'react-router-dom';
import { CocktailDetails } from '../features/cocktail/ui/CocktailDetails';
import { CocktailMenu } from '../features/cocktail/ui/CocktailMenu';
import { NotFoundPage } from '../features/cocktail/ui/NotFoundPage';
import styles from './HomePage.module.scss'; 
const HomePage = () => {
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
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default HomePage;