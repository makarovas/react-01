import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import Loader from '../../../shared/ui/Loader';
import { getCocktail } from '../model/cocktailSlice';
import { Cocktail } from '../model/types';

export const CocktailDetails: React.FC = () => {
  const { cocktailCode } = useParams<{ cocktailCode: string }>();
  const dispatch = useAppDispatch();
  const cocktail = useAppSelector((state) =>
    cocktailCode
      ? (state.cocktail.cocktails[cocktailCode] as unknown as Cocktail)
      : undefined
  );
  const status = useAppSelector((state) => state.cocktail.status);
  const error = useAppSelector((state) => state.cocktail.error);

  useEffect(() => {
    if (cocktailCode && !cocktail && status !== 'loading') {
      dispatch(getCocktail(cocktailCode));
    }
  }, [cocktailCode, cocktail, status, dispatch]);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p>Error: {error}</p>;
  if (!cocktail) return null;

  return <Loader />;

  // return (
  //   <div>
  //     <h1>{cocktail?.strDrink}</h1>
  //     <p>
  //       <strong>Category:</strong> {cocktail?.strCategory}
  //     </p>
  //     <p>
  //       <strong>Type:</strong> {cocktail?.strAlcoholic}
  //     </p>
  //     <p>
  //       <strong>Glass:</strong> {cocktail?.strGlass}
  //     </p>
  //     <p>
  //       <strong>Instructions:</strong> {cocktail?.strInstructions}
  //     </p>

  //     <LazyLoad height={200} offset={100} once>
  //       <img
  //         src={cocktail?.strDrinkThumb}
  //         alt={cocktail?.strDrink}
  //         style={{ maxWidth: '100%', borderRadius: '8px' }}
  //       />
  //     </LazyLoad>

  //     <h3>Ingredients:</h3>
  //     <ul>
  //       {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
  //         const measure = cocktail?.[`strMeasure${index}`];
  //         const ingredient = cocktail?.[`strIngredient${index}`];
  //         return (
  //           ingredient && (
  //             <li key={index}>
  //               {measure} {ingredient}
  //             </li>
  //           )
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
};
