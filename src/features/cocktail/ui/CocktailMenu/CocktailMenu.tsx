import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../../../shared/config/menu';
import styles from './CocktailMenu.module.scss';

export const CocktailMenu = () => {
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
