import { API_URL } from '../../../shared/config/api';

export const getCocktailByCode = async (code: string) => {
  const response = await fetch(
    `${API_URL}/search.php?s=${encodeURIComponent(code)}`
  );
  return response.json();
};
