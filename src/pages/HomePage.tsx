import { Navigate, Route, Routes } from 'react-router-dom';
import { CocktailDetails } from '../features/cocktail/ui/CocktailDetails';
import { CocktailMenu } from '../features/cocktail/ui/CocktailMenu';
import { NotFoundPage } from '../features/cocktail/ui/NotFoundPage';

const HomePage = () => {
  const defaultCocktail = 'margarita';

  return (
    <main>
      <CocktailMenu />
      <Routes>
        <Route path='/' element={<Navigate to={`/${defaultCocktail}`} />} />
        <Route path='/:cocktailCode' element={<CocktailDetails />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};
export default HomePage;
