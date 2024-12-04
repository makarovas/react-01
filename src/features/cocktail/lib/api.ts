const API_URL = import.meta.env.VITE_COCKTAIL_API_URL;

export const getCocktailByCode = async (code: string) => {
  const response = await fetch(
    `${API_URL}/search.php?s=${encodeURIComponent(code)}`
  );
  return response.json();
};
