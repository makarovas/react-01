export const fetchCocktailByCode = async (code: string) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${code}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch cocktails');
  }
  return await response.json();
};
