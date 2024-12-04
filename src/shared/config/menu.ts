export enum MenuItems {
  MARGARITA = 'margarita',
  MOJITO = 'mojito',
  A1 = 'a1',
  KIR = 'kir',
}

export const MENU_ITEMS = [
  MenuItems.MARGARITA,
  MenuItems.MOJITO,
  MenuItems.A1,
  MenuItems.KIR,
] as const;

export const DEFAULT_COCKTAIL = MENU_ITEMS[0];

export type MenuItemType = typeof MENU_ITEMS[number];
