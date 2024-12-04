import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';
import { getCocktail } from '../model/cocktailSlice';

const menuItems = ['margarita', 'mojito', 'a1', 'kir'];

export const CocktailMenu = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCocktail('margarita'));
  }, [dispatch]);

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) =>
                isActive ? 'active-menu-item' : 'menu-item'
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* <style jsx>{`
        .menu-item {
          text-decoration: none;
          color: black;
          padding: 8px 16px;
          display: block;
          transition: color 0.3s ease, background-color 0.3s ease;
        }
        .active-menu-item {
          color: white;
          background-color: #007bff;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 4px 0;
        }
      `}</style> */}
    </nav>
  );
};
