import { getCocktailByCode } from './api';

describe('api', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('fetches cocktail data successfully', async () => {
    const mockData = { drinks: [{ strDrink: 'Margarita' }] };
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const result = await getCocktailByCode('margarita');
    expect(result).toEqual(mockData);
  });

  it('handles fetch error', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));
    await expect(getCocktailByCode('margarita')).rejects.toThrow('Network error');
  });
});
