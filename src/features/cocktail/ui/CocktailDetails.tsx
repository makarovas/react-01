import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { getCocktail } from '../model/cocktailSlice';

export const CocktailDetails = () => {
  const cocktails = useAppSelector((state) => state.cocktail.cocktails);
  const status = useAppSelector((state) => state.cocktail.status);
  const dispatch = useAppDispatch();
  const { cocktailCode } = useParams();

  useEffect(() => {
    if (cocktailCode) {
      dispatch(getCocktail(cocktailCode));
    }
  }, [cocktailCode, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error loading cocktail</p>;
  // TODO: create model
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cocktail = (cocktails as any).drinks?.[0];

  return (
    <div>
      <h1>{cocktail?.strDrink}</h1>
      <p>
        <strong>Category:</strong> {cocktail?.strCategory}
      </p>
      <p>
        <strong>Type:</strong> {cocktail?.strAlcoholic}
      </p>
      <p>
        <strong>Glass:</strong> {cocktail?.strGlass}
      </p>
      <p>
        <strong>Instructions:</strong> {cocktail?.strInstructions}
      </p>

      <LazyLoad height={200} offset={100} once>
        <img
          src={cocktail?.strDrinkThumb}
          alt={cocktail?.strDrink}
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        />
      </LazyLoad>

      <h3>Ingredients:</h3>
      <ul>
        {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
          const measure = cocktail?.[`strMeasure${index}`];
          const ingredient = cocktail?.[`strIngredient${index}`];
          return (
            ingredient && (
              <li key={index}>
                {measure} {ingredient}
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};
