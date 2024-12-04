import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../../app/store';
import { MENU_ITEMS } from '../../../../shared/config/menu';
import { getCocktail } from '../../model/cocktailSlice';
import styles from './CocktailMenu.module.scss';

export const CocktailMenu = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCocktail(MENU_ITEMS[0]));
  }, [dispatch]);

  return (
    <nav className={styles['nav']}>
      <ul className={styles['menu-list']}>
        {MENU_ITEMS.map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) =>
                isActive ? styles['active-menu-item'] : styles['menu-item']
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
